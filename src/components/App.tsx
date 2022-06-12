import React from 'react';
import { useState } from 'react';
import FormikForm from './FormikForm';
import Notification from './Notification';
import Result from './Result';

function App() {
  const [notification, setNotification] = useState<string>('');
  const [distanceCost, setDistanceCost] = useState<number>(0);
  const [timeCost, setTimeCost] = useState<number>(0);
  const [income, setIncome] = useState<number>(0);
  const [profit, setProfit] = useState<number>(0);

  return (
    <div className="container">
      <h1 className="mb-4 mt-2">Profit counter</h1>
      <Notification message={notification} />
      <FormikForm
        setDistanceCost={setDistanceCost}
        setTimeCost={setTimeCost}
        setIncome={setIncome}
        setProfit={setProfit}
        setNotification={setNotification}
      />
      <Result
        distanceCost={distanceCost}
        timeCost={timeCost}
        income={income}
        profit={profit}
      />
    </div>
  );
}

export default App;
