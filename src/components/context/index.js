import React from "react";
import { useState } from "react";
import { createContext } from "react";
import { useContext } from "react";

const GlobalContext = createContext();

export const ContextGlobal = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [whishlist, setWhishlist] = useState([]);
  const [order, setOrder] = useState([]);
  console.log(cart, "jkkkkkk");
  console.table(whishlist);
  console.log(order, "context");
  return (
    <GlobalContext.Provider
      value={{
        cart,
        setCart,

        whishlist,
        setWhishlist,

        order,
        setOrder,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobalContext = () => useContext(GlobalContext);
