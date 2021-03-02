import { NavLink } from "react-router-dom";
import React from "react";
import styles from "./NavBar.module.css";

const NavBar = () => {
  return (
    <ul className={styles.navList}>
      <li>
        <NavLink exact to="/" activeClassName={styles.red}>
          Home
        </NavLink>
      </li>
      <li>
        <NavLink to="/lifestyle" activeClassName={styles.red}>
          Life style
        </NavLink>
      </li>
      <li>
        <NavLink to="/travel" activeClassName={styles.red}>
          Travel
        </NavLink>
      </li>
      <li>
        <NavLink to="/fashion" activeClassName={styles.red}>
          Fashion
        </NavLink>
      </li>
      <li>
        <NavLink to="/gallery" activeClassName={styles.red}>
          Gallery
        </NavLink>
      </li>
      <li>
        <NavLink to="/contact" activeClassName={styles.red}>
          Contact
        </NavLink>
      </li>
    </ul>
  );
};

export default NavBar;
