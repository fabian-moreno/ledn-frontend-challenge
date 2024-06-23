import { useQuery } from 'react-query';

import { EndpointEnum } from '../enums/endpointEnum';
import { QueryKeyEnum } from '../enums/queryKeyEnum';
import { getQueryFn } from '../helpers/request/requestHelper';
import { ResponseType } from '../types/responseType';
import { TransactionType } from '../types/transactionType';

export default function useTransactions() {
  return useQuery<ResponseType<TransactionType>>({
    queryKey: [QueryKeyEnum.Transactions],
    queryFn: getQueryFn(EndpointEnum.Transactions),
  });
}
