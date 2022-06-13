import React from 'react';
import { Formik, Form } from 'formik';
import MyInputField from './MyInputField';
import { formSchema, initialValues } from '../utils/formSchema';
import { handleCountCostsAndProfitRequest } from '../utils/handleRequest';
import FormButtons from './FormButtons';

type FormProps = {
  setDistanceCost: (val: number) => void;
  setTimeCost: (val: number) => void;
  setIncome: (val: number) => void;
  setProfit: (val: number) => void;
  setNotification: (val: string) => void;
};

function FormikForm({
  setDistanceCost,
  setIncome,
  setProfit,
  setTimeCost,
  setNotification,
}: FormProps) {
  const reset = () => {
    setDistanceCost(0);
    setTimeCost(0);
    setIncome(0);
    setProfit(0);
  };
  return (
    <Formik
      onSubmit={values => {
        const { km, kmPrice, hours, hourPrice, offer } = values;
        handleCountCostsAndProfitRequest(
          +km,
          +hours,
          +kmPrice,
          +hourPrice,
          +offer,
          setNotification,
          setDistanceCost,
          setTimeCost,
          setIncome,
          setProfit
        );
      }}
      initialValues={initialValues}
      validationSchema={formSchema}
    >
      {({ values, errors, touched, resetForm }) => (
        <Form className="mb-5 w-75">
          <div className="d-flex justify-content-between">
            <MyInputField
              name="km"
              placeholder="kilometres"
              value={values.km}
              error={errors.km}
              touched={touched.km}
            />
            <MyInputField
              name="kmPrice"
              placeholder="price per kilometer"
              value={values.kmPrice}
              error={errors.kmPrice}
              touched={touched.kmPrice}
            />
          </div>
          <div className="d-flex justify-content-between">
            <MyInputField
              name="hours"
              placeholder="hours"
              value={values.hours}
              error={errors.hours}
              touched={touched.hours}
            />
            <MyInputField
              name="hourPrice"
              placeholder="price per hour"
              value={values.hourPrice}
              error={errors.hourPrice}
              touched={touched.hourPrice}
            />
          </div>

          <MyInputField
            name="offer"
            placeholder="offer"
            value={values.offer}
            error={errors.offer}
            touched={touched.offer}
          />

          <FormButtons errors={errors} reset={reset} resetForm={resetForm} />
        </Form>
      )}
    </Formik>
  );
}

export default FormikForm;
