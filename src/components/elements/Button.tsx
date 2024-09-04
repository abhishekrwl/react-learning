import React, { ReactNode } from 'react';

type ButtonProps = {
  children: ReactNode;
  onClick: () => void;
  className: string;
};

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <div>
      <button className={`p-2 rounded ${className}`} onClick={onClick}>
        {children}
      </button>
    </div>
  );
};

export default Button;
