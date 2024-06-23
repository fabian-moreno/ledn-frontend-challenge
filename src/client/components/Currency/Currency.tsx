import { ReactElement } from 'react';
import { Group, NumberFormatter, Text } from '@mantine/core';

import { CurrencyProps } from './currency.props';

export default function Currency({ currency, value, label }: CurrencyProps): ReactElement {
  return (
    <Group gap={8}>
      <Text fw={600}>
        {label} {currency}
      </Text>
      <Text fw={600}>
        <NumberFormatter
          value={value ?? 0}
          thousandSeparator
          decimalScale={2}
          style={{ color: value > 0 ? 'green' : 'red' }}
        />
      </Text>
    </Group>
  );
}
