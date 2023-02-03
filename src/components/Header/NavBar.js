import React from "react";
import logo from "../../assets/logo patitas.png";
import { styles } from "./Navbar.style";
import Badge from '@mui/material/Badge';
import CartWidget from "./CartWidget";
import NavCategories from "./NavCategories";

const NavBar = () => {
    return (
        <header style={styles.container}>
            <a style={styles.imagenes} href="">
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

export default NavBar;