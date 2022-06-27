import { ListGroup } from "react-bootstrap";
import React, { useEffect, useState } from "react";
import axios from "axios";
import CircularProgressbar from "./CircularProgressbar";

function ListOfItems() {
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
        .then((response) => setOutlet(response.data))
        .catch((error) => console.log(error));
    } catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    getAll();
  }, []);

  let allOutlets = outlet.map((el,i) => (
    <ListGroup.Item key={i}>
      <CircularProgressbar />
        <p>{el.name}</p>
        <p>{el.id}</p>
    </ListGroup.Item>
  ));
  return (
    <ListGroup className="mt-4 ">
      {allOutlets}
    </ListGroup>
  );
}

export default ListOfItems;
