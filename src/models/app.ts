import { FormikHelpers } from 'formik';

export interface IFormValues {
  numList: string;
}

export type TFormikSubmit<T> = (
  values: T,
  { setSubmitting }: FormikHelpers<T>,
) => void;
