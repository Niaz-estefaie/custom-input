import { useState } from 'react';

interface UseInputOptions {
  required?: boolean;
  minLength?: number;
  maxLength?: number;
}

interface UseInputResult {
  value: string;
  error: string | null;
  success: string | null;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  reset: () => void;
}

export const useInput = (
  initialValue: string = '',
  options: UseInputOptions = {}
): UseInputResult => {
  const [value, setValue] = useState<string>(initialValue);
  const [error, setError] = useState<string | null>(null);
  const [success, setSuccess] = useState<string | null>(null);

  const validate = (value: string): string | null => {
    if (options.required && !value.trim()) {
      return 'This field is required.';
    }
    if (options.minLength && value.length < options.minLength) {
      return `Minimum length is ${options.minLength} characters.`;
    }
    if (options.maxLength && value.length > options.maxLength) {
      return `Maximum length is ${options.maxLength} characters.`;
    }
    return null;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const newValue = e.target.value;
    setValue(newValue);

    const validationError = validate(newValue);
    setError(validationError);

    if (!validationError) {
      setSuccess('Input is valid!');
    } else {
      setSuccess(null);
    }
  };

  const reset = (): void => {
    setValue(initialValue);
    setError(null);
    setSuccess(null);
  };

  return {
    value,
    error,
    success,
    handleChange,
    reset,
  };
};
