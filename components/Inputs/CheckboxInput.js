import React from "react"
import { Formik, Form, useField } from 'formik';

const CheckboxInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <>
      <label
        className="block uppercase text-blueGray-600 text-xs font-bold mb-2 mt-2"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        type="checkbox"
        {...field}
        {...props}
      />
    </>
  );
}

export default CheckboxInput;
