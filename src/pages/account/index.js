import { AccountStyled } from "./style";
import Title from "../../components/generic-component/Title";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";


function Account() {

  const { auth } = useAuth()

  const [accountInfo, SetAccountInfo] = useState({})

  const navigate = useNavigate()

  if (!auth) {
    navigate("/sign-in")
  }


  async function getAccountInfo() {
    try {
      const userInfo = await api.getUserAccount(auth)
      SetAccountInfo(userInfo.data)
    } catch (err) {
      console.log(err)
      alert("um erro ocorreu")
    }
  }

  useEffect(() => {
    getAccountInfo()
  }, []);


  return (
    <AccountStyled>
      <Title
        titleAlign="left"
        titleText="Sua Conta"
      />
      <h2>Cliente</h2>
      <p>{accountInfo.name}</p>
      <h2>E-Mail</h2>
      <p>{accountInfo.email}</p>
      <h2>Método de Pagamento</h2>
      {accountInfo.payment
        ? <>
          <p>{accountInfo.payment}</p>
          <p className="p-option"
            onClick={() => navigate(`/account/payment/${accountInfo._id}`)}>
            Clique aqui para alterar
          </p>
        </>
        : <>
          <p>Nenhum método de pagamento registrado</p>
          <p className="p-option"
            onClick={() => navigate(`/account/payment/${accountInfo._id}`)}>
            Clique aqui para escolher um!
          </p>
        </>
      }
      <h2>Endereço</h2>
      {accountInfo.address
        ? <>
          <p>Endereço cadastrado</p>
          <p className="p-option"
            onClick={() => navigate(`/account/address/${accountInfo._id}`)}>
            Clique aqui para cadastrar novo endereço
          </p>
        </>
        : <>
          <p>Nenhum endereço registrado</p>
          <p className="p-option"
            onClick={() => navigate(`/account/address/${accountInfo._id}`)}>
            Clique aqui para cadastrar!
          </p>
        </>
      }
    </AccountStyled>
  )
}

export default Account