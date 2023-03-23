import React, { useState, useContext } from 'react';
import 'firebase/firestore';
import { CustomContext } from "../context/CustomContext";
import {db} from "../firebase/firestore";
import {collection, addDoc, serverTimestamp, doc, updateDoc} from "firebase/firestore";
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'


export const CheckoutForm = () => {
    const {cart, totals} = useContext(CustomContext);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [modalVisible, setModalVisible] = useState(false);
    const [confirmationId, setConfirmationId] = useState('');
    const MySwal = withReactContent(Swal);


    const handleSubmit = (event) => {
        event.preventDefault();


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

        .then((docRef) => {
        setConfirmationId(docRef.id);
        setModalVisible(true);
        })
        .catch((error) => {
        console.error("Se produjo un error: ", error);
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
        MySwal.fire({
          title: <strong>Gracias por tu compra!</strong>,
          html: <i>El ID de tu orden es: {confirmationId}</i>,
          icon: 'success',
        }).then(() => {
          window.location.href = '/';
        })
      )}
    </div>
  );
};

export default CheckoutForm;