import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { Container } from "reactstrap";
import { RootState } from "../../../../app/store";
import Banner from "../../../../components/Banner";
import Images from "../../../../constants/images";
import PhotoList from "../../components/PhotoList";
import { removePhoto } from "../../PhotoSlice";

export interface MainPageProps {}

export default function MainPage(props: MainPageProps) {
  const dispatch = useDispatch();
  const photos = useSelector((state: RootState) => state.photos);
  const navigate = useNavigate();

  const handlePhotoEditClick = (photo) => {
    console.log("Edit: ", photo);
    const editPhotoUrl = `/photos/${photo.id}`;
    navigate(editPhotoUrl);
  };

  const handlePhotoRemoveClick = (photo) => {
    const removePhotoId = photo.id;
    const action = removePhoto(removePhotoId);
    dispatch(action);
  };

  return (
    <div className="photo-main">
      <Banner
        title="🎉 Your awesome photos 🎉"
        backgroundUrl={Images.PINK_BG}
      />

      <Container className="text-center">
        <div className="py-5">
          <Link to="/photos/add">Add new photo</Link>
        </div>

        <PhotoList
          photoList={photos}
          onPhotoEditClick={handlePhotoEditClick}
          onPhotoRemoveClick={handlePhotoRemoveClick}
        />
      </Container>
    </div>
  );
}
