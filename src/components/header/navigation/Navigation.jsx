import React from "react";

const Navigation = () => {
  const links = ["Home", "About Us", "Contact Us"];
  return (
    <ul className="navbar-nav">
      {links.map((link, idX) => (
        <li key={idX} className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">
            {link}
          </a>
        </li>
      ))}
    </ul>
  );
};

export default Navigation;
