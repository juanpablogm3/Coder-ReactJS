import React from "react";
import Navbar from "./components/Header/NavBar";
import ItemListContainer from "./Containers/ItemListContainer";
import { ItemDetailContainer } from "./Containers/ItemDetailContainer";
import Cart from "./Containers/Cart";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { CustomProvider } from "./context/CustomContext";
import { CheckoutForm } from "./Containers/Checkout.js";

const App = () => {

  const greeting = "Listado de productos";

  return (
    <>
      <BrowserRouter>
        <CustomProvider>
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
        </CustomProvider>
      </BrowserRouter>
    </>
  );
};

export default App;