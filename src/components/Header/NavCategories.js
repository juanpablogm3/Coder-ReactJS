import React from "react";
import { NavLink } from "react-router-dom";

const NavCategories = () => {
    const categories = [
        { id: 1, name: "Electronics", route:'/categories/electronics' },
        { id: 2, name: "Jewelery", route:'/categories/jewelery'},
        { id: 3, name: "Men's clothing", route:"/categories/men's clothing"},
        { id: 4, name: "Women's clothing", route:"/categories/women's clothing"}
    ];

    return (
        <nav>
            {categories.map((category) => {
                return (
                    <NavLink key={category.id} style={styles.categorias} to={category.route}>
                        {category.name}
                    </NavLink>
                );
            })}
        </nav>
    );
};

export const styles = {
    categorias: {
        margin: 15,
        color: "white"
    },
};

export default NavCategories;