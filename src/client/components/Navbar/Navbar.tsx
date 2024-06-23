import React, { ReactElement } from 'react';
import { AppShell, Avatar, Group, Text } from '@mantine/core';

import { Money, Planet, Users } from '@phosphor-icons/react';

import { Star } from '../../layouts/Layout.styles';
import Link from '../Link/Link';

import { NavbarProps } from './navbar.props';

export default function Navbar({ toggle, userName }: NavbarProps): ReactElement {
  return (
    <AppShell.Navbar>
      <AppShell.Section hiddenFrom="md" m={15}>
        <Group>
          <Avatar src="/avatar.jpg" />
          <Text fw={700} size="lg">
            {userName}
          </Text>
        </Group>
      </AppShell.Section>
      <AppShell.Section m={15}>
        <Link url="/" text="Track Planets" icon={<Planet size={24} />} onClick={toggle} />
      </AppShell.Section>
      <AppShell.Section mx={15} my={10}>
        <Link url="/clients" text="Clients" icon={<Users size={24} />} onClick={toggle} />
      </AppShell.Section>
      <AppShell.Section mx={15} my={10} grow>
        <Link url="/transactions" text="Transactions" icon={<Money size={24} />} onClick={toggle} />
      </AppShell.Section>
      <AppShell.Section mx={15} my={10}>
        <Star w={260} src="/death-star.png" my={10} />
      </AppShell.Section>
    </AppShell.Navbar>
  );
}
