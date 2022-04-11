import React from "react";
import { Link } from "react-router-dom";

const Navigation = () => {
  const links = ["Home", "Users", "Products", "Cart"];
  return (
    <ul className="navbar-nav">
      {links.map((link, idX) => (
        <li key={idX} className="nav-item">
          <Link className="nav-link active" aria-current="page" to={link}>
            {link}
          </Link>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
