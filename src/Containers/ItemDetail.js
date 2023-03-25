import React, { useState, useContext } from "react";
import ItemQuantitySelector from "../components/ItemQuantitySelector";
import { Link } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import Button from '@mui/material/Button';

const ItemDetail = ({ product }) => {

  const [wasButtonPressed, setWasButtonPressed] = useState(false);
  const { addItemButton } = useContext(CartContext);

  const onAdd = (count) => {
    setWasButtonPressed(true);
    addItemButton(product, count);

  };

  return (
    <>
      <div  style={styles.container}>
        <img alt={product.title} src={product.image} style={styles.image} />
        <div style={styles.content}>
          <h1>{product.title}</h1>
          <span>{product.description}</span>
          <h2>$ {product.price}</h2>   
          <h2>Stock disponible: {product.stock} unidades</h2>        
        </div>
      </div> 
      {wasButtonPressed ? (
        <div style={styles.center}>
          <Link to="/cart">
            <Button variant="contained">Finalizar compra</Button>
          </Link>
        </div>
      ) : (
        <div style={styles.center}>
          <ItemQuantitySelector onAdd={onAdd} stock={product.stock}/>
        </div>
      )};
      <div style={styles.center}>
        <Link to="/">
          <Button variant="outlined">Volver al listado</Button>
        </Link>    
      </div>
    </>
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
    width: 300,
  },
  content:{
    paddingLeft: 50,
  },
  center:{
    display: "flex",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "center"
  }
};
