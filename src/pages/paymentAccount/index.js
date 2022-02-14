import { PaymentAccountStyled } from "./style";
import Title from "../../components/generic-component/Title";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import SquareButton from "../../components/generic-component/SquareButton";
import PaymentMethod from "../../components/Payment-Method";
import Button from "../../components/Form/Button";

function PaymentAccount() {

  const { auth } = useAuth()

  const [addressInfo, SetAddressInfo] = useState({})

  const [selected, setSelected] = useState("")

  const navigate = useNavigate()

  const { id } = useParams()

  if (!auth) {
    navigate("/sign-in")
  }


  async function getAccountInfo() {
    try {
      const promise = await api.getUserPayment(auth, id)
      SetAddressInfo(promise.data)
      setSelected(promise.data)
    } catch (err) {
      console.log(err)
      alert("um erro ocorreu")
    }
  }

  useEffect(() => {
    getAccountInfo()
  }, []);


  async function HandleSubmit() {

    if (selected === "") {
      alert("é necessário escolher um método!")
      return
    }

    try {
      await api.setUserPayment(auth, id, { "payment": selected })

      const user = api.createConfig(auth);

      const shoppingCart = await api.getCartData(user);
      if(shoppingCart.data.length !== 0){
        navigate('/order')
      }
      else{
        navigate(-1)
      }

    } catch {
      alert("ocorreu um erro")
    }

  }


  return (
    <PaymentAccountStyled>
      <Title
        titleAlign="left"
        titleText="Método de Pagamento"
      />
      <div className="payment-wrapper">
        <PaymentMethod
          onClick={setSelected}
          methodName="Pix"
          selected={selected}
        />
        <PaymentMethod
          onClick={setSelected}
          methodName="Boleto bancário"
          selected={selected}
        />
        <Button onClick={HandleSubmit} className="Payment-button">Salvar método</Button>
      </div>
    </PaymentAccountStyled>
  )
}

export default PaymentAccount