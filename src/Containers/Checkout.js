import React, { useState, useContext } from 'react';
import 'firebase/firestore';
import { useNavigate } from "react-router-dom";
import { CartContext } from "../context/CartContext";
import {db} from "../firebase/firestore";
import {collection, addDoc, serverTimestamp} from "firebase/firestore";
import { Form, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'



export const CheckoutForm = () => {
  const {cart, totals, clear} = useContext(CartContext);
  const [name, setName] = useState('');
  const [lastname, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [cardExp, setCardExp] = useState('');
  const [cardCvc, setCardCvc] = useState('');
  const [phone, setPhone] = useState('');
  const [modalVisible, setModalVisible] = useState(false);
  const [confirmationId, setConfirmationId] = useState('');
  const [validated, setValidated] = useState(false);
  const MySwal = withReactContent(Swal);
  const navigate = useNavigate();


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    } else {
      event.preventDefault();
      setValidated(true);
      const sellCollection = collection(db, "orders");
      addDoc(
        sellCollection,
        {
          name, lastname, phone,
          email, address,
          cardNumber, cardExp, cardCvc,
          items: cart,
          total: totals.total,
          time: serverTimestamp(),
        }
      )
      
      .then((docRef) => {
        setConfirmationId(docRef.id);
        setModalVisible(true);
        clear();
        {modalVisible && (
          MySwal.fire({
            title: <strong>Gracias por tu compra!</strong>,
            html: <i>El ID de tu orden es: {confirmationId}</i>,
            icon: 'success',
          }).then(() => {
            navigate("/");
          })
        )}
      })
      .catch((error) => {
        console.error("Se produjo un error: ", error);
      });
      
    };
  };

  return (
    <div style={{ maxWidth: "600px", margin: "auto", paddingTop: 30}}>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName"> 
          <Form.Label>Nombre</Form.Label>
          <Form.Control required type="text" placeholder="Ingrese su nombre completo" value={name} onChange={(event) => setName(event.target.value)}/>
          <Form.Control.Feedback type="invalid">Ingrese su nombre</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicLastname"> 
          <Form.Label>Apellido</Form.Label>
          <Form.Control required type="text" placeholder="Ingrese su apellido" value={lastname} onChange={(event) => setLastName(event.target.value)}/>
          <Form.Control.Feedback type="invalid">Ingrese su apellido</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicPhonee"> 
          <Form.Label>Teléfono</Form.Label>
          <Form.Control required type="number" placeholder="Ingrese su apellido" value={phone} onChange={(event) => setPhone(event.target.value)}/>
          <Form.Control.Feedback type="invalid">Ingrese su teléfono</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control required type="email" placeholder="Ingrese su email" value={email} onChange={(event) => setEmail(event.target.value)}/>
          <Form.Control.Feedback type="invalid">Ingrese un email válido</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicAddress">
          <Form.Label>Dirección</Form.Label>
          <Form.Control required type="text" placeholder="Ingrese su dirección"  value={address} onChange={(event) => setAddress(event.target.value)}/>
          <Form.Control.Feedback type="invalid">Ingrese su dirección</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicCardNumber">
          <Form.Label>Credit Card Number</Form.Label>
          <Form.Control required type="number" placeholder="Ingrese los números de su tarjeta" value={cardNumber} onChange={(event) => setCardNumber(event.target.value)}/>
          <Form.Control.Feedback type="invalid">Ingrese su tarjeta</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicExpiration">
          <Form.Label>Vencimiento</Form.Label>
          <Form.Control required type="number" placeholder="MMAA" value={cardExp} onChange={(event) => setCardExp(event.target.value)}/>
          <Form.Control.Feedback type="invalid">Ingrese vencimiento</Form.Control.Feedback>
        </Form.Group>

        <Form.Group controlId="formBasicExpiration">
          <Form.Label>Código de seguridad</Form.Label>
          <Form.Control required type="number" placeholder="XXX" value={cardCvc} onChange={(event) => setCardCvc(event.target.value)}/>
          <Form.Control.Feedback type="invalid">Ingrese su código de seguridad</Form.Control.Feedback>
        </Form.Group>
        <div style={{ textAlign: "center", paddingTop: 20 }}>
          <Button type="submit">Enviar</Button>
        </div>
      </Form>   
    </div>   
  );
};

export default CheckoutForm;