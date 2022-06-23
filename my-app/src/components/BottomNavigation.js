import "../App.css";
import React from "react";
import { HouseFill } from "react-bootstrap-icons";
import { Col, Navbar } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function BottomNavigation() {
  return (
    <Navbar fixed="bottom" className="flex-column">
      <Col lg="12"></Col>
      <Col lg="12" className="text-center">
        <HouseFill color="#ff4d02" size={35} lg="4" />
      </Col>
    </Navbar>
  );
}

export default BottomNavigation;
