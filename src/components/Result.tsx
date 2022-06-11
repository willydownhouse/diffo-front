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
        <span className="fw-bold">{distanceCost} euros</span>
      </p>
      <p>
        Total time costs: <span className="fw-bold">{timeCost} euros</span>
      </p>
      <p>
        Income: <span className="fw-bold">{income} euros</span>
      </p>
      <h4>
        Profit: <span className="fw-bold">{profit} euros</span>
      </h4>
    </div>
  );
}

export default Result;
