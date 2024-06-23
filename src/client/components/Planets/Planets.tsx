import { ReactElement } from 'react';
import { Stack } from '@mantine/core';

import Planet from '../Planet/Planet';

import { PlanetsProps } from './planets.props';

export default function Planets({ planets }: PlanetsProps): ReactElement | null {
  if (!planets) return null;

  const planetsEl = planets.map((planet) => <Planet key={planet.id} planet={planet} />);

  return <Stack>{planetsEl}</Stack>;
}
