import React, { FormEvent, useState } from 'react';
import NumberInput from './NumberInput';
import { handleRequest } from '../utils/handleRequest';

type FormProps = {
  setDistanceCost: (val: number) => void;
  setTimeCost: (val: number) => void;
  setIncome: (val: number) => void;
  setProfit: (val: number) => void;
  setNotification: (val: string) => void;
};

function Form({
  setDistanceCost,
  setIncome,
  setProfit,
  setTimeCost,
  setNotification,
}: FormProps) {
  const [kilometres, setKilometres] = useState<number>(0);
  const [hours, setHours] = useState<number>(0);
  const [kmPrice, setKmPrice] = useState<number>(0);
  const [hourPrice, setHourPrice] = useState<number>(0);
  const [myOffer, setMyOffer] = useState<number>(0);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    handleRequest(
      kilometres,
      hours,
      kmPrice,
      hourPrice,
      myOffer,
      setNotification,
      setDistanceCost,
      setTimeCost,
      setIncome,
      setProfit
    );
  };

  const reset = () => {
    setDistanceCost(0);
    setTimeCost(0);
    setIncome(0);
    setProfit(0);
    setKilometres(0);
    setHours(0);
    setKmPrice(0);
    setHourPrice(0);
    setMyOffer(0);
  };

  return (
    <div className="mb-5 w-75">
      <form onSubmit={handleSubmit}>
        <div className="d-flex justify-content-between">
          <NumberInput
            label="Kilometers"
            value={kilometres}
            setValue={setKilometres}
          />
          <NumberInput
            label="Price per kilometer"
            value={kmPrice}
            setValue={setKmPrice}
          />
        </div>

        <div className="d-flex justify-content-between">
          <NumberInput label="Hours" value={hours} setValue={setHours} />
          <NumberInput
            label="Price per hour"
            value={hourPrice}
            setValue={setHourPrice}
          />
        </div>

        <NumberInput label="Offer" value={myOffer} setValue={setMyOffer} />
        <div className="d-flex justify-content-between">
          <button type="submit" className="btn btn-primary">
            Count
          </button>
          <button type="button" className="btn btn-danger" onClick={reset}>
            Reset
          </button>
        </div>
      </form>
    </div>
  );
}

export default Form;
