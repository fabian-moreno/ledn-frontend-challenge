import { useQuery } from 'react-query';

import { EndpointEnum } from '../enums/endpointEnum';
import { QueryKeyEnum } from '../enums/queryKeyEnum';
import { getQueryFn } from '../helpers/request/requestHelper';
import { ResponseType } from '../types/responseType';
import { UserType } from '../types/userType';

export default function useUsers() {
  return useQuery<ResponseType<UserType>>({
    queryKey: [QueryKeyEnum.Users],
    queryFn: getQueryFn(EndpointEnum.Users),
  });
}
