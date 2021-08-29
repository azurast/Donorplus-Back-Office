import React from "react"
import { useField, Field } from "formik";

const DropdownInput = ({ label, id, options, ...props }) => {
    const [field, meta] = useField(props);

    return(
        <>
            <label
                className="block uppercase text-blueGray-600 text-xs font-bold mb-2 mt-2"
                htmlFor={name}
            >
                {label}
            </label>
            <Field
                component="select"
                className="text-xs border border-gray-300 rounded text-gray-600 h-8 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none"
                id={id}
                name={field.name}
            >
                {
                    options.map((each) => <option value={each}>{each}</option>)
                }
            </Field>
        </>
    );
}

export default DropdownInput;
