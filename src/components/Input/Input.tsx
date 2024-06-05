// components/Input.tsx
import React from 'react';
import { useController, Control } from 'react-hook-form';

interface InputProps {
  name: string;
  control: Control<any>;
  label: string;
  type?: string;
}

const Input: React.FC<InputProps> = ({ name, control, label, type = 'text' }) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
    rules: { required: `${label} is required` },
  });

  return (
    <div className="mb-4">
      <label htmlFor={name} className="block text-sm text-jet-black-300 font-medium ">
        {label}
      </label>
      <input
        id={name}
        {...field}
        type={type}
        className={`mt-1 block w-full border p-1 border-jet-black-100 rounded-md h-9 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
          error ? 'border-red-500' : ''
        }`}
      />
      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div>
  );
};

export default Input;
