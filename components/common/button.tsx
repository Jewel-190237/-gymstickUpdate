import React, { FC } from 'react';

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
}

const Button: FC<ButtonProps> = ({
  children,
  onClick,
  className = '',
  type = 'button',
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`border-2 border-primary lg:px-8 lg:py-4 md:px-5 py-2 px-3 whitespace-pre rounded hover:bg-primary  transition-colors duration-300 ease-in-out hover:text-white sm:text-base text-sm${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
