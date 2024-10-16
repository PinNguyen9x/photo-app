import { ErrorMessage } from "formik";
import PropTypes from "prop-types";
import React from "react";
import { FormFeedback, FormGroup, Label } from "reactstrap";
import RandomPhoto from "../../components/RandomPhoto";

interface RandomPhotoFieldProps {
  field: any;
  form: any;
  label?: string;
}

const RandomPhotoField: React.FC<RandomPhotoFieldProps> = ({
  field,
  form,
  label = "",
}: RandomPhotoFieldProps) => {
  const { name, value, onBlur } = field;
  const { errors, touched } = form;
  const showError = errors[name] && touched[name];

  const handleImageUrlChange = (newImageUrl) => {
    form.setFieldValue(name, newImageUrl);
  };

  return (
    <FormGroup>
      {label && <Label for={name}>{label}</Label>}

      <RandomPhoto
        name={name}
        imageUrl={value}
        onImageUrlChange={handleImageUrlChange}
        onRandomButtonBlur={onBlur}
      />

      <div className={showError ? "is-invalid" : ""}></div>
      <ErrorMessage name={name} component={FormFeedback} />
    </FormGroup>
  );
};

export default RandomPhotoField;
