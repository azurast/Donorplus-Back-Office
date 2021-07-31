import React from "react"

const TextareaInput = ({ label, placeholder }) => {
  return(
    <>
      <label
        className="block uppercase text-blueGray-600 text-xs font-bold mb-2 mt-2"
        htmlFor="grid-password"
      >
        {label}
      </label>
      <textarea
        type="text"
        placeholder={placeholder}
        className="px-3 py-3 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:shadow-outline w-full"
      />
    </>
  );
}

export default TextareaInput;