import React from "react"
import { useField } from "formik";

const RegularInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  return(
    <>
      <label
        className="block uppercase text-blueGray-600 text-xs font-bold mb-2 mt-2"
        htmlFor={name}
      >
        {label}
      </label>
      <input
        {...field}
        {...props}
        className={ (props.disabled === true ? "bg-blueGray-100 " : "bg-white ") + (props.size === "small" ? "px-2 py-1" : "px-3 py-3") + " placeholder-blueGray-300 text-blueGray-600 relative rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"}
      />
    </>
  );
}

export default RegularInput;
