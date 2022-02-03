import React from "react";
import { useNavigate } from "react-router-dom";

function Nav() {
  const navigate = useNavigate();
  const handleLogin = () => {
    navigate("/form");
  };
  return (
    <header className="flex j-c-s-b header a-i-c">
      <div className="nav-logo">
        <span>Medicare</span>
      </div>

      <ul className="flex ul">
        <li>
          {" "}
          <a href="#">Personal</a>
        </li>
        <li>
          <a href="#">About</a>{" "}
        </li>
        <li>
          <a href="#">Services</a>{" "}
        </li>
        <li>
          <a href="#">Help & FAQ</a>{" "}
        </li>
      </ul>
      <div className="nav-btn">
        <button onClick={handleLogin}>Login</button>
      </div>
    </header>
  );
}

export default Nav;
