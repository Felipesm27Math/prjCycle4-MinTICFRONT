import React from 'react';

const Input = ({ label, name, defaultValue, type, required }) => {
  return (
    <label htmlFor={name} className='flex flex-col my-3'>
      <span>{label}</span>
      <input
        required={required}
        type={type}
        name={name}
        className='input border text-center h-10 rounded border-double outline-double border-blue-900'
        defaultValue={defaultValue}
      />
    </label>
  );
};

export default Input;
