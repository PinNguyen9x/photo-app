import React from "react";
import { Spinner } from "reactstrap";

const Loading = () => {
  return (
    <div
      className="loading-container"
      style={{ textAlign: "center", marginTop: "50px" }}
    >
      <Spinner color="primary" />
      <p>Loading...</p>
    </div>
  );
};

export default Loading;
