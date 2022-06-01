import React, { useState, useCallback, FC } from 'react';
import { Formik } from 'formik';
import { IFormValues, TFormikSubmit } from './models/app';
import getSum from './utils/helpers/getSum';
import { FORM_INITIAL_VALUES, FORM_VALIDATION } from './utils/constants/form';
import AppForm from './components/containers/appForm/AppForm';

const App: FC = () => {
  const [result, setResult] = useState('');

  const sumbitHandler = useCallback<TFormikSubmit<IFormValues>>((values) => {
    const resultString = getSum(values.numList);

    setResult(resultString);
  }, []);

  return (
    <Formik
      initialValues={FORM_INITIAL_VALUES}
      validationSchema={FORM_VALIDATION}
      validateOnChange={false}
      validateOnBlur={false}
      onSubmit={sumbitHandler}
    >
      <AppForm result={result} setResult={setResult} />
    </Formik>
  );
};

export default App;
