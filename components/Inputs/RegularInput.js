import React from "react"

const RegularInput = ({ label, placeholder, size, value }) => {
  return(
    <>
      <label
        className="block uppercase text-blueGray-600 text-xs font-bold mb-2 mt-2"
        htmlFor="grid-password"
      >
        {label}
      </label>
      <input
        type="text"
        placeholder={placeholder}
        defaultValue={value}
        className={ (size === "small" ? "px-2 py-1" : "px-3 py-3") + "placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"}
      />
    </>
  );
}

export default RegularInput;