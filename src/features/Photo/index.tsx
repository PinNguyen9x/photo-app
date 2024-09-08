import React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
// import AddEditPage from "./pages/AddEdit";
// import MainPage from "./pages/Main";
import Notfound from "../../components/Notfound";
import MainPage from "./pages/MainPage";

interface PhotoProps {}

const Photo: React.FC<PhotoProps> = ({ ...props }: PhotoProps) => {
  const location = useLocation();

  return (
    <Routes>
      <Route path={location.pathname} element={<MainPage />} />
      {/* <Route path={`${match.url}/add`} element={<AddEditPage />} />
      <Route path={`${match.url}/:photoId`} element={<AddEditPage />} /> */}
      <Route path="*" element={<Notfound />} />
    </Routes>
  );
};

export default Photo;
