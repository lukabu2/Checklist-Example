import { DropdownButton, Dropdown } from "react-bootstrap";
import { MdLocationOn } from "react-icons/md";
import "../App";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function DropdownButtonLocation() {
  return (
    <div className="d-flex justify-content-center mt-3">
      <DropdownButton
        title={
          <>
            <MdLocationOn className="mb-1"/>
            <b>Lokacija</b>
          </>
        }
        size="sm"
        variant="outline-secondary"
      >
        <Dropdown.Item as="button"><b>Ulica</b></Dropdown.Item>
        <Dropdown.Item as="button"><b>Another action</b></Dropdown.Item>
        <Dropdown.Item as="button"><b>Something else</b></Dropdown.Item>
      </DropdownButton>
    </div>
  );
}

export default DropdownButtonLocation;
