import React, { ReactElement } from 'react';
import { AppShell } from '@mantine/core';
import { useDisclosure } from '@mantine/hooks';
import { Outlet } from 'react-router-dom';

import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';

export default function Layout(): ReactElement {
  const [opened, { toggle }] = useDisclosure();
  const userName = 'Fabián Kenobi';

  return (
    <AppShell
      header={{ height: 60 }}
      navbar={{
        width: 300,
        breakpoint: 'md',
        collapsed: { mobile: !opened },
      }}
      padding="md"
    >
      <Header opened={opened} toggle={toggle} userName={userName} />

      <Navbar toggle={toggle} userName={userName} />

      <AppShell.Main pr={0} pl={{ base: 0, md: 300 }}>
        <Outlet />
      </AppShell.Main>
    </AppShell>
  );
}
