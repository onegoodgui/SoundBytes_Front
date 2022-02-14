import Container from "../../components/Container"
import Content from "../../components/Content"
import PageTitle from "../../components/PageTitle/PageTitle"
import TitleText from "../../components/PageTitle/TitleText"
import TitleStyle from "../../components/PageTitle/TitleStyle"
import Form from "../../components/Form/Form"
import Input from "../../components/Form/Input"
import Button from "../../components/Form/Button"
import Loading from "../../services/loading"
import PasswordReq from "../../components/PasswordRequirement/PasswordReq"
import Req from "../../components/PasswordRequirement/Req"
import Icon from "../../components/PasswordRequirement/Icon"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import useSessionData from "../../hooks/useSessionData"
import api from "../../services/api"
import { CheckmarkCircle } from 'react-ionicons'
import { CloseCircle } from 'react-ionicons'
import { HeadingGeneric } from "../../components/generic-component/H1 generic"

export default function SignUp() {
  const [isLoading, setIsLoading] = useState(false)
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [display, setDisplay] = useState('none');
  const [pswrdReqVisibility, setPswrdReqVisibility] = useState('hidden')
  const navigate = useNavigate();


  const loginItems = [
    { placeholder: 'Nome', type: 'text', state: setName },
    { placeholder: 'E-mail', type: 'email', state: setEmail },
    { placeholder: 'Senha', type: 'password', state: setPassword },
    { placeholder: 'Confirme a senha', type: 'password', state: setConfirmPassword }

  ];

  async function RequestSignUp(e) {
    e.preventDefault();
    setIsLoading(true);

    if (confirmPassword !== password) {
      alert('Confirmação não respeitada. Redigite a senha');
      return
    }

    const user = { name: name, email: email, password: password };

    const promise = api.signUp(user);

    promise.then((res) => {
      console.log(res.data);
      setIsLoading(false);
      navigate('/sign-in');
    });

    promise.catch((error) => {
      console.log(error)
      setIsLoading(false);
      alert('Erro!');
    });

  }

  function ReqStatus({ status }) {
    if (status === null) {
      return (

        <CloseCircle
          color={'#be1919'}
          height="15px"
          width="15px"
        />)
    }
    else {
      return (<CheckmarkCircle
        color={'#19be42'}
        height="15px"
        width="15px"
      />)
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

  function PasswordRequirements(password) {

    const specialChar = password.match(/[\.\,\<\>\:\;\"\'\+\@\-\=\*\?\^\&\%\!\$\(\)\[\]\{\}\|\\]{1}/gm);
    const numbChar = password.match(/[0-9]{1}/gm);
    const upperCaseChar = password.match(/[A-Z]{1}/gm);
    const stringLength = password.match(/.{8,32}/gm);
    return (
      <>
        <Req content={'oi'}>Ao menos uma letra maiúscula <Icon><ReqStatus status={upperCaseChar} /></Icon></Req>
        <Req>Ao menos um número <Icon><ReqStatus status={numbChar} /> </Icon> </Req>
        <Req>Ao menos um caracter especial <Icon><ReqStatus status={specialChar} /> </Icon></Req>
        <Req>Senha entre 8 e 32 dígitos <Icon><ReqStatus status={stringLength} /> </Icon></Req>
      </>

    )
  }

  return (
    <>
      <Container>
        <Content style={{height:'fit-content', marginTop:'40px'}}>
          <PageTitle style={{width:'90%'}}>
            <TitleText>Cadastro</TitleText>
            <TitleStyle />
          </PageTitle>

          <Form onSubmit={RequestSignUp}>
            {loginItems.map((item, index) => {
              if (item.placeholder !== 'Senha') {
                return (<Input opacity={isLoading === true ? 0.8 : 1} disabled={isLoading === true ? true : false} placeholder={item.placeholder} type={item.type} key={index} onSelect={() => setDisplay('none')} onChange={(e) => { item.state(e.target.value) }}></Input>)
              }
              else {
                return (
                  <>
                    <Input opacity={isLoading === true ? 0.8 : 1} disabled={isLoading === true ? true : false} placeholder={item.placeholder} type={item.type} key={index} onSelect={() => setDisplay('flex')} onChange={(e) => { item.state(e.target.value) }}></Input>
                    <PasswordReq display={display}>
                      {PasswordRequirements(password)}
                    </PasswordReq>
                  </>

                )
              }
            }
            )}

            <Button type="submit">
              <ButtonContent />
            </Button>
          </Form>
          <HeadingGeneric onClick={() => { navigate("/sign-in") }}>
            Já tem uma conta? Entre agora!
          </HeadingGeneric>
        </Content>
      </Container>
    </>
  )
}
