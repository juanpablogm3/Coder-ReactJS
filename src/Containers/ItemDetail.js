import React, { useState, useContext } from "react";
import ItemQuantitySelector from "../components/ItemQuantitySelector";
import { Link } from "react-router-dom";
import { CustomContext } from "../context/CustomContext";
import Button from '@mui/material/Button';

const ItemDetail = ({ product }) => {

  const [isPressedButton, setIsPressedButton] = useState(false);
  const { addProduct } = useContext(CustomContext);

  const onAdd = (count) => {
    setIsPressedButton(true);
    addProduct(product, count);

  };

  return (
    <div style={{ textAlign: "center",}}>
      <div  style={styles.container}>
        <img alt={product.title} src={product.image} style={styles.image} />
        <div style={styles.content}>
          <h1>{product.title}</h1>
          <span>{product.description}</span>
          <h2>$ {product.price}</h2>   
          <h2>stock: {product.stock}</h2>        
        </div>
      </div> 
      {isPressedButton ? (
        <Link to="/cart">
          <Button variant="contained">Finalizar compra</Button>
        </Link>
      ) : (
        <ItemQuantitySelector onAdd={onAdd} stock={product.stock}/>
      )}
      <Link to="/">
        <Button variant="outlined">Volver al listado</Button>
      </Link>
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
    width: 300,
  },
  content:{
    paddingLeft: 50,
  }
};