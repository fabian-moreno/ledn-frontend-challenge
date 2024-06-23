import { ReactElement } from 'react';

export interface LinkProps {
  url: string;
  text: string;
  icon: ReactElement;
  onClick?: () => void;
}
