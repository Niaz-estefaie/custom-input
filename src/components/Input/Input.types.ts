export interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  type?: string;
  icon?: React.ReactNode;
  error?: string | null;
  success?: string | null;
  disabled?: boolean;
  width?: string;
  height?: string;
  padding?: string;
  fontSize?: string;
  color?: string;
  backgroundColor?: string;
  borderColor?: string;
  borderRadius?: string;
}

export interface InputWrapperProps {
  $width: string;
  $height: string;
  $padding: string;
  $fontSize: string;
  $color: string;
  $backgroundColor: string;
  $borderColor: string;
  $borderRadius: string;
  $hasError: boolean;
  $hasSuccess: boolean;
}