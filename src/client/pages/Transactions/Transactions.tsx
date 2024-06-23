import React, { ReactElement } from 'react';
import { Container, Stack, Table, Title } from '@mantine/core';

import ExchangeRate from '../../components/ExchangeRate/ExchangeRate';
import Loading from '../../components/Loading/Loading';
import useTransactions from '../../hooks/useTransactions';

export default function Transactions(): ReactElement {
  const { isFetching: isTransactionsFetching, data: transactionsData } = useTransactions();
  const rows = transactionsData?.transactions?.map(({ id, amount, currency, date, status }) => (
    <Table.Tr key={id}>
      <Table.Td>{new Date(date).toLocaleDateString('en-US')}</Table.Td>
      <Table.Td>
        {amount} {currency}
      </Table.Td>
      <Table.Td>{status}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Container maw={800}>
      <Stack>
        <Title size="h1">Transactions</Title>
        <ExchangeRate />
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Date</Table.Th>
              <Table.Th>Amount</Table.Th>
              <Table.Th>Status</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
        {isTransactionsFetching ? <Loading /> : null}
      </Stack>
    </Container>
  );
}
