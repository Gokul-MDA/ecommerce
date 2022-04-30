
import React from "react";
import styled from "styled-components";
import { FaTimes } from "react-icons/fa";


import "../assets/styles/Dropdown.css";

const DropdownContainer = styled.div`
  display: none;

  @media screen and (max-width: 768px) {
    position: fixed;
    z-index: 999;
    width: 70%;
    height: 100%;
    background: #000000;
    display: block;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({ isOpen }) => (isOpen ? "1" : "0")};
    left: ${({ isOpen }) => (isOpen ? "0" : "-80%")};
  }
`;

const DropdownWrapper = styled.div``;

const DropdownMenu = styled.p`
  @media screen and (max-width: 768px) {
    position: absolute;
    color: #800080;
    padding: 5px;
    margin-top: 30px;
    margin-left: 30px;
  }
`;

const Dropdown = ({ isOpen, toggle }) => {
  return (
    <DropdownContainer isOpen={isOpen} onClick={toggle}>
      <DropdownWrapper>
        <FaTimes className="nav__closeButton" />
        <DropdownMenu>
          <h3>Shop By Catagories</h3>
          <p className="catagories">Electronics</p>
          <p className="catagories">Home</p>
          <p className="catagories">Fashion</p>
          <p className="catagories">Appliances</p>
          <p className="catagories">Beauty</p>
        </DropdownMenu>
      </DropdownWrapper>
    </DropdownContainer>
  );
};

export default Dropdown;
