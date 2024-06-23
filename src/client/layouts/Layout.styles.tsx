import { Image, ImageProps } from '@mantine/core';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
    0% {
        transform: translateY(0) rotate(0);
    }
    50% {
        transform: translateY(-3rem) rotate(180deg);
    }
    100% {
        transform: translateY(0) rotate(360deg);
    }
`;

export const Star = styled(Image)<ImageProps>`
  animation: ${float} 120s infinite linear;
  transform-origin: 50% 50%;
`;
