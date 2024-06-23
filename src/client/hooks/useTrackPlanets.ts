import { useEffect, useState } from 'react';
import { DateValue } from '@mantine/dates/lib/types';

import { CurrencyEnum } from '../enums/currencyEnum';
import { StatusEnum } from '../enums/statusEnum';
import { getPlanetsMap } from '../helpers/planets/planetsHelper';
import { getUsersPlanetMap } from '../helpers/users/usersHelper';
import { PlanetType } from '../types/planetType';

import useGalaxy from './useGalaxy';

export default function useTrackPlanets(date: DateValue) {
  const { planets, transactions, users, isLoading } = useGalaxy();
  const [sortedPlanets, setSortedPlanets] = useState<PlanetType[]>([]);

  useEffect(() => {
    if (planets && transactions && users) {
      const planetsMap = getPlanetsMap(planets);
      const usersPlanetMap: Record<string, string> = getUsersPlanetMap(users);

      transactions.forEach((transaction) => {
        const planetId = usersPlanetMap[transaction.user];

        if (planetId && planetsMap[planetId]) {
          if (
            transaction.status === StatusEnum.InProgress &&
            transaction.currency === CurrencyEnum.ICS &&
            (!date || new Date(transaction.date) >= date)
          ) {
            planetsMap[planetId].transactions.count += 1;
            planetsMap[planetId].transactions.value += transaction.amount;
          }

          planetsMap[planetId].isBlockable =
            planetsMap[planetId].isBlockable || transaction.status === StatusEnum.InProgress;
        }
      });

      const sortedPlanets = Object.values(planetsMap).sort(
        (a, b) => b.transactions.count - a.transactions.count
      );

      setSortedPlanets(sortedPlanets);
    }
  }, [planets, transactions, users, date]);

  return {
    isLoading,
    planets: sortedPlanets,
  };
}
