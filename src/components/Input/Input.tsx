import React from "react";
import { InputWrapper } from "./Input.styles";
import { InputProps } from "./Input.types"

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  type = "text",
  icon,
  error,
  success,
  disabled = false,
  width = "100%",
  height = "40px",
  padding = "8px 12px",
  fontSize = "16px",
  color = "#333",
  backgroundColor = "#fff",
  borderColor = "#ccc",
  borderRadius = "8px",
}) => {
  const hasError = !!error;
  const hasSuccess = !!success;

  return (
    <InputWrapper
      $width={width}
      $height={height}
      $padding={padding}
      $fontSize={fontSize}
      $color={color}
      $backgroundColor={backgroundColor}
      $borderColor={borderColor}
      $borderRadius={borderRadius}
      $hasError={hasError}
      $hasSuccess={hasSuccess}
    >
      <div className="input-container">
        <label className="input-label">
          {label}
        </label>
        <div className="input-wrapper">
          {icon && <span className="input-icon">{icon}</span>}
          <input
            type={type}
            className="input-element"
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            disabled={disabled}
          />
        </div>
        {error && <span className="input-error">{error}</span>}
        {success && !error && <span className="input-success">{success}</span>}
      </div>
    </InputWrapper>
  );
};

export default Input;
