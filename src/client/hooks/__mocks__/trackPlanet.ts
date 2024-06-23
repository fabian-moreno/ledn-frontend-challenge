import { CurrencyEnum } from '../../enums/currencyEnum';
import { StatusEnum } from '../../enums/statusEnum';
import { PlanetType } from '../../types/planetType';
import { TransactionType } from '../../types/transactionType';
import { UserType } from '../../types/userType';

export const planet1: PlanetType = {
  id: 'planet1',
  name: 'Planet One',
  transactions: { count: 0, value: 0 },
  historicValue: [],
  imageUrl: '/planet1.jpg',
  isBlockable: false,
};

export const planet2: PlanetType = {
  id: 'planet2',
  name: 'Planet Two',
  transactions: { count: 0, value: 0 },
  historicValue: [],
  imageUrl: '/planet2.jpg',
  isBlockable: false,
};

export const planets: PlanetType[] = [
  {
    id: 'planet1',
    name: 'Planet One',
    transactions: { count: 0, value: 0 },
    historicValue: [],
    imageUrl: '',
    isBlockable: false,
  },
  {
    id: 'planet2',
    name: 'Planet Two',
    transactions: { count: 0, value: 0 },
    historicValue: [],
    imageUrl: '',
    isBlockable: false,
  },
];

export const transactions: TransactionType[] = [
  {
    id: '1',
    user: 'user1',
    status: StatusEnum.InProgress,
    currency: CurrencyEnum.ICS,
    date: new Date(),
    amount: 100,
  },
  {
    id: '2',
    user: 'user2',
    status: StatusEnum.InProgress,
    currency: CurrencyEnum.ICS,
    date: new Date(),
    amount: 200,
  },
];

export const users: UserType[] = [
  { id: 'user1', name: 'planet1', gender: 'male', homeworld: '1' },
  { id: 'user2', name: 'planet2', gender: 'female', homeworld: '2' },
];
