import React, { FC } from 'react';
import { useField, Field, ErrorMessage } from 'formik';
import cl from './Input.module.scss';

interface IInputProps {
  placeholder: string;
  name: string;
  type: string;
  label: string;
}

const Input: FC<IInputProps> = ({ label, ...props }) => {
  const [field] = useField(props);

  return (
    <label className={cl.container} htmlFor={field.name}>
      {label}
      <Field {...field} {...props} className={cl.input} />
      <ErrorMessage name={field.name}>
        {(msg) => <span className={cl.error}>{msg}</span>}
      </ErrorMessage>
    </label>
  );
};

export default Input;
