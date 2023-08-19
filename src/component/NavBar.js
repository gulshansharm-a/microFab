import React, { useState } from "react";
import styled from "styled-components";


function NavBar() {
  const [technologyDropdownVisible, setTechnologyDropdownVisible] =
    useState(false);
  const [applicationDropdownVisible, setApplicationDropdownVisible] =
    useState(false);

  const toggleTechnologyDropdown = () => {
    setTechnologyDropdownVisible(!technologyDropdownVisible);
  };

  const toggleApplicationDropdown = () => {
    setApplicationDropdownVisible(!applicationDropdownVisible);
  };

  return (
    <Nav>
      <NavContainer>
        <Logo>Logo</Logo>
        <NavLinks>
          <List>
            <a href="#">Home</a>
          </List>
          <List>
            <a href="#">About Us</a>
          </List>
          <Dropdown>
            <a href="#" onClick={toggleTechnologyDropdown}>
              Technology <img src="Arrow - Down 2.svg" alt="" />
            </a>
            <DropdownContent active={technologyDropdownVisible}>
              <a href="#">Application</a>
              <a href="#">Articles</a>
              <a href="#">Blogs</a>
            </DropdownContent>
          </Dropdown>
          <Dropdown>
            <a href="#" onClick={toggleApplicationDropdown}>
              Application <img src="Arrow - Down 2.svg" alt="" />
            </a>
            <DropdownContent active={applicationDropdownVisible}>
              <a href="#">Mobile</a>
              <a href="#">Web</a>
            </DropdownContent>
          </Dropdown>
          <List>
            <a href="#">Articles</a>
          </List>
          <List>
            <a href="#">Blogs</a>
          </List>
        </NavLinks>
        <Contacts>
          <List>
            <img src="contact.svg" alt="" />
            <a href="#">Contacts Us</a>
          </List>
        </Contacts>
      </NavContainer>
    </Nav>
  );
}

export default NavBar;

const Nav = styled.nav`
  display: flex;
  width: 1440px;
  padding: 24px 80px;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;

  
`;
const NavContainer = styled.div`
  display: flex;
  align-items: center;

`;
const Logo = styled.div`

  color: var(--text, #111);
  font-family: Clash Display;
  font-size: 44px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 52.8px */
  margin-right:124px;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  align-items: flex-start;
  gap: 54px;
  color: black;
`;
const List = styled.li`
  display :flex;
  color: var(--text, #111);
  font-family: Clash Display;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 22px */
  a {
    padding: 10px;
    text-align: left;
    display: block;

    color: inherit;
    text-decoration: none;
  }
`;


const Dropdown = styled.li`
  display: flex;
  color: var(--text, #111);
  font-family: Clash Display;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 22px */
  a {
    padding: 10px;
    text-align: left;
    display: block;

    color: inherit;
    text-decoration: none;
  }
`;



const Contacts = styled.div`
  color:black;
  font-family: Clash Display;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 22px */
  margin-left:111px;
  list-style: none;
`;

const DropdownContent = styled.div`
  display: ${({ active }) => (active ? "block" : "none")};
  position: absolute;
  background-color: #333;
  min-width: 150px;
  flex-direction: column;
  top: 100%;
  left: 0;
  text-decoration: none;
  

  a {
    padding: 10px;
    text-align: left;
    display: block;
    
    color: inherit;
    text-decoration:none;
  
  }
`;





