import * as yup from 'yup';
import { ShippingType } from '__generated__/__types__';
export const shippingValidationSchema = yup.object().shape({
  name: yup.string().required('form:error-name-required'),
  type: yup.string().required('form:error-type-required'),
  amount: yup.mixed().when('type', {
    is: (value: string) => value !== ShippingType.Free,
    then: yup
      .number()
      .typeError('form:error-amount-must-number')
      .positive('form:error-amount-must-positive')
      .required('form:error-amount-required'),
  }),
});
