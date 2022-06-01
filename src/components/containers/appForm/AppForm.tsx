import React, { FC, useEffect } from 'react';
import { Form, useFormikContext } from 'formik';
import { IFormValues } from 'src/models/app';
import Button from '../../common/button/Button';
import Input from '../../common/input/Input';
import Result from '../../common/result/Result';
import cl from './AppForm.module.scss';

interface IAppFormProps {
  result: string;
  setResult: React.Dispatch<React.SetStateAction<string>>;
}

const AppForm: FC<IAppFormProps> = ({ result, setResult }) => {
  const { values, submitForm } = useFormikContext<IFormValues>();

  useEffect(() => {
    document.body.addEventListener('keypress', (e) => {
      if (e.key === 'Enter') {
        submitForm();
      }
    });
  }, []);

  useEffect(() => {
    if (!values.numList) {
      setResult('');
    }
  }, [values.numList]);

  return (
    <Form className={cl.form}>
      <h1 className={cl.title}>Сумма двух наименьших чисел</h1>
      <Input
        label="Список чисел:"
        placeholder="Введите числа через запятую"
        type="text"
        name="numList"
      />
      <Result content={result} />
      <Button>Получить результат</Button>
    </Form>
  );
};

export default AppForm;
