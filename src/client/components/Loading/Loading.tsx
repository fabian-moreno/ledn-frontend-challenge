import React, { ReactElement } from 'react';
import { Box, Loader } from '@mantine/core';

export default function Loading(): ReactElement {
  return (
    <Box
      pos="fixed"
      top="50%"
      left={{ base: '50%', md: 'calc(150px + 50%)' }}
      style={{ pointerEvents: 'none' }}
    >
      <Loader />
    </Box>
  );
}
