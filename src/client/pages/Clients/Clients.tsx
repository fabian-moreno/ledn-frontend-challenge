import React, { ReactElement } from 'react';
import { Container, Stack, Table, Title } from '@mantine/core';

import ExchangeRate from '../../components/ExchangeRate/ExchangeRate';
import Loading from '../../components/Loading/Loading';
import useUsers from '../../hooks/useUsers';

export default function Clients(): ReactElement {
  const { isFetching: isUsersFetching, data: usersData } = useUsers();

  const rows = usersData?.users?.map(({ id, gender, name }) => (
    <Table.Tr key={id}>
      <Table.Td>{id}</Table.Td>
      <Table.Td>{name}</Table.Td>
      <Table.Td>{gender}</Table.Td>
    </Table.Tr>
  ));

  return (
    <Container maw={800}>
      <Stack>
        <Title size="h1">Clients</Title>
        <ExchangeRate />
        <Table>
          <Table.Thead>
            <Table.Tr>
              <Table.Th>Id</Table.Th>
              <Table.Th>Name</Table.Th>
              <Table.Th>Gender</Table.Th>
            </Table.Tr>
          </Table.Thead>
          <Table.Tbody>{rows}</Table.Tbody>
        </Table>
        {isUsersFetching ? <Loading /> : null}
      </Stack>
    </Container>
  );
}
