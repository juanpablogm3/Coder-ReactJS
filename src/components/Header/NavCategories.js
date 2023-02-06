import React from "react";

const NavCategories = () => {
    const categories = [
        { id: 1, name: "Perros" },
        { id: 2, name: "Gatos" },
        { id: 3, name: "Otros" },
    ];

    return (
        <nav>
        {categories.map((category) => {
                return (
                    <a key={category.id} style={styles.categorias}>
                        {category.name}
                    </a>
                );
            })}
        </nav>
    );
};

export const styles = {
    categorias: {
        margin: 30,
    },
};

export default NavCategories;