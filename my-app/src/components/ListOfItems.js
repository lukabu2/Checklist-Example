import { ListGroup } from "react-bootstrap";
import React from "react";
import CircularProgressbar from "./CircularProgressbar";

function ListOfItems() {
  return (
    <ListGroup className="mt-4 ">
      <ListGroup.Item>
        <CircularProgressbar />
        Example
      </ListGroup.Item>
    </ListGroup>
  );
}

export default ListOfItems;
