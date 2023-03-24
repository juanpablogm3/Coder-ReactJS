import React, {useContext} from "react";
import {CustomContext} from "../context/CustomContext";
import {Link} from "react-router-dom";
import Button from '@mui/material/Button';
import {doc, updateDoc} from "firebase/firestore";
import {db} from "../firebase/firestore";


const Cart = () => {
  const { cart, totals } = useContext(CustomContext);
  console.log(cart);
  const handlerStock = () => {
    const docReference = doc(db, 'products', '5G145BGYpa42h9eHeAgH');
    console.log(docReference.id);
    //updateDoc(docReference, { id.stock : id.stock-product.quantity})
  };

  return (
    <>
      {!cart.length ? (
        <>
          <h1>
            Tu carrito está vacío, puedes agregar productos desde <Link to={"/"}>aquí</Link>
          </h1>
          <h2>Gracias por tu visita</h2>
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


