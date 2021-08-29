import React, { useState } from "react"
import { Formik, Form, useField, Field } from 'formik';

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
        <Field
            type="checkbox"
            name={field.name}
        />
    </>
  );
}

export default CheckboxInput;
