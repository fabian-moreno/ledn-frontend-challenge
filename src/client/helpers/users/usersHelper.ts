import { UserType } from '../../types/userType';

export const getUsersPlanetMap = (users: UserType[]): Record<string, string> => {
  const usersPlanetMap: Record<string, string> = {};

  users.forEach((user: UserType) => (usersPlanetMap[user.id] = user.homeworld));

  return usersPlanetMap;
};
