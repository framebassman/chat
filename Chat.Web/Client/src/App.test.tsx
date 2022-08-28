import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  const jsdomPrompt = window.prompt;  // remember the jsdom alert
  window.prompt = () => {};  // provide an empty implementation for window.alert
  render(<App />);
  const linkElement = screen.getByPlaceholderText(/Напишите сообщение.../i);
  expect(linkElement).toBeInTheDocument();
  window.prompt = jsdomPrompt;
});
