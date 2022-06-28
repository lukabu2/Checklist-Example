import { DropdownButton, Dropdown } from "react-bootstrap";
import { MdLocationOn } from "react-icons/md";
import "../App";
import "../App.css";
import React, { useEffect, useState, Col, Row } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";

function DropdownButtonLocation() {
  let [outlet, setOutlet] = useState([{}]);
  function getAll() {
    try {
      axios
        .get(
          "http://api-development.synergysuite.net/rest/permission/allowedCompanies?userId=1490106392118050028&corporateId=500000000",
          {
            headers: {
              "synergy-login-token": "bae0c3f2-20a2-4015-b51c-cbc939f4f808",
            },
          }
        )
        .then((response) => {
          setOutlet(response.data);
          console.log(response.data);
        })
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getAll();
  }, []);

  let allOutlets = outlet.map((el, i) => (
    <Dropdown.Item
      className="d-flex justify-content-center mt-1"
      as="button"
      key={i}
    >
      <b>{el.name}</b>
    </Dropdown.Item>
  ));

  return (
    <div className="d-flex justify-content-center mt-3">
      <DropdownButton
        title={
          <>
            <MdLocationOn className="mb-1" />
            <b>Lokacija</b>
          </>
        }
        className="CenterDropdownList"
        // align="end"
        size="sm"
        variant="outline-secondary"
      >
        {allOutlets}
        {/* <Dropdown.Item as="button">
          <b>Ulica</b>
        </Dropdown.Item>
        <Dropdown.Item as="button">
          <b>Another action</b>
        </Dropdown.Item>
        <Dropdown.Item as="button">
          <b>Something else</b>
        </Dropdown.Item> */}
      </DropdownButton>
    </div>
  );
}

export default DropdownButtonLocation;
