// components/Input.tsx
import React from "react";
import { useController, Control } from "react-hook-form";

interface InputCheckboxProps {
  name: string;
  control: Control<any>;
  label: string;
}

const Checkbox: React.FC<InputCheckboxProps> = ({ name, control, label }) => {
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
      <div className="flex flex-row-reverse justify-end items-center gap-1">
        <label
          htmlFor={name}
          className="block text-sm text-jet-black-300 font-medium "
        >
          {label}
        </label>
        <input
          id={name}
          {...field}
          type={"checkbox"}
          className={`block w-fit border p-1 border-jet-black-100 rounded-md  shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm ${
            error ? "border-red-500" : ""
          }`}
        />
      </div>

      {error && <span className="text-red-500 text-sm">{error.message}</span>}
    </div>
  );
};

export default Checkbox;
