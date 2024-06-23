import { CurrencyEnum } from '../enums/currencyEnum';
import { StatusEnum } from '../enums/statusEnum';

export interface TransactionType {
  amount: number;
  currency: CurrencyEnum;
  date: Date;
  id: string;
  status: StatusEnum;
  user: string;
}
