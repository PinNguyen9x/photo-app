import * as React from "react";
import { useParams } from "react-router-dom";

export interface AddEditPageProps {}

export default function AddEditPage(props: AddEditPageProps) {
  const { photoId } = useParams();
  return <h1>{photoId ? "Edit Page" : "Add Page"}</h1>;
}
