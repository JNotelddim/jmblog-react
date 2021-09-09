import { ChangeEventHandler } from 'react';

export interface WYSIWYGProps {
  value: string;
  onChange: (content: string) => void;
  onBlur: ChangeEventHandler;
  className?: string;
}
