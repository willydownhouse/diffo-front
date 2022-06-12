import { FormikErrors } from 'formik';
import React from 'react';

type FormButtonsProps = {
  errors: FormikErrors<{
    km: string;
    kmPrice: string;
    hours: string;
    hourPrice: string;
    offer: string;
  }>;
  reset: () => void;
  resetForm: () => void;
};

function FormButtons({ errors, reset, resetForm }: FormButtonsProps) {
  return (
    <div className="d-flex justify-content-between">
      <button
        id="btn-count"
        disabled={
          !!errors.km ||
          !!errors.kmPrice ||
          !!errors.hours ||
          !!errors.hourPrice ||
          !!errors.offer
        }
        type="submit"
        className="btn btn-primary"
      >
        Count
      </button>
      <button
        type="button"
        className="btn btn-danger"
        onClick={() => {
          reset();
          resetForm();
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default FormButtons;
