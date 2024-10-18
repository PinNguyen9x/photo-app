import React from "react";
import { NavLink } from "react-router-dom";
import { Col, Container, Row } from "reactstrap";
import "./Header.scss";

interface HeaderProps {}

const Header: React.FC<HeaderProps> = ({ ...props }: HeaderProps) => {
  return (
    <header className="header">
      <Container>
        <Row className="justify-content-between">
          <Col xs="auto" />
          <Col xs="auto">
            <NavLink
              className={({ isActive }) =>
                isActive ? "header__link header__link--active" : "header__link"
              }
              to="/sign-in"
            >
              Sign In
            </NavLink>
          </Col>
        </Row>
      </Container>
    </header>
  );
};

export default Header;
