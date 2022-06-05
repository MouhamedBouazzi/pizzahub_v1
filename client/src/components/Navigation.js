import React, { useEffect } from "react";
import logo from "../assests/foodhub-logo1.png"

import { Navbar, Container, Nav, Dropdown, DropdownButton } from "react-bootstrap";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { logout } from "../redux/Actions/userActions";
import "./nav.css" 
function Navigation() {
  const User = useSelector((state) => state.userReducer);
  const {user,auth}=User

  const cartstate = useSelector((state) => state.cartReducer);

  const dispatch = useDispatch();


  useEffect(() => {
   if(localStorage.getItem('getCurrent'))
   {
     window.location.href='/home'
   }
  }, []);
  return (
    <Navbar bg="primary" variant="dark">
      <Container>
        <Navbar.Brand href="/"><img class="logo" src={logo} alt="picture"/></Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link>Home</Nav.Link>
          {auth ? (<>
  <Dropdown>
    <Dropdown.Toggle id="dropdown-button-dark-example1" variant="secondary">
      {user.name}
    </Dropdown.Toggle>

    <Dropdown.Menu variant="dark">
      <Dropdown.Item href="#/action-1" active>
        Action
      </Dropdown.Item>
      <Dropdown.Item href="/orders">Orders</Dropdown.Item>
      <Dropdown.Item href="/profil">Profil</Dropdown.Item>
      <Dropdown.Divider />
      <Dropdown.Item href="/logout">logout</Dropdown.Item>
    </Dropdown.Menu>
  </Dropdown>

  {/* <DropdownButton
    id="dropdown-button-dark-example2"
    variant="secondary"
    menuVariant="dark"
    title="Dropdown button"
    className="mt-2"
  >
    <Dropdown.Item href="/orders" active>
      Orders
    </Dropdown.Item>
    <Dropdown.Item href="/profil">Profil</Dropdown.Item>
    
    <Dropdown.Divider />
    <Dropdown.Item href="/logout" onClick={() => dispatch(logout())}>lougout</Dropdown.Item>
  </DropdownButton> */}
</>) : (<Nav.Link as={Link} to="/login">
            Login
          </Nav.Link>)}
          
          <Nav.Link as={Link} to="/register">
            Register
          </Nav.Link>
          <Nav.Link as={Link} to="/">
            {/* <button onClick={() => dispatch(logout())}>log out</button> */}
          </Nav.Link> 
          {/* <div className="d-flex">
          <Nav.Link >Cart</Nav.Link>
          </div> */}
        </Nav>
        <ul class="nav navbar-nav navbar-right" >
      {/* <li><a href="#"> Sign Up</a></li>
      <li><a href="#"> Login</a></li> */}
      <li>
      <i className="fas fa-shopping-basket"> 
        <a href="/cart"> Cart {cartstate.cartItems.length}</a></i></li>
    </ul> 
      </Container>
    </Navbar>
  );
}

export default Navigation;
