import React, { useState, useContext } from "react";
import ItemCount from "../components/ItemCount";
import { Link } from "react-router-dom";
import { CustomContext } from "../context/CustomContext";
//import Rating from '@mui/material/Rating';

const ItemDetail = ({ product }) => {

  const [isPressedButton, setIsPressedButton] = useState(false);
  const { addProduct } = useContext(CustomContext);

  const onAdd = (count) => {
    setIsPressedButton(true);
    addProduct(product, count);
  };

  return (
    <div  style={styles.container}>
      <img alt={product.title} src={product.image} style={styles.image} />
      <div style={styles.content}>
        <h1>{product.title}</h1>
        <span>{product.description}</span>
       {/*  <h2>Rating </h2>
        <Rating name="half-rating-read" defaultValue={product.rating.rate} precision={0.1} readOnly /> */}
        <h2>$ {product.price}</h2>
      </div>
      {isPressedButton ? (
          <Link to="/cart">
            <button>Finalizar compra</button>
          </Link>
        ) : (
          <ItemCount onAdd={onAdd} />
        )}
    </div>
  );
};

export default ItemDetail;

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    margin: 50,
  },
  image: {
    width: "40%",
  },
  content:{
    paddingLeft: 50,

  }
};