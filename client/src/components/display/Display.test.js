import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Display from './Display'

describe('The Display Component', () => {
  it('should render without crashing', () => {
    render(<Display />);
    cleanup();
  })

  it('should display balls', () =>{
    const { getByTestId } = render(<Display />);
    const text = getByTestId('balls-count');
    expect(text).toBeInTheDocument();
  })

});