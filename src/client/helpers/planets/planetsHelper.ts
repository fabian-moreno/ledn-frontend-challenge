import { PlanetType } from '../../types/planetType';

export const getPlanetsMap = (planets: PlanetType[]): Record<string, PlanetType> => {
  const planetsMap: Record<string, PlanetType> = {};

  planets.forEach((planet: PlanetType) => {
    planetsMap[planet.id] = {
      ...planet,
      imageUrl: `/planets/planet-${parseInt(planet.id) % 10}.png`,
      transactions: { count: 0, value: 0 },
      isBlockable: false,
    };
  });

  return planetsMap;
};
