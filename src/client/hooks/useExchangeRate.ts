import { useInfiniteQuery } from 'react-query';

import { EndpointEnum } from '../enums/endpointEnum';
import { QueryKeyEnum } from '../enums/queryKeyEnum';
import { getQueryFn } from '../helpers/request/requestHelper';

export default function useExchangeRate() {
  const { isLoading: isRateLoading, data } = useInfiniteQuery<{ rate: number }>({
    queryKey: [QueryKeyEnum.ExchangeRate],
    queryFn: getQueryFn(EndpointEnum.ExchangeRate),
    refetchInterval: 1000,
  });

  return {
    isRateLoading,
    exchangeRate: data?.pages?.[0]?.rate,
  };
}
