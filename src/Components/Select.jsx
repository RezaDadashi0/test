import React from "react";
import { ErrorMessage, Field } from "formik";

const Select = ({ label, name, options, ...rest }) => {
  return (
    <div>
      <label htmlFor={label}>{label}</label>
      <Field
        as="select"
        id={label}
        name={name}
        {...rest}
        className="form-control"
      >
        {options.map((option, i) => (
          <option key={i} value={option.value}>
            {option.key}
          </option>
        ))}
      </Field>
      <ErrorMessage component="div" className="error" name={name} />
    </div>
  );
};

export default Select;
