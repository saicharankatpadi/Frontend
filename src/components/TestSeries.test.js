// src/components/TestSeries.test.js
import React from 'react';
import { render, screen } from '@testing-library/react';
import TestSeries from './TestSeries';
import testSeriesData from '../data/testSeriesData';

test('renders Test Series component with correct data', () => {
  render(<TestSeries />);
  const headingElement = screen.getByText(/Test Series/i);
  expect(headingElement).toBeInTheDocument();

  testSeriesData.forEach((test) => {
    const titleElement = screen.getByText(test.title);
    expect(titleElement).toBeInTheDocument();

    const statusElement = screen.getByText(`Status: ${test.status}`);
    expect(statusElement).toBeInTheDocument();

    if (test.status === 'Attempted') {
      const marksElement = screen.getByText(`Marks Obtained: ${test.marks}`);
      expect(marksElement).toBeInTheDocument();
    }
  });
});
