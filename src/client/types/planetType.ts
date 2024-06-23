import { TransactionSummaryType } from './transactionSummaryType';

export interface PlanetType {
  id: string;
  name: string;
  transactions: TransactionSummaryType;
  historicValue: number[];
  imageUrl: string;
  isBlockable: boolean;
}
