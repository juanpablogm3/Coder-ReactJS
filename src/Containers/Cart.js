import React, {useContext} from "react";
import {CustomContext} from "../context/CustomContext";
import {Link} from "react-router-dom";
import {collection, addDoc, serverTimestamp, doc, updateDoc} from "firebase/firestore";
import {db} from "../firebase/firestore";


const Cart = () => {
  const { cart, totals } = useContext(CustomContext);

/*   const buyer = {
    name: "Juan",
    apellido: "Perez",
    email: "juanperez@gmail.com",
  }; */

/*   const handlerClickSell = () => {
    const sellCollection = collection(db, "sells");
    addDoc(
      sellCollection,
      {
        buyer,
        items: cart,
        total: totals.total,
        time: serverTimestamp(),
      }
    )
    .then(result=>console.log(result.id))
  }; */

  const handlerStock = () => {
    const docReference = doc(db, 'products', '7dKvIMyRTeFJg5w62m4F');
    updateDoc(docReference, {stock:50})
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
          <Link to="/CheckoutForm">
            <button>Comprar</button>
          </Link>
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
    width: "30%",
  },
  content:{
    paddingLeft: 50,

  }
};


