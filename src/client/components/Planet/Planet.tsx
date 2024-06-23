import { ReactElement, useCallback } from 'react';
import { Button, Card, Flex, Grid, Image, Stack, Text, Title } from '@mantine/core';
import { useModals } from '@mantine/modals';

import useBlockTransactions from '../../hooks/useBlockTransactions';
import PlanetTransaction from '../PlanetTransaction/PlanetTransaction';

import { PlanetProps } from './planet.props';

export default function Planet({ planet }: PlanetProps): ReactElement {
  const { blockTransactions, isLoading } = useBlockTransactions();
  const modals = useModals();
  const openConfirmModal = useCallback(() => {
    modals.openConfirmModal({
      title: 'Block Planet Transactions',
      children: <Text>Would you like to block in progress transactions for {planet.name}?</Text>,
      labels: { confirm: 'Confirm', cancel: 'Cancel' },
      onConfirm: () => blockTransactions(planet.id),
    });
  }, [planet, blockTransactions, modals]);

  return (
    <Card>
      <Grid>
        <Grid.Col span={{ base: 3, xs: 2 }}>
          <Image src={planet.imageUrl} />
        </Grid.Col>
        <Grid.Col span={{ base: 9, xs: 7 }}>
          <Stack gap={0}>
            <Title size="h3" mb={20}>
              {planet.name}
            </Title>
            <PlanetTransaction transactions={planet.transactions} />
          </Stack>
        </Grid.Col>
        <Grid.Col span={{ base: 12, xs: 3 }}>
          <Flex justify="flex-end">
            {planet.isBlockable ? (
              <Button color="red" onClick={openConfirmModal} loading={isLoading}>
                Block
              </Button>
            ) : (
              <Text size="xs" c="yellow">
                No transactions in progress on the planet
              </Text>
            )}
          </Flex>
        </Grid.Col>
      </Grid>
    </Card>
  );
}
