import React, { ReactElement, useState } from 'react';
import { Container, Stack, Title } from '@mantine/core';
import { DateTimePicker } from '@mantine/dates';
import { DateValue } from '@mantine/dates/lib/types';

import ExchangeRate from '../../components/ExchangeRate/ExchangeRate';
import Loading from '../../components/Loading/Loading';
import Planets from '../../components/Planets/Planets';
import useTrackPlanets from '../../hooks/useTrackPlanets';
import useTransactionDates from '../../hooks/useTransactionDates';

export default function Home(): ReactElement {
  const [date, setDate] = useState<DateValue>(null);
  const { isLoading, planets } = useTrackPlanets(date);
  const { minDate, maxDate } = useTransactionDates();
  const label = 'Pick date and time to filter planets transactions';

  const handleOnChange = (value: DateValue) => {
    setDate(value);
  };

  return (
    <Container maw={800}>
      <Stack>
        <Title size="h1">Track Planets</Title>
        <ExchangeRate />
        <DateTimePicker
          label={label}
          placeholder={label}
          onChange={handleOnChange}
          minDate={minDate}
          maxDate={maxDate}
          clearable
        />
        <Planets planets={planets} />
        {isLoading ? <Loading /> : null}
      </Stack>
    </Container>
  );
}
