import React from 'react';

type InputProps = {
  value: string | number;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  name: string;
  placeHolder: string;
};

const Input: React.FC<InputProps> = ({
  value,
  onChange,
  name,
  placeHolder,
}) => {
  return (
    <div>
      <input
        className='p-2 border rounded focus:outline-none'
        value={value}
        name={name}
        placeholder={placeHolder}
        onChange={(e) => onChange(e)}
      />
    </div>
  );
};

export default Input;
