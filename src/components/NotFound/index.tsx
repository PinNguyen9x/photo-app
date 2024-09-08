import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./Header.scss";

interface NotFoundProps {}

const NotFound: React.FC<NotFoundProps> = ({ ...props }: NotFoundProps) => {
  return <div>Oopss ... Not found</div>;
};

export default NotFound;
