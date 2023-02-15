import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";

const initialProducts = [
    { name: "manzana", id: 0, price: 500, stock: 10 },
    { name: "pera", id: 1, price: 200, stock: 20 },
    { name: "maracuya", id: 2, price: 100, stock: 15 },
];

const queryProducts = new Promise((res, rej) => {
  setTimeout(() => {
    res(initialProducts);
  }, 3000);
  //rej("hay un error");
});

export const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);

    useEffect(() => {
        /*queryProducts
        .then((data) => {
            setProducts(data);
        })
        .catch((err) => {
            console.error(err);
        });*/

        /*fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => console.log(json))
        .catch((e) => {
            console.log(e);
        });*/

        const getProducts = async () => {
            try {
                const res = await fetch("https://fakestoreapi.com/products");
                const data = await res.json();
                setProducts(data);
            } catch {
                setError(true);
            }
        };

        getProducts();
    }, []);

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
        height: document.documentElement.clientHeight,
        background: "linear-gradient(rgba(37, 117, 252, 1), white)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    h1: {
        margin: 0,
        padding: 0,
    }
};

export default ItemListContainer;