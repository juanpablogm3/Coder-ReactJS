import React from "react";
import Navbar from "./components/header/NavBar";
import ItemListContainer from "./containers/ItemListContainer";
import { ItemDetailContainer } from "./containers/ItemDetailContainer";
import Cart from "./containers/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomProvider } from "./context/CustomContext";
import { CheckoutForm } from "./containers/Checkout.js";

const App = () => {

  const greeting = "Listado de productos";

  return (
    <>
      <BrowserRouter>
        <CustomProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer greeting={greeting} />} />

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
        </CustomProvider>
      </BrowserRouter>
    </>
  );
};

export default App;