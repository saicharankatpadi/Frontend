// src/components/TestSeries.js
import React from 'react';
import testSeriesData from '../data/testSeriesData';
import './TestSeries.css';

const TestSeries = () => {
  return (
    <div className="test-series">
      <h1>Test Series</h1>
      <p>Welcome to the Test Series page. Here you can find various tests to assess your knowledge.</p>
      <ul>
        {testSeriesData.map((test) => (
          <li key={test.id}>
            <h2>{test.title}</h2>
            <p>Status: {test.status}</p>
            {test.status === 'Attempted' && (
              <p>Marks Obtained: {test.marks}</p>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TestSeries;
