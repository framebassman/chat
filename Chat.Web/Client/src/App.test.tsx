import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

window.prompt = jest.fn();

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByPlaceholderText(/Напишите сообщение.../i);
  expect(linkElement).toBeInTheDocument();
});
