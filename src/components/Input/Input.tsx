import React from 'react';
import styled from 'styled-components';
import { InputProps } from './Input.types.ts';
import './Input.styles.ts';

const Input: React.FC<InputProps> = ({
  label,
  placeholder,
  value,
  onChange,
  disabled,
  error,
  success,
  icon,
  ...props
}) => {
  return (
    <div className="input-container">
      {label && <label className="input-label">{label}</label>}
      <div className={`input-wrapper ${error ? 'error' : ''} ${success ? 'success' : ''}`}>
        {icon && <span className="input-icon">{icon}</span>}
        <input
          className="input-element"
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          disabled={disabled}
          {...props}
        />
      </div>
      {error && <span className="input-error">{error}</span>}
      {success && <span className="input-success">{success}</span>}
    </div>
  );
};

export default Input;
