import { createContext, useState } from "react";

const OrderContext = createContext();

export function OrderContextProvider({ children }) {

  const [OrderState, setOrderState] = useState([]);

  return (
    <OrderContext.Provider value={{ OrderState, setOrderState }}>
      {children}
    </OrderContext.Provider>
  )
}

export default OrderContext;