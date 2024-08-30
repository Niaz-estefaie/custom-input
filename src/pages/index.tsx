import React from 'react';
import Input from '../components/Input';
import { useInput } from '../hooks';
import '../styles/globals.css';

const HomePage: React.FC = () => {
  const nameInput = useInput('', { required: true, minLength: 3 });

  return (
    <div style={{ padding: '20px' }}>
      <h1>Welcome to My App</h1>
      <form>
        <Input
          label="Name"
          placeholder="Enter your name"
          value={nameInput.value}
          onChange={nameInput.handleChange}
          error={nameInput.error}
          success={nameInput.success}
        />
        <button type="submit" disabled={!!nameInput.error}>
          Submit
        </button>
      </form>
    </div>
  );
};

export default HomePage;
