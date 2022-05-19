import React from "react";
import { NavLink } from "react-router-dom";
import { navData } from "../../assets/data/navData";

const Nav = () => {
  const data = navData;
  return (
    <div className="mt-5">
      <ul className="nav flex-column mt-5">
        {data.map((nav) => (
          <div key={nav.id}>
            <li className="nav-item">
              <NavLink
                className="nav-link border-bottom"
                aria-current="page"
                to={`${nav.path}`}
              >
                {nav.navName}
              </NavLink>
            </li>
          </div>
        ))}
      </ul>
    </div>
  );
};

export default Nav;
