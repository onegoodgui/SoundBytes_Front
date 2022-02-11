import { createContext, useState } from "react";

const ShoppingCartContext = createContext();

export function ShoppingCartProvider({ children }) {

  const [shoppingCartState, setShoppingCartState] = useState([]);

  return (
    <ShoppingCartContext.Provider value={{ shoppingCartState, setShoppingCartState }}>
      {children}
    </ShoppingCartContext.Provider>
  )
}

export default ShoppingCartContext;