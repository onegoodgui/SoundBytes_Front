import FooterStyled from "./style"
import { useNavigate, useLocation } from "react-router-dom";
import useShoppingCart from "../../hooks/useShoppingCart";
import useAuth from '../../hooks/useAuth'
import useOrder from "../../hooks/useOrder";
import { useState, useEffect } from "react";
import api from '../../services/api'
import cookieHandler from "../../services/cookies";

function Footer(props) {
  const [textRight, setTextRight] = useState("")
  const [textLeft, setTextLeft] = useState("Voltar para Loja")
  const {auth} = useAuth()
  const { pathname } = useLocation()
  const {OrderState} = useOrder();
  const navigate = useNavigate()
  const { shoppingCartState, setShoppingCartState } = useShoppingCart()

  if (document.cookie.user !== undefined){

    const shoppingCartSize = [...shoppingCartState].length
  }

  let shoppingCartSize = 0;

  const cookieItems = cookieHandler.cookieParse();
  if(cookieItems.items){
    shoppingCartSize = cookieItems.items.length;
  }


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


  async function CheckoutPaths(){

    try{
      const user = await api.getUserAccount(auth);
      const userId = user.data._id;
      const address = await api.getUserAddress(auth, userId);

      if(pathname === '/order'){
        if (window.confirm("Finalizar compra")) {

          const obj = {userId}

          try{
            console.log(OrderState)

            await api.orderSuccess(OrderState, auth);
            setShoppingCartState([]);
            navigate('/')
            return

          }
          catch(error){
            console.log(error)
          }

         }
      }

      if(address.data === ''){
        navigate(`/account/address/${userId}`)
        return
      }

      const payment = await api.getUserPayment(auth, userId);
      if(payment.data === ''){
        navigate(`/account/payment/${userId}`)
      }
      else{
        navigate('/order')
      }

    }
    catch(error){
      console.log(error)
    }
    
  }

  if ((pathname === "/" & shoppingCartSize === 0) || pathname.includes('item/')) {
    return ("")
  }
  else {
    return (
      <FooterStyled>

        <div>
          <h1 onClick={() => navigate("/")}>{textLeft}</h1 >
          <h1 onClick={() => CheckoutPaths()} className="change-color">{textRight}</h1>
        </div>

      </FooterStyled>
    )
  }
}

export default Footer