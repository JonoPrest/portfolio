import React, { FC } from "react";

type inputProps = {
  id?: string;
  name?: string;
  type?: string;
  [key: string]: any;
};

interface IFormInputProps {
  label?: string;
  inputProps?: inputProps;
  textArea?: boolean;
}

const FormInput: FC<IFormInputProps> = ({ label, inputProps, textArea }) => {
  const id = inputProps?.id;

  return (
    <>
      {label && (
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor={id}
        >
          {label}
        </label>
      )}
      {textArea ? (
        <textarea
          className="h-64 resize-none shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...inputProps}
        />
      ) : (
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          {...inputProps}
        />
      )}
    </>
  );
};

export default FormInput;
