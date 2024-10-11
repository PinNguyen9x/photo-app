import React from "react";
import "./Header.scss";

interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = ({ ...props }: NotFoundProps) => {
  return <div>Oopss ... Not found</div>;
};

export default NotFound;
