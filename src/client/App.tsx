import React, { ReactElement } from 'react';
import { MantineProvider } from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { QueryClient, QueryClientProvider } from 'react-query';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

import { RouteEnum } from './enums/routeEnum';
import Layout from './layouts/Layout';
import Clients from './pages/Clients/Clients';
import Home from './pages/Home/Home';
import NotFound from './pages/NotFound/NotFound';
import Transactions from './pages/Transactions/Transactions';

import '@mantine/core/styles.css';
import '@mantine/dates/styles.css';

const queryClient = new QueryClient();

export default function App(): ReactElement {
  return (
    <QueryClientProvider client={queryClient} contextSharing={true}>
      <MantineProvider defaultColorScheme="dark">
        <ModalsProvider>
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Layout />}>
                <Route index element={<Home />} />
                <Route path={RouteEnum.Clients} element={<Clients />} />
                <Route path={RouteEnum.Transactions} element={<Transactions />} />
                <Route path={RouteEnum.Others} element={<NotFound />} />
              </Route>
            </Routes>
          </BrowserRouter>
        </ModalsProvider>
      </MantineProvider>
    </QueryClientProvider>
  );
}
