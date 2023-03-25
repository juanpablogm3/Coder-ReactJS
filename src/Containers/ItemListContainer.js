import React, { useEffect, useState } from "react";
import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import { db } from "./../firebase/firestore";
import { getDocs, collection, query, where } from "firebase/firestore";


export const ItemListContainer = ({ greeting }) => {
    const [products, setProducts] = useState([]);
    const [error, setError] = useState(false);
    const { name } = useParams();
    
    useEffect(() => {
        const productsCollection = collection(db, "products");
        const q = name
          ? query(productsCollection, where("category", "==", name))
          : productsCollection;
    
        getDocs(q)
          .then((data) => {
            const list = data.docs.map((product) => {
              return {
                ...product.data(),
                id: product.id,
              };
            });
            setProducts(list);
          })
          .catch(() => {
            setError(true);
          });
    }, [name]);
        
    return (
        <>
            <h1 style={{textAlign:"center", marginTop: 50, marginBottom: 30}} >{greeting}</h1>
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
        margin: "auto",
        top: 0,
        bottom: 0,
        left: 0,
        right: 0
    }
}
