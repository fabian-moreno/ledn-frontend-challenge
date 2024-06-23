import React, { ReactElement } from 'react';
import { Group, Text } from '@mantine/core';

import { LinkProps } from './link.props';
import { StyledLink } from './Link.styles';

export default function Link({ url, text, icon, onClick }: LinkProps): ReactElement {
  return (
    <StyledLink to={url} onClick={onClick}>
      <Group gap={4}>
        {icon}
        <Text>{text}</Text>
      </Group>
    </StyledLink>
  );
}
