import React from "react";
import { Link } from "react-router-dom";
import { ListGroup } from "react-bootstrap";
import Logo from "../assets/logo.svg";

const Sidebar = () => {
  return (
    <div className="bg-dark text-white vh-100" style={{ width: "250px" }}>
      <div className="p-4 text-center">
        <h4>Dashboard</h4>
        <img src={Logo} alt="dsgnr" />
      </div>
      <ListGroup variant="flush" className="text-white">
        <ListGroup.Item
          action
          as={Link}
          to="/users"
          className="bg-dark text-white"
        >
          Users
        </ListGroup.Item>
        <ListGroup.Item
          action
          as={Link}
          to="/blogs"
          className="bg-dark text-white"
        >
          Blogs
        </ListGroup.Item>
        <ListGroup.Item
          action
          as={Link}
          to="/portfolio"
          className="bg-dark text-white"
        >
          Portfolio
        </ListGroup.Item>
        <ListGroup.Item
          action
          as={Link}
          to="/testimonials"
          className="bg-dark text-white"
        >
          Testimonials
        </ListGroup.Item>
      </ListGroup>
    </div>
  );
};

export default Sidebar;
