import React from "react";

const ItemListContainer = (props) => {
        
    return (
        <div style={styles.itemList}>
            <h2 style={styles.h2}>{props.greeting}</h2>
        </div>
    );
}

export const styles = {
    itemList: {
        height: document.documentElement.clientHeight - 150,
        background: "linear-gradient(rgba(37, 117, 252, 1), white)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    h2: {
        margin: 0,
        padding: 0,
    }
};

export default ItemListContainer;