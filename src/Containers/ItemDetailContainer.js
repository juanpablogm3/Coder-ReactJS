import React, { useEffect, useState } from "react";
import ItemDetail from "./ItemDetail";
import { useParams } from "react-router-dom";
import CircularProgress from '@mui/material/CircularProgress';
import {db} from "../firebase/firestore";
import { doc, getDoc, collection } from "firebase/firestore";


export const ItemDetailContainer = ( ) => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();


  useEffect(() => {

    const productsCollection = collection(db,'products');
    const refDoc = doc(productsCollection,id)
    getDoc(refDoc).then(
      (data)=>{
        setProduct({
          id:data.id,
          ...data.data(),
        });
      }
    )
    .finally(()=>{ 
      setLoading(false);
    })
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