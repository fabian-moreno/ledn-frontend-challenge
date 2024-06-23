import useTransactions from './useTransactions';

export default function useTransactionDates() {
  const { data } = useTransactions();
  const transactions = data?.transactions;

  if (!transactions?.length) return { minDate: undefined, maxDate: undefined };

  const dates = transactions.map(({ date }) => Number(new Date(date)));
  const minDate = new Date(Math.min(...dates));
  const maxDate = new Date(Math.max(...dates));

  return { minDate, maxDate };
}
