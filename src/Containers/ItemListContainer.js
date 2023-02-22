import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';


export const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const { name } = useParams();
    const URL = name? `https://fakestoreapi.com/products/category/${name}`: 'https://fakestoreapi.com/products';
    
    useEffect(() => {
        const getProducts = async () => {
            try {
                const res = await fetch(URL);
                console.log("fetch a: "+URL);
                const data = await res.json();
                setProducts(data);
            } catch {
                setError(true);
            }
        };

        getProducts();
    }, [name]);

    /* const onAdd = (count) => {
        console.log(`el usuario selecciono ${count} `);
    }; */
        
    return (
        <>
            <h1 style={{textAlign:"center"}} >{greeting}</h1>
            {!error ? (
                <>
                    {products.length ? (
                        <ItemList products={products} />
                    ) : (
                        <CircularProgress style={styles.loader}/>
                    )}
                </>
            ) : (
                <h1>Hubo un error</h1>
            )}
        </>
    );
}

export default ItemListContainer;

const styles ={
    loader:{
        position:"absolute",
        left: document.documentElement.clientWidth/2,
        top: document.documentElement.clientHeight/2
    }
}
