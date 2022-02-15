import Container from "../../components/Container"
import Content from "../../components/Content"
import PageTitle from "../../components/PageTitle/PageTitle"
import Title from "../../components/generic-component/Title"
import Form from "../../components/Form/Form"
import Input from "../../components/Form/Input"
import Button from "../../components/Form/Button"
import Loading from "../../services/loading"
import { useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import useSessionData from "../../hooks/useSessionData"
import api from "../../services/api"
import { HeadingGeneric } from "../../components/generic-component/H1 generic"


export default function AddressAccount() {

  const [isLoading, setIsLoading] = useState(false)
  const [street, setStreet] = useState('');
  const [number, setNumber] = useState('');
  const [moreInfo, setMoreInfo] = useState('');
  const [cep, setCep] = useState('');
  const [city, setCity] = useState('');
  const [stateBr, setStateBr] = useState('');
  const { auth } = useAuth();
  const navigate = useNavigate();


  const { id } = useParams()

  if (!auth) {
    navigate("/sign-in")
  }

  async function getUserAddress() {
    try {
      const promise = await api.getUserAddress(auth, id)
      if (promise.data === "") {
        return
      }

      const address = promise.data
      setStreet(address.street)
      setNumber(address.number)
      setMoreInfo(address.moreInfo)
      setCep(address.cep)
      setCity(address.city)
      setStateBr(address.stateBr)


    } catch (err) {
      console.log(err)
      alert("um erro ocorreu")
    }
  }

  useEffect(() => {
    getUserAddress()
  }, []);

  const addressItems = [
    { placeholder: 'Rua', type: 'text', state: setStreet, value: street },
    { placeholder: 'Número', type: 'text', state: setNumber, value: number },
    { placeholder: 'Complemento', type: 'text', state: setMoreInfo, value: moreInfo },
    { placeholder: 'CEP', type: 'text', state: setCep, value: cep },
    { placeholder: 'Cidade', type: 'text', state: setCity, value: city },
    { placeholder: 'Estador', type: 'text', state: setStateBr, value: stateBr },
  ];


  async function setAddress(e) {
    e.preventDefault();
    setIsLoading(true);

    const address = {
      street,
      number,
      moreInfo,
      cep,
      city,
      stateBr,
    };

    console.log(address)

    await api.setUserPayment(auth, id, { address: address })

    navigate(`/account/payment/${id}`)

    try {
      setIsLoading(false);


    } catch (error) {

      alert('Erro!')
    }


  }


  function ButtonContent() {
    if (isLoading === true) {
      return (
        <Loading color="#FFF" height={40} width={40} />
      )
    }
    else {
      return (<span>Cadastrar</span>)
    }
  }

  return (
    <>
      <Container>
        <Title
          titleAlign="left"
          titleText="Endereço"
        />
        <Form style={{ paddingTop: "0px" }} onSubmit={setAddress}>
          {addressItems.map((item, index) => (
            <Input
              opacity={isLoading === true ? 0.8 : 1}
              disabled={isLoading === true ? true : false}
              placeholder={item.placeholder}
              type={item.type}
              key={index}
              value={item.value}
              onChange={(e) => { item.state(e.target.value) }}>
            </Input>
          ))}

          <Button type="submit"><ButtonContent />
          </Button>
        </Form>
      </Container>
    </>
  )
}