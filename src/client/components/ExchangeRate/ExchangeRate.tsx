import { ReactElement, useEffect, useState } from 'react';
import { AreaChart } from '@mantine/charts';
import { Box, Flex, Title } from '@mantine/core';

import { CurrencyEnum } from '../../enums/currencyEnum';
import useExchangeRate from '../../hooks/useExchangeRate';
import { ExchangeRecord } from '../../types/exchangeType';

export default function ExchangeRate(): ReactElement {
  const { exchangeRate } = useExchangeRate();
  const [values, setValues] = useState<ExchangeRecord[]>([]);

  useEffect(() => {
    const isExchangeRateDefined = typeof exchangeRate !== 'undefined';

    if (isExchangeRateDefined) {
      setValues((prevItems) => [
        ...prevItems,
        {
          date: new Date().toLocaleTimeString(),
          [CurrencyEnum.GCS]: exchangeRate,
        },
      ]);
    }
  }, [exchangeRate]);

  return (
    <Box pos="relative" h={200}>
      <AreaChart
        h={200}
        data={values}
        dataKey="date"
        series={[{ name: CurrencyEnum.GCS, color: 'teal.6' }]}
        curveType="linear"
        tickLine="x"
        gridAxis="none"
        withXAxis={false}
        withYAxis={false}
        type="split"
        unit={CurrencyEnum.GCS}
        withDots={false}
      />
      <Flex pos="absolute" align="center" justify="center" inset={0}>
        <Title size="h4">
          1 {CurrencyEnum.ICS} = {exchangeRate} {CurrencyEnum.GCS}
        </Title>
      </Flex>
    </Box>
  );
}
