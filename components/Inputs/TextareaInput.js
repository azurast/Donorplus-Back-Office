import React from "react"
import { Formik, Form, useField } from 'formik';

const TextareaInput = ({ label, ... props }) => {
  const [field, meta] = useField(props);
  return(
    <>
      <label
        className="block uppercase text-blueGray-600 text-xs font-bold mb-2 mt-2"
        htmlFor={name}
      >
        {label}
      </label>
      <textarea
        {...field}
        {...props}
        className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
      />
    </>
  );
}

export default TextareaInput;
