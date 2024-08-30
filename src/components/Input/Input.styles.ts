import styled from 'styled-components';

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;

  .input-container {
    display: flex;
    flex-direction: column;
    margin-bottom: 16px;
  }

  .input-label {
    margin-bottom: 8px;
    font-size: 14px;
    color: #333;
  }

  .input-wrapper {
    display: flex;
    align-items: center;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 8px;
    transition: border-color 0.3s ease;

    &.error {
      border-color: red;
    }

    &.success {
      border-color: green;
    }
  }

  .input-element {
    flex: 1;
    border: none;
    outline: none;
    font-size: 16px;
    padding: 8px;

    &:disabled {
      background-color: #f0f0f0;
    }
  }

  .input-icon {
    margin-right: 8px;
  }

  .input-error {
    margin-top: 4px;
    color: red;
    font-size: 12px;
  }

  .input-success {
    margin-top: 4px;
    color: green;
    font-size: 12px;
  }
`;
