import React, { ChangeEvent } from 'react';

type NumberInputProps = {
  label: string;
  value: number;
  setValue: (val: number) => void;
};

function NumberInput({ label, value, setValue }: NumberInputProps) {
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    //const valAsString = e.target.value;

    // console.log(valAsString);
    // if (valAsString.length === 2 && valAsString.startsWith('0')) {
    //   return setValue(Number(valAsString.substring(1)));
    // }
    setValue(Number(e.target.value));
  };

  return (
    <div className="mb-3">
      <label>{label}</label>
      <input
        className={`form-control`}
        type={'number'}
        value={value}
        onChange={handleChange}
      />
    </div>
  );
}

export default NumberInput;
