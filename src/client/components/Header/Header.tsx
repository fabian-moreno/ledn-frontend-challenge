import React, { ReactElement } from 'react';
import { AppShell, Avatar, Burger, Flex, Group, Image, Text } from '@mantine/core';

import { HeaderProps } from './header.props';

export default function Header({ opened, toggle, userName }: HeaderProps): ReactElement {
  return (
    <AppShell.Header>
      <Flex h="100%" px="md" justify="space-between">
        <Group h="100%">
          <Burger opened={opened} onClick={toggle} hiddenFrom="md" size="md" />
          <Image src="/logo.svg" h={30} w="auto" fit="contain" />
          <Text fw={700} size="xl">
            Coruscant Bank
          </Text>
        </Group>

        <Group visibleFrom="md">
          <Text fw={700} size="md">
            {userName}
          </Text>
          <Avatar src="/avatar.jpg" />
        </Group>
      </Flex>
    </AppShell.Header>
  );
}
