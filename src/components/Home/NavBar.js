import React from "react";
import "../../assets/styles/Home/Nav.css";
import cartIcon from "../../assets/images/cart-fill.svg";
import user from "../../assets/images/person-fill.svg";
import { FaBars } from "react-icons/fa";

const NavBar = ({ toggle }) => {
  return (
    <div className="navBar">
      <div className="nav">
        <div className="nav__title">
          <div className="nav__mobile">
            <FaBars className="nav__openButton" onClick={toggle} />
          </div>
          <div className="nav__brandName">hello</div>
        </div>

        <div className="nav__searchBar">
          <input type="text" placeholder="Search" />
        </div>
        <div className="nav__menuBar">
          <button className="navButton">
            <img src={user} className="nav__icon nav__user" alt="" />
            Login
          </button>
          <button className="navButton">
            <img src={cartIcon} className="nav__icon  nav__cart" alt="" />
            Cart
          </button>
        </div>
      </div>
      <div className="nav__dropdown">
        <div class="dropdown">
          <button class="dropbtn">Electronics</button>
          <div class="dropdown-content">
            {/* <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a> */}
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">Home</button>
          <div class="dropdown-content">
            {/* <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a> */}
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">Fashion</button>
          <div class="dropdown-content">
            {/* <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a> */}
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">Appliances</button>
          <div class="dropdown-content">
            {/* <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a> */}
          </div>
        </div>
        <div class="dropdown">
          <button class="dropbtn">Beauty</button>
          <div class="dropdown-content">
            {/* <a href="#">Link 1</a>
            <a href="#">Link 2</a>
            <a href="#">Link 3</a> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
