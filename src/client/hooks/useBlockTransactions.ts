import { useState } from 'react';
import { useMutation, useQueryClient } from 'react-query';

import { EndpointEnum } from '../enums/endpointEnum';
import { QueryKeyEnum } from '../enums/queryKeyEnum';
import { StatusEnum } from '../enums/statusEnum';
import { getRequest, putRequest } from '../helpers/request/requestHelper';
import { ResponseType } from '../types/responseType';
import { TransactionType } from '../types/transactionType';
import { UserType } from '../types/userType';

export default function useBlockTransactions() {
  const usersQueryFn = (planetId: string) => () =>
    getRequest(`${EndpointEnum.UsersPlanet}${planetId}`);
  const transactionsQueryFn = (userIds: string[]) => () =>
    getRequest(`${EndpointEnum.TransactionsUsers}${JSON.stringify(userIds)}`);
  const transactionsMutationFn = (transactions: TransactionType[]) =>
    putRequest(EndpointEnum.TransactionsUpdateBatch, { transactions });
  const { mutateAsync } = useMutation({
    mutationFn: transactionsMutationFn,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: [QueryKeyEnum.Planets] });
      queryClient.invalidateQueries({ queryKey: [QueryKeyEnum.Transactions] });
      queryClient.invalidateQueries({ queryKey: [QueryKeyEnum.Users] });
    },
  });
  const queryClient = useQueryClient();
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const blockTransactions = async (planetId: string): Promise<void> => {
    setIsLoading(true);

    try {
      const usersData = await queryClient.fetchQuery<ResponseType<UserType>>({
        queryFn: usersQueryFn(planetId),
      });
      const userIds = usersData.users.map(({ id }) => id);
      const transactionsData = await queryClient.fetchQuery<ResponseType<TransactionType>>({
        queryFn: transactionsQueryFn(userIds),
      });
      const inProgressTransactions = transactionsData.transactions
        .filter((transaction) => transaction.status === StatusEnum.InProgress)
        .map((transaction) => ({
          ...transaction,
          status: StatusEnum.Blocked,
        }));

      await mutateAsync(inProgressTransactions);
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  return {
    isLoading,
    blockTransactions,
  };
}
