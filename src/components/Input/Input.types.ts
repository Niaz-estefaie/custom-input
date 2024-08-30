import { ChangeEvent, ReactNode } from 'react';

export interface InputProps {
  label?: string;
  placeholder?: string;
  value: string;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: string;
  success?: string;
  icon?: ReactNode;
}
