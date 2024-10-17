import { ErrorMessage } from "formik";
import React from "react";
import Select from "react-select";
import { FormFeedback, FormGroup, Label } from "reactstrap";

interface SelectFieldProps {
  field: any;
  form: any;
  label?: string;
  placeholder?: string;
  disabled?: boolean;
  options?: any;
}

export const SelectField: React.FC<SelectFieldProps> = ({
  field,
  form,
  options = [],
  label = "",
  placeholder = "",
  disabled = false,
}: SelectFieldProps) => {
  const { name, value } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const selectedOption = options.find((option) => option.value === value);

  const handleSelectedOptionChange = (selectedOption) => {
    const selectedValue = selectedOption
      ? selectedOption.value
      : selectedOption;

    const changeEvent = {
      target: {
        name: name,
        value: selectedValue,
      },
    };
    field.onChange(changeEvent);
  };

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <Select
        id={name}
        {...field}
        value={selectedOption}
        onChange={handleSelectedOptionChange}
        placeholder={placeholder}
        isDisabled={disabled}
        options={options}
        className={showError ? "is-invalid" : ""}
      />

      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
};
