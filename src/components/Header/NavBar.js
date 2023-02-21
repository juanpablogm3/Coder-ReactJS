import React from "react";
import logo from "../../assets/React Logo.png";
import Badge from '@mui/material/Badge';
import CartWidget from "./CartWidget";
import NavCategories from "./NavCategories";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <header style={styles.container}>
      <Link style={styles.imagenes} to={"/"}>
        <img style={styles.imagenes} src={logo} alt="logo ReactJS" />
      </Link>
      <h1>ReactJS Ecommerce</h1>
      
      <NavCategories />
      <Link to={"/cart"}>
        <Badge badgeContent={4} color="error">
          <CartWidget />  
        </Badge>
      </Link>
    </header>
  );
};

const viewport = {
  width: document.documentElement.clientWidth,
  height: document.documentElement.clientHeight,
};
  
const styles = {
  container: {
    display: viewport.width > 900 ? "flex" : "none",
    alignItems: "center",
    justifyContent: "space-between",
    height: 150,
    paddingLeft: "10%",
    paddingRight: "10%",
    background: 'linear-gradient(rgba(106, 17, 203, 1), rgba(37, 117, 252, 1))',
    color: "white",
  },
  imagenes: {
    height: "90%",
  },
};

export default NavBar;