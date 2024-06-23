import React, { ReactElement } from 'react';
import Lottie from 'lottie-react';
import { Button, Center, Container, Stack, Text } from '@mantine/core';
import { Link } from 'react-router-dom';

import notFoundAnimation from '../../lotties/notFound.json';

export default function NotFound(): ReactElement {
  return (
    <Container maw={800}>
      <Stack>
        <Lottie animationData={notFoundAnimation} loop />
        <Text ta="center" size="xl" fw={700}>
          Oops! We lost the planet
        </Text>
        <Text ta="center" size="md">
          Looks like the planet you are searching for has gone on an intergalactic vacation.
        </Text>
        <Center>
          <Button component={Link} to="/" w="fit-content">
            Bring me back to Earth
          </Button>
        </Center>
      </Stack>
    </Container>
  );
}
