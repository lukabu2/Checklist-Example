import { DropdownButton, Dropdown } from "react-bootstrap";
import "../App";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function DropdownButtonLocation() {
  return (
    <div className="d-flex justify-content-center mt-1">
      <DropdownButton title="Lokacija " size="sm" variant="outline-secondary" >
        <Dropdown.Item as="button">Ulica</Dropdown.Item>
        <Dropdown.Item as="button">Another action</Dropdown.Item>
        <Dropdown.Item as="button">Something else</Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default DropdownButtonLocation;
