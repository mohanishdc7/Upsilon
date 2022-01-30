import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import { useHistory, NavLink, Redirect } from "react-router-dom";

import "../../styles/landingpage.css";
import Auth from "../Auth/Auth";
import User from "../Utilities/User";

export default function MainNavigation(props) {
  return (
    <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark'>
      <Container>
        <Navbar.Brand href='/' className='fs-2 fw-bolder ms-4 ms-md-0'>
          UPSILON
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' className="me-4 me-md-0 border-0" />
        <Navbar.Collapse id='responsive-navbar-nav' >
          <Nav className='me-auto d-none d-md-flex'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              width='16'
              height='16'
              fill='currentColor'
              viewBox='0 0 16 16'
              className='bi bi-search mt-3 ms-4'
            >
              <path d='M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z' />
            </svg>
            {/* Add categories to dropdown from available data */}
            <NavDropdown
              title='Search your niche'
              id='collasible-nav-dropdown'
              className='ms-3 border-bottom'
            >
              <NavDropdown.Item href='#action/3.1'>Category 1</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.1'>Category 2</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href='#action/3.3'>Category 3</NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Nav className='fw-bold ms-4 ms-md-0'>
            <Nav.Link href='/' className='me-4 d-md-none'>
              Home
            </Nav.Link>
            <Nav.Link href='/about' className='me-4'>
              About Us
            </Nav.Link>
            {Auth.isAuthenticated() !== true ? (
              <Nav.Link href='/login' className='me-2'>
                Login
              </Nav.Link>
            ) : (
              <Menu>
                <MenuButton
                  as={Button}
                  rounded={"full"}
                  variant={"link"}
                  cursor={"pointer"}
                  minW={0}
                >
                  <Avatar
                    size={"sm"}
                    src={User.img}
                    // src={
                    //   "https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"
                    // }
                  />
                </MenuButton>
                <MenuList>
                  <MenuItem>My Profile</MenuItem>
                  <MenuDivider />
                  <MenuItem
                    onClick={() =>
                      Auth.logout(() => {
                        // <Redirect to="/" />;
                        window.location.reload();
                      })
                    }
                  >
                    Sign Out
                  </MenuItem>
                </MenuList>
              </Menu>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
