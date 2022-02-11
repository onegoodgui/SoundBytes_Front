import ShoppingCartContext from "../contexts/ShoppingCartContext";
import { useContext } from "react";

export default function useShoppingCart() {

  return useContext(ShoppingCartContext)
}