import React, { Fragment } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Notfound from "../../components/Notfound";
import MainPage from "./pages/MainPage";
const AddEditPage = React.lazy(() => import("./pages/AddEdit"));

interface PhotoProps {}

const Photo: React.FC<PhotoProps> = ({ ...props }: PhotoProps) => {
  const location = useLocation();

  return (
    <Fragment>
      <p>{location.pathname}</p>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="add" element={<AddEditPage />} />
        <Route path=":photoId" element={<AddEditPage />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </Fragment>
  );
};

export default Photo;
