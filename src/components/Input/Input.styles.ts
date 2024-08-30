import styled from "styled-components";
import { InputWrapperProps } from "./Input.types"

export const InputWrapper = styled.div<InputWrapperProps>`
  .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
  }

  .input-label {
    margin-bottom: 8px;
    font-size: 14px;
    color: #333;
    font-weight: bold;
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    border: 1px solid ${(props) => props.$borderColor};
    border-radius: ${(props) => props.$borderRadius};
    padding: 0;
    background-color: ${(props) => props.$backgroundColor};
    transition: border-color 0.3s ease, background-color 0.3s ease;
    width: ${(props) => props.$width};
    height: ${(props) => props.$height};

    &:focus-within {
      border-color: #007bff;
      background-color: white;
    }

    ${(props) =>
      props.$hasError &&
      `
      border-color: #dc3545;
    `}

    ${(props) =>
      props.$hasSuccess &&
      `
      border-color: #28a745;
    `}
  }

  .input-element {
    flex: 1;
    border: none;
    outline: none;
    font-size: ${(props) => props.$fontSize};
    color: ${(props) => props.$color};
    background-color: transparent;
    padding: ${(props) => props.$padding};
    height: 100%;

    &:disabled {
      background-color: #f8f9fa;
      cursor: not-allowed;
      border-radius: ${(props) => props.$borderRadius};
    }
  }

  .input-icon {
    display: flex;
    align-items: center;
    justify-content: center;
    padding-left: 8px;
    padding-right: 8px;
    color: ${(props) => props.$color};
  }

  .input-error,
  .input-success {
    margin-top: 4px;
    font-size: 12px;
  }

  .input-error {
    color: #dc3545;
  }

  .input-success {
    color: #28a745;
  }
`;
