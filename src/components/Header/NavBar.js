import React from "react";
import logo from "../../assets/logo patitas.png";
import Badge from '@mui/material/Badge';
import CartWidget from "./CartWidget";
import NavCategories from "./NavCategories";

const NavBar = () => {
    return (
        <header style={styles.container}>
            <a style={styles.imagenes}>
                <img style={styles.imagenes} src={logo} alt="logo corazón con patita" />
            </a>
            <h1>Patitas Petshop</h1>

            <NavCategories />

            <Badge badgeContent={4} color="error">
                <CartWidget />
            </Badge>
        </header>
    );
};

const viewport = {
    width: document.documentElement.clientWidth,
    height: document.documentElement.clientHeight,
  };
  
  export const styles = {
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