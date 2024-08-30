import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Input from '../Input';

describe('Input Component', () => {
  it('renders the input with a label', () => {
    render(<Input label="Test Label" value="" onChange={() => {}} />);
    expect(screen.getByLabelText('Test Label')).toBeInTheDocument();
  });

  it('displays an error message when error is present', () => {
    render(<Input label="Test Label" value="" onChange={() => {}} error="Error message" />);
    expect(screen.getByText('Error message')).toBeInTheDocument();
  });

  it('calls onChange when input value changes', () => {
    const handleChange = jest.fn();
    render(<Input value="" onChange={handleChange} />);
    const input = screen.getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test' } });
    expect(handleChange).toHaveBeenCalled();
  });
});
