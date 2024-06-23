import { render, screen } from '@testing-library/react';

import { getPlanetsMap } from '../../helpers/planets/planetsHelper';
import { getUsersPlanetMap } from '../../helpers/users/usersHelper';
import { planet1, planet2, planets, transactions, users } from '../__mocks__/trackPlanet';
import useGalaxy from '../useGalaxy';
import useTrackPlanets from '../useTrackPlanets';

jest.mock('../useGalaxy');
jest.mock('../../helpers/planets/planetsHelper');
jest.mock('../../helpers/users/usersHelper');

const mockUseGalaxy = useGalaxy as jest.MockedFunction<typeof useGalaxy>;
const mockGetPlanetsMap = getPlanetsMap as jest.MockedFunction<typeof getPlanetsMap>;
const mockGetUsersPlanetMap = getUsersPlanetMap as jest.MockedFunction<typeof getUsersPlanetMap>;

function TestComponent({ date }: { date: Date }) {
  const { planets } = useTrackPlanets(date);

  return <div data-testid="planets">{JSON.stringify(planets)}</div>;
}

describe('useTrackPlanets', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should return sorted planets based on transactions count', () => {
    const isLoading = false;

    mockUseGalaxy.mockReturnValue({ planets, transactions, users, isLoading });
    mockGetPlanetsMap.mockReturnValue({
      planet1,
      planet2,
    });
    mockGetUsersPlanetMap.mockReturnValue({ user1: 'planet1', user2: 'planet2' });

    render(<TestComponent date={new Date()} />);

    expect(screen.getByTestId('planets').textContent).toBe(JSON.stringify([planet1, planet2]));
  });

  it('should handle empty planets, transactions, and users gracefully', () => {
    mockUseGalaxy.mockReturnValue({ planets: [], transactions: [], users: [], isLoading: false });
    mockGetPlanetsMap.mockReturnValue({});
    mockGetUsersPlanetMap.mockReturnValue({});

    render(<TestComponent date={new Date()} />);

    expect(screen.getByTestId('planets').textContent).toBe(JSON.stringify([]));
  });
});
