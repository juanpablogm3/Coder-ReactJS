import React, {useContext} from "react";
import {CustomContext} from "../context/CustomContext";
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import {doc, updateDoc} from "firebase/firestore";
import {db} from "../firebase/firestore";


const Cart = () => {
  const { cart, totals, removeProduct, clear } = useContext(CustomContext);
  const handlerStock = () => {
    cart.forEach((result) => {
      const docReference = doc(db, 'products', result.id);
      updateDoc(docReference, { stock : result.stock-result.quantity})
    })
  };

  return (
    <>
      {!cart.length ? (
        <>
          <h1>
            Tu carrito está vacío, agrega productos desde <Link to={"/"}>aquí</Link>
          </h1>
        </>
      ) : (
        <>
          <div>
            {cart.map((product) => {
              return (
                <>
                <div style={styles.container}>
                <div key={product.id} >
                  <img alt={product.title} src={product.image} style={styles.image} />
                  </div>
                  <div>
                  <h2>{product.title}</h2>
                  <h3>Precio: {product.price}</h3>
                  <h3>Cantidad: {product.quantity}</h3>
                </div>
                  <Button variant="outlined" color="error" onClick={removeProduct(product.id)} >Eliminar</Button>
                </div>
                </>
              );
            })}
          </div>
          <h1>Total : {totals.total}</h1>
          <div style={{ textAlign: "center",marginBottom: 30}}>
            <Link to="/CheckoutForm">
              <Button variant="contained" onClick={handlerStock}>Comprar</Button>
            </Link>
            <Button variant="contained" color="error" onClick={clear}>Vaciar carrito</Button>
          </div>
        </>
      )}
    </>
  );
};

export default Cart;

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


