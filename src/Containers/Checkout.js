import React, { useState, useContext } from 'react';
//import firebase from 'firebase/compat/app'; //import firebase from 'firebase/app';
import 'firebase/firestore';
import { CustomContext } from "../context/CustomContext";
import {db} from "../firebase/firestore";
import {collection, addDoc, serverTimestamp, doc, updateDoc} from "firebase/firestore";


export const CheckoutForm = () => {
    const { cart, totals } = useContext(CustomContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [confirmationId, setConfirmationId] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        
        //SOLO PARA CARGAR PRODS A FIREBASE
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>console.log(json))


        const sellCollection = collection(db, "orders");
        addDoc(
          sellCollection,
          {
            name,
            email,
            address,
            items: cart,
            total: totals.total,
            time: serverTimestamp(),
          }
        )
        //.then(result=>console.log(result.id))


   /*      // Add the user's information to Firestore
        db.collection('orders').addDoc({
        name,
        email,
        address,
        timestamp: serverTimestamp()
        }) */
        .then((docRef) => {
        // Display the confirmation modal with the document ID
        setConfirmationId(docRef.id);
        setModalVisible(true);
        })
        .catch((error) => {
        console.error("Error adding document: ", error);
        });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input type="text" id="name" value={name} onChange={(event) => setName(event.target.value)} />

        <label htmlFor="email">Email:</label>
        <input type="email" id="email" value={email} onChange={(event) => setEmail(event.target.value)} />

        <label htmlFor="address">Address:</label>
        <textarea id="address" value={address} onChange={(event) => setAddress(event.target.value)}></textarea>

        <button type="submit">Submit</button>
      </form>

      {modalVisible && (
        <div className="modal">
          <div className="modal-content">
            <h2>Gracias por tu compra!</h2>
            <p>El ID de tu compra es: {confirmationId}</p>
            <button onClick={() => setModalVisible(false)}>Cerrar</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CheckoutForm;