import { ReactElement } from 'react';
import { Group, Loader, NumberFormatter, Stack, Text } from '@mantine/core';

import { CurrencyEnum } from '../../enums/currencyEnum';
import useExchangeRate from '../../hooks/useExchangeRate';
import Currency from '../Currency/Currency';

import { PlanetTransactionProps } from './planetTransaction.props';

export default function PlanetTransaction({ transactions }: PlanetTransactionProps): ReactElement {
  const { exchangeRate } = useExchangeRate();
  const isExchangeRateDefined = typeof exchangeRate !== 'undefined';
  const hasTransactionInProgress = transactions.count > 0;

  return (
    <>
      <Group>
        <Text>{CurrencyEnum.ICS} Transactions in progress:</Text>
        <Text fw={600}>
          <NumberFormatter value={transactions.count ?? 0} thousandSeparator />
        </Text>
      </Group>

      {hasTransactionInProgress ? (
        <Stack gap={0}>
          <Currency label="In progress" currency={CurrencyEnum.ICS} value={transactions.value} />

          {!isExchangeRateDefined ? (
            <Loader size="xs" />
          ) : (
            <Currency
              label="Value in "
              currency={CurrencyEnum.GCS}
              value={transactions.value * exchangeRate}
            />
          )}
        </Stack>
      ) : null}
    </>
  );
}
