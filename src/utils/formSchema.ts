import * as yup from 'yup';

export const formSchema = yup.object().shape({
  km: yup
    .number()
    .typeError('kilometers must be a number')
    .positive('Only positive numbers please')
    .required('Required'),
  kmPrice: yup
    .number()
    .typeError('kilometer price must be a number')
    .positive('Only positive numbers please')
    .required('Required'),
  hours: yup
    .number()
    .typeError('hours must be a number')
    .positive('Only positive numbers please')
    .required('Required'),
  hourPrice: yup
    .number()
    .typeError('hour price must be a number')
    .positive('Only positive numbers please')
    .required('Required'),
  offer: yup
    .number()
    .typeError('offer must be a number')
    .positive('Only positive numbers please')
    .required('Required'),
});

export const initialValues = {
  km: '',
  kmPrice: '',
  hours: '',
  hourPrice: '',
  offer: '',
};
