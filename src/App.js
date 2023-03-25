import React from "react";
import Navbar from "./components/header/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import { ItemDetailContainer } from "./containers/ItemDetailContainer";
import Cart from "./containers/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CartProvider } from "./context/CartContext";
import { CheckoutForm } from "./containers/Checkout.js";

const App = () => {

  const greeting = "Listado de productos";

  return (
    <>
      <BrowserRouter>
        <CartProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={greeting} />}/>

            <Route
              path="/categories/:name"
              element={<ItemListContainer greeting={greeting} />}
            />

            <Route
              path="/product/:id"
              element={<ItemDetailContainer greeting={greeting} />}
            />
            
            <Route path="/cart" element={<Cart />} />

            <Route path="/CheckoutForm" element={<CheckoutForm />} />

          </Routes>
        </CartProvider>
      </BrowserRouter>
    </>
  );
};

export default App;