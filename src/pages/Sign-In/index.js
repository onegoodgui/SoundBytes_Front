import Container from "../../components/Container"
import Content from "../../components/Content"
import PageTitle from "../../components/PageTitle/PageTitle"
import TitleText from "../../components/PageTitle/TitleText"
import TitleStyle from "../../components/PageTitle/TitleStyle"
import Form from "../../components/Form/Form"
import Input from "../../components/Form/Input"
import Button from "../../components/Form/Button"
import Loading from "../../services/loading"
import { useState, useEffect } from "react"
import { useNavigate } from "react-router-dom"
import useAuth from "../../hooks/useAuth"
import useSessionData from "../../hooks/useSessionData"
import api from "../../services/api"
import { CheckmarkCircle } from 'react-ionicons'
import { HeadingGeneric } from "../../components/generic-component/H1 generic"


export default function SignIn() {

  const [isLoading, setIsLoading] = useState(false)
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
  const { auth, login } = useAuth();
  const { sessionData, updateSessionData } = useSessionData();
  const navigate = useNavigate();

  const loginItems = [{ placeholder: 'E-mail', type: 'email', state: setEmail }, { placeholder: 'Senha', type: 'password', state: setPassword }];


  function RequestLogin(e) {
    e.preventDefault();
    setIsLoading(true);

    const user = { email: email, password: password };

    const promise = api.signIn(user);

    promise.then(res => {
      setIsLoading(false);
      console.log(res.data);
      login(res.data.token);
      updateSessionData(res.data.user);

      navigate('/')
    }
    );

    promise.catch((error) => {
      setIsLoading(false);
      console.log(error);
      alert('Erro!')
    }
    );


  }


  function ButtonContent() {
    if (isLoading === true) {
      return (
        <Loading color="#FFF" height={40} width={40} />
      )
    }
    else {
      return (<span>Entrar</span>)
    }
  }




  return (
    <>
      <Container>
        <Content style={{height:'fit-content', marginTop:'40px'}}>
          <PageTitle style={{width:'90%'}}>
            <TitleText>Entrar</TitleText>
            <TitleStyle />
          </PageTitle>

          <Form onSubmit={RequestLogin}>
            {loginItems.map((item, index) => (<Input opacity={isLoading === true ? 0.8 : 1} disabled={isLoading === true ? true : false} placeholder={item.placeholder} type={item.type} key={index} onChange={(e) => { item.state(e.target.value) }}></Input>))}

            <Button type="submit">
              <ButtonContent />
            </Button>
          </Form>
          <HeadingGeneric onClick={() => { navigate("/sign-up") }}>
            Primeira vez? Cadastre-se!
          </HeadingGeneric>
        </Content>
      </Container>
    </>
  )
}