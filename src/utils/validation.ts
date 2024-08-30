export const isRequired = (value: string): boolean => value.trim() !== '';

export const minLength = (value: string, length: number): boolean => value.length >= length;

export const maxLength = (value: string, length: number): boolean => value.length <= length;
