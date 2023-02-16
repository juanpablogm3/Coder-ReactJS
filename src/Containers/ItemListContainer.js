import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";


export const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const { name } = useParams();
    const URL = `https://fakestoreapi.com/products`;
    //`https://fakestoreapi.com/products/category/${name}`
    //'https://fakestoreapi.com/products'
    
    
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await fetch(URL);
                const data = await res.json();
                setProducts(data);
            } catch {
                setError(true);
            }
        };

        getProducts();
    }, [name]);

    const onAdd = (count) => {
        console.log(`el usuario selecciono ${count} `);
    };
        
    return (
        <div style={styles.itemList}>
            <h1>{greeting}</h1>

            {!error ? (
                <>
                    {products.length ? (
                        <ItemList products={products} />
                    ) : (
                        <h1>Cargando...</h1>
                    )}
                </>
            ) : (
                <h1>Hubo un error</h1>
            )}
        </div>
    );
}

export const styles = {
    itemList: {
        background: "linear-gradient(rgba(37, 117, 252, 1), white)",
        display: "flex",
        flexWrap: "wrap",
    },
    h1: {
        margin: 0,
        padding: 0,

    }
};

export default ItemListContainer;