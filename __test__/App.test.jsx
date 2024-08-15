import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../src/App';
import '@testing-library/jest-dom';

describe('App Component', () => {
  test('renders without crashing', () => {
    render(<App />);
  });

  test('renders the correct content', () => {
    render(<App />);
    const learnReact = screen.getByText(/learn react/i);
    expect(learnReact).toBeInTheDocument();
  });

  test('has a main section', () => {
    render(<App />);
    const mainElement = screen.getByRole('main');
    expect(mainElement).toBeInTheDocument();
  });
});
