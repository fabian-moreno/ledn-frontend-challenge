import { useQuery } from 'react-query';

import { EndpointEnum } from '../enums/endpointEnum';
import { QueryKeyEnum } from '../enums/queryKeyEnum';
import { getQueryFn } from '../helpers/request/requestHelper';
import { PlanetType } from '../types/planetType';
import { ResponseType } from '../types/responseType';

import useTransactions from './useTransactions';
import useUsers from './useUsers';

export default function useGalaxy() {
  const { isFetching: isPlanetsFetching, data: planetsData } = useQuery<ResponseType<PlanetType>>({
    queryKey: [QueryKeyEnum.Planets],
    queryFn: getQueryFn(EndpointEnum.Planets),
    refetchInterval: 60000,
  });
  const { isFetching: isTransactionsFetching, data: transactionsData } = useTransactions();
  const { isFetching: isUsersFetching, data: usersData } = useUsers();

  return {
    planets: planetsData?.planets,
    transactions: transactionsData?.transactions,
    users: usersData?.users,
    isLoading: isPlanetsFetching || isUsersFetching || isTransactionsFetching,
  };
}
