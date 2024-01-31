import React from "react";
import { ListGroup } from "reactstrap";
import { Link } from "react-router-dom";

const Menus = () => {
    return (
        <ListGroup>
            <Link className="list-group-item list-group-item-action" tag="a" action to="/">
                Home
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" action to="/add-course">
                Add Course
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" action to="/view-courses">
                View Course
            </Link>
            <Link className="list-group-item list-group-item-action" tag="a" action to="#!">
                About
            </Link>
        </ListGroup>
    )
}

export default Menus;