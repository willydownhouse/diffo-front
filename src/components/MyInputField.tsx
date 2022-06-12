import { Field } from 'formik';
import React from 'react';

type MyInputFieldProps = {
  value: string;
  error: string | undefined;
  placeholder: string;
  name: string;
  touched: boolean | undefined;
};

function MyInputField({
  error,
  value,
  placeholder,
  name,
  touched,
}: MyInputFieldProps) {
  return (
    <div className="mb-3">
      <Field
        id={name}
        placeholder={placeholder}
        name={name}
        value={value}
        className={`form-control ${error && touched ? 'is-invalid' : ''}`}
      />
      {error && touched ? (
        <p id={`${name}-error`} className="text-danger">
          {error}
        </p>
      ) : null}
    </div>
  );
}

export default MyInputField;
