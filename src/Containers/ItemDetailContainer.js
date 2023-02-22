import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';


export const ItemDetailContainer = ( ) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const URL = `https://fakestoreapi.com/products/${id}`;

  useEffect(() => {

    const getProduct = async () => {
      try {
        const res = await fetch(URL);
        const data = await res.json();
        setProduct(data);
      } finally {
        setLoading(false);
      }
    };

    getProduct();
  }, []);

  return (
    <>
      {<>{loading ? <CircularProgress style={styles.loader}/> : <ItemDetail product={product} />}</>}
    </>
  );
};

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