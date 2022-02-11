import FooterStyled from "./style"

import { useNavigate, useLocation } from "react-router-dom";
import useShoppingCart from "../../hooks/useShoppingCart";
import { useState, useEffect } from "react";

function Footer(props) {
  const [textRight, setTextRight] = useState("")
  const [textLeft, setTextLeft] = useState("Voltar para Loja")
  const { pathname } = useLocation()

  const navigate = useNavigate()
  const { shoppingCartState } = useShoppingCart()

  const shoppingCartSize = [...shoppingCartState].length


  useEffect(() => {
    if (shoppingCartSize !== 0) {

      if (pathname === "/shopping-cart") {
        setTextRight("Finalizar Pedido")
        setTextLeft("Voltar para Loja")
      }
      else if (pathname === "/") {
        setTextLeft("")
      }
      else {
        setTextRight("Finalizar Compra")
        setTextLeft("Voltar para Loja")
      }
    }

  }, [shoppingCartState, pathname]);

  if (pathname === "/" & shoppingCartSize === 0) {
    return ("")
  }
  else {
    return (
      <FooterStyled>

        <div>
          <h1 onClick={() => navigate("/")}>{textLeft}</h1 >
          <h1 className="change-color">{textRight}</h1>
        </div>

      </FooterStyled>
    )
  }
}

export default Footer