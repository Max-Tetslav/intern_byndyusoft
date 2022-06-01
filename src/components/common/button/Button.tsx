import React, { FC, ReactNode } from 'react';
import cl from './Button.module.scss';

interface IButtonProps {
  children: ReactNode;
}

const Button: FC<IButtonProps> = ({ children }) => {
  return (
    <button className={cl.button} type="submit">
      {children}
    </button>
  );
};

export default Button;
