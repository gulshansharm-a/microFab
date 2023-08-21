import React, { useState } from "react";
import styled from "styled-components";

const NavbarContainer = styled.div`
  display: flex;
  align-items: center;
  background-color: white;
  padding: 10px 0;
  margin: 24px 80px;

  @media (max-width: 1200px) {
    margin: 10px;
  }

  @media (max-width: 768px) {
    margin: 0;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
  }
`;

const Logo = styled.div`
  color: var(--text, #111);
  font-family: Clash Display;
  font-size: 44px;
  margin-right: 124px;
  font-style: normal;
  font-weight: 500;
  line-height: 120%; /* 52.8px */

  @media (max-width: 768px) {
    margin-right: 0;
    margin-bottom: 10px;
  }
`;

const HamburgerButton = styled.button`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    background: none;
    border: none;
    color: var(--text, #111);
    font-size: 24px;
    cursor: pointer;
  }
`;

const NavItems = styled.ul`
  display: flex;
  gap: 24px;
  list-style: none;
  margin-left: auto;
  

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 20px;
    margin-left: 0;
    position: ${({ isOpen }) => (isOpen ? "static" : "absolute")};
    background-color: white;
    z-index: 1;
    width: 100%;
    padding: 0 0 10px;
    display: ${({ isOpen }) => (isOpen ? "flex" : "none")};
  }
`;

const NavItem = styled.li`
  color: var(--text, #111);
  font-family: Clash Display;
  font-size: 22px;
  font-style: normal;
  font-weight: 400;
  display: flex;
  line-height: 100%; /* 22px */


  &:hover {
    font-weight: 600;
  }
  &:last-child {
    margin-left: 111px;

  }
  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    &:last-child {
      margin-bottom: 20px;
    }
  }
`;

const NavLink = styled.a`
  text-decoration: none;
  color: inherit;
  display: inline-block;
 display: flex;
 flex-direction: column;

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
    align-items: center;

    img {
      width: 24px;
      height: 24px;
      margin-left: 10px;
    }
  }
`;



const DropdownItem = styled.li`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  background: #f4f3f8;
  
`;
const NewContainer = styled.div`
  width: 100px;
  height: 100px;
  background-color: green;
  position: absolute;
`;

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [newContainers, setNewContainers] = useState([]);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  
  

  const handleChildClick = (event) => {
    const { clientX, clientY } = event;
    const parentRect = event.currentTarget.getBoundingClientRect();
    const offsetX = clientX - parentRect.left + 50;
const offsetY = clientY - parentRect.top + 70;

    setNewContainers((prevContainers) => [
      ...prevContainers,
      { offsetX, offsetY },
    ]);
  };
  return (
    <NavbarContainer>
      <Logo>Logo</Logo>
      <HamburgerButton onClick={toggleNav}>☰</HamburgerButton>
      <NavItems isOpen={isNavOpen}>
        <NavItem>
          <NavLink href="#">Home</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">About</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Technology</NavLink>
        </NavItem>
        <NavItem>
          <NavLink onClick={handleChildClick}>Application</NavLink>

          {newContainers.map((container, index) => (
            <NewContainer
              key={index}
              style={{
                left: container.offsetX + "px",
                top: container.offsetY + "px",
              }}
            >
              {" "}
              <DropdownItem>Version 1</DropdownItem>
              <DropdownItem>Version 2</DropdownItem>
              <DropdownItem>Version 3</DropdownItem>
            </NewContainer>
          ))}
        </NavItem>
        <NavItem>
          <NavLink href="#">Articles</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">Blogs</NavLink>
        </NavItem>
        <NavItem>
          <NavLink href="#">
            Contact <img src="Contact.svg" alt="" />
          </NavLink>
        </NavItem>
      </NavItems>
    </NavbarContainer>
  );
};

export default Navbar;
