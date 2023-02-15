import React from "react";
import NavBar from "./components/Header/NavBar";
import ItemListContainer from "./Containers/ItemListContainer";


const  App = () => {
  
  const texto = "LISTADO DE PRODUCTOS";
  
  return (
    <>
      <NavBar />
      <ItemListContainer greeting={texto} />
    </>
  );
}

export default App;
