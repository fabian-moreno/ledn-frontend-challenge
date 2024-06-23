import { CurrencyEnum } from '../enums/currencyEnum';

export interface ExchangeRecord {
  date: string;
  [CurrencyEnum.GCS]: number;
}
