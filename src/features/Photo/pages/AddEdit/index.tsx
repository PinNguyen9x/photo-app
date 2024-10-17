import { RootState } from "@app/store";
import Banner from "@components/Banner";
import PhotoForm from "@features/Photo/components/PhotoForm";
import { addPhoto, updatePhoto } from "@features/Photo/photoSlice";
import { randomNumber } from "@utils/common";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./styles.scss";

interface AddEditPageProps {}

const AddEditPage: React.FC<AddEditPageProps> = (props: AddEditPageProps) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { photoId } = useParams();
  const isAddMode = !photoId;

  const editedPhoto = useSelector((state: RootState) => {
    const foundPhoto = state.photos.find((x) => x.id === +(photoId || 0));
    return foundPhoto;
  });

  const initialValues = isAddMode
    ? {
        title: "",
        categoryId: null,
        photo: "",
      }
    : editedPhoto;

  const handleSubmit = (values) => {
    return new Promise((resolve) => {
      console.log("Form submit: ", values);
      setTimeout(() => {
        if (isAddMode) {
          const newPhoto = {
            ...values,
            id: randomNumber(10000, 99999),
          };
          const action = addPhoto(newPhoto);
          console.log({ action });
          dispatch(action);
        } else {
          // Do something here
          const action = updatePhoto(values);
          dispatch(action);
        }
        navigate("/photos");
        resolve(true);
      }, 2000);
    });
  };

  return (
    <div className="photo-edit">
      <Banner title="Pick your amazing photo 😎" />

      <div className="photo-edit__form">
        <PhotoForm
          isAddMode={isAddMode}
          initialValues={initialValues}
          onSubmit={handleSubmit}
        />
      </div>
    </div>
  );
};

export default AddEditPage;
