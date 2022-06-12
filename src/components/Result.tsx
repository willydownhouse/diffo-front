import React from 'react';

type ResultProps = {
  distanceCost: number;
  timeCost: number;
  income: number;
  profit: number;
};

function Result({ distanceCost, timeCost, income, profit }: ResultProps) {
  return (
    <div>
      <p>
        Total distance costs:{' '}
        <span id="distance-cost-result" className="fw-bold">
          {distanceCost.toFixed(2)} euros
        </span>
      </p>
      <p>
        Total time costs:{' '}
        <span id="time-cost-result" className="fw-bold">
          {timeCost.toFixed(2)} euros
        </span>
      </p>
      <p>
        Income:{' '}
        <span id="income-result" className="fw-bold">
          {income.toFixed(2)} euros
        </span>
      </p>
      <h4>
        Profit:{' '}
        <span id="profit-result" className="fw-bold">
          {profit.toFixed(2)} euros
        </span>
      </h4>
    </div>
  );
}

export default Result;
