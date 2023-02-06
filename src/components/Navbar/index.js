import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
            <NavLink to="/" activeStyle>
              <button type="button" class="btn btn-light">Home</button>
            </NavLink>
          <NavLink to="/about" activeStyle>
           <button type="button" class="btn btn-light">About</button>
          </NavLink>
          <NavLink to="/skills" activeStyle>
            <button type="button" class="btn btn-light">Skills</button>
          </NavLink>
          <NavLink to="/interests" activeStyle>
            <button type="button" class="btn btn-light">Interests</button>
          </NavLink>
          <NavLink to="/contact" activeStyle>
          <button type="button" class="btn btn-light">Contact</button>
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;