import "../App.css";
import React from 'react'
import { List, Filter } from "react-bootstrap-icons";
import { Navbar,Col } from "react-bootstrap";

import "bootstrap/dist/css/bootstrap.min.css";

function TopNavigation(){
    return (
        <Navbar className="justify-content-between" bg="NavbarColor">
        <Col lg = '4'>
          <List color="white" size={35}></List>
          <b className="mx-2 my-2 text-white">Checklists</b>
        </Col>
        <Col className="mx-2 text-end" lg = '4'>
          <Filter color="white" size={35} />
        </Col>
    </Navbar>
    )
}
export default TopNavigation;