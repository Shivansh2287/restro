import React, { createContext } from "react";

const Cart = createContext();

export default function Context({ children }) {
  return <Cart.Provider>{children}</Cart.Provider>;
}
