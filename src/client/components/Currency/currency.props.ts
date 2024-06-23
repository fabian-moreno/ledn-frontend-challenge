import { CurrencyEnum } from '../../enums/currencyEnum';

export interface CurrencyProps {
  currency: CurrencyEnum;
  value: number;
  label?: string;
}
