import OrderContext from "../contexts/OrderContext";
import { useContext } from "react";

export default function useOrder() {

  return useContext(OrderContext)
}