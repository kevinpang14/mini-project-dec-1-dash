import React from "react";
import { Navbar as BootstrapNavbar, Nav, Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <BootstrapNavbar bg="light" expand="lg" className="shadow-sm">
      <div className="container-fluid">
        <BootstrapNavbar.Brand>Admin Panel</BootstrapNavbar.Brand>
        <Nav className="ms-auto">
          <Button variant="dark" onClick={handleLogout}>
            Logout
          </Button>
        </Nav>
      </div>
    </BootstrapNavbar>
  );
};

export default Navbar;
