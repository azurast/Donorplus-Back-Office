import React from "react"
import { useField } from "formik";

const RegularInput = ({ label, showLabel, ...props }) => {
  const [field, meta] = useField(props);
  return(
    <>
      { showLabel
          ?
            <label
              className="block uppercase text-blueGray-600 text-xs font-bold mb-2 mt-2"
              htmlFor={props.name}
            >
              {label}
            </label>
          : <></>
      }
      <input
        {...field}
        {...props}
        className={ (props.disabled === true ? "bg-blueGray-100 " : "bg-white ") + (props.size === "small" ? "px-2 py-1 w-1/2" : "px-3 py-3 w-full") + " placeholder-blueGray-300 text-blueGray-600 relative rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline"}
      />
    </>
  );
}

export default RegularInput;
