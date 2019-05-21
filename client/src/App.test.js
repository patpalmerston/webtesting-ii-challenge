import React from 'react';

import { render, cleanup, fireEvent } from 'react-testing-library'

import 'jest-dom/extend-expect';

import App from './App';

describe('<App />', () => {
  it('renders without crashing', () => {
    render(<App />);
    cleanup();
  })

  it('renders "Game Time"', () => {
    const { getByText } = render(<App />);
    const text = getByText('Game Time!');

    expect(text).toBeInTheDocument();
    cleanup();
  })

  it('should increase ballse when button clicked and reset after third ball')
  const { getByText, getByTestId } = render(<App />)
  const button = getByTestId('ballsButton');
  fireEvent.click(button);
  const buttonResult = getByText
}) 

