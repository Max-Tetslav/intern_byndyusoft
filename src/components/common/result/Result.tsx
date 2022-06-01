import React, { FC } from 'react';
import cl from './Result.module.scss';

interface IResultProps {
  content: string;
}

const Result: FC<IResultProps> = ({ content }) => {
  return (
    <div className={cl.container}>
      <p className={cl.label}>Результат:</p>
      <p className={cl.text}>{content || 'Ждем...'}</p>
    </div>
  );
};

export default Result;
