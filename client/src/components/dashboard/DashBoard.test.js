import React from 'react';
import { render, cleanup } from 'react-testing-library';
import 'jest-dom/extend-expect';

import Dashboard from './Dashboard';

describe('The Dashboard Component', () => {
  it('should render without crasher', () => {
    render(<Dashboard />);
    cleanup();
  })

})