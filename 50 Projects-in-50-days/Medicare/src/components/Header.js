import React, { useState } from "react";
import { useRef } from "react";
import { Link } from "react-router-dom";
import Login from "./Login";

function Header() {
  const myContainer = useRef(null);
  const [show, setShow] = useState(false);
  const openNav = () => {
    myContainer.current.style.width = "100%";
  };
  const closeNav = () => {
    console.log("clicked");
    myContainer.current.style.width = "0";
  };
  return (
    <header className="flex j-c-s-b a-i-c">
      <div ref={myContainer} className="sidenav">
        <a href="javascript:void(0)" className="closebtn" onClick={closeNav}>
          x
        </a>

        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>

      <span className="burger" onClick={openNav}>
        <img src="https://img.icons8.com/ios/50/000000/menu--v1.png" />
      </span>

      <div className="nav-logo flex a-i-c">
        <span>
          Medi<span className="care-blue">Care</span>
        </span>
      </div>
      <nav className="hdr-nav-container">
        <ul className=" hdr-nav flex">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/services">Services</Link>
          </li>

          <li>
            <Link to="/articles">Articles</Link>
          </li>
        </ul>
      </nav>
      {show && <Login setShow={setShow} />}
      <div className="nav-contact flex">
        <div className="call-now">
          <span>Call now</span>
          <span>0800 089 123</span>
        </div>
        <div className="call-now-btn">
          <button onClick={() => setShow(!show)}>Login</button>
        </div>
      </div>
    </header>
  );
}
export default Header;
