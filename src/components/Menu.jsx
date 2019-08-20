import React, { Component } from "react";
import ROUTES from "./../constants/routes";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";

class Menu extends Component {
  displayLinks = () => {
    return ROUTES.map(route => {
      return (
        <Col xs={6} md={3}  key={route.id}>
          <Link className="menu-link" to={route.path}>
            {route.linkTitle}
          </Link>
        </Col>
      );
    });
  };
  render = () => {
    return <Row>{this.displayLinks()}</Row>;
  };
}

export default Menu;
