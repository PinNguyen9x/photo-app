import { PHOTO_CATEGORY_OPTIONS } from "@constants/global";
import { InputField, RandomPhotoField, SelectField } from "@custom-fields";
import { FastField, Form, Formik } from "formik";
import React from "react";
import { Button, FormGroup, Spinner } from "reactstrap";
import * as Yup from "yup";

interface AddEditPageProps {
  initialValues: any;
  isAddMode: boolean;
  onSubmit: (values: any) => void;
}

const PhotoForm: React.FC<AddEditPageProps> = ({
  initialValues,
  isAddMode,
  onSubmit,
}: AddEditPageProps) => {
  const validationSchema = Yup.object().shape({
    title: Yup.string().required("This field is required."),
    categoryId: Yup.number().required("This field is required.").nullable(),
    photo: Yup.lazy((value, context) => {
      if (context.parent.categoryId === 1) {
        return Yup.string().required("Photo is required when categoryId is 1.");
      }
      return Yup.string().notRequired();
    }),
  });
  // npm i --save react-select
  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {(formikProps) => {
        // do something here ...
        const { values, errors, touched, isSubmitting } = formikProps;
        console.log({ values, errors, touched });
        return (
          <Form>
            <FastField
              name="title"
              component={InputField}
              label="Title"
              placeholder="Eg: Wow nature ..."
            />
            <FastField
              name="categoryId"
              component={SelectField}
              label="Category"
              placeholder="What's your photo category?"
              options={PHOTO_CATEGORY_OPTIONS}
            />
            <FastField
              name="photo"
              component={RandomPhotoField}
              label="Photo"
            />
            <FormGroup>
              <Button type="submit" color={isAddMode ? "primary" : "success"}>
                {isSubmitting && <Spinner size="sm" />}
                {isAddMode ? "Add to album" : "Update your photo"}
              </Button>
            </FormGroup>
          </Form>
        );
      }}
    </Formik>
  );
};
export default PhotoForm;
