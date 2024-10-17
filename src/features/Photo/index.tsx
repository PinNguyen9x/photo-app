import React from "react";
import { Route, Routes } from "react-router-dom";
import NotFound from "@components/NotFound";
import MainPage from "./pages/MainPage";
const AddEditPage = React.lazy(() => import("./pages/AddEdit"));

interface PhotoProps {}

const Photo: React.FC<PhotoProps> = ({ ...props }: PhotoProps) => {
  return (
    <Routes>
      <Route path="/" element={<MainPage />} />
      <Route path="add" element={<AddEditPage />} />
      <Route path=":photoId" element={<AddEditPage />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default Photo;
