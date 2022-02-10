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

export default function SignUp(){
    const [isLoading, setIsLoading] = useState(false)
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const navigate = useNavigate();


    const loginItems = [
        {placeholder: 'Nome', type: 'text', state: setName}, 
        {placeholder: 'E-mail', type: 'email', state: setEmail}, 
        {placeholder: 'Senha', type: 'password', state: setPassword},
        {placeholder: 'Confirme a senha', type: 'password', state: setConfirmPassword}

    ];

    function RequestSignUp(e){
        e.preventDefault();
        setIsLoading(true);

        if(confirmPassword !== password){
            alert('Confirmação não respeitada. Redigite a senha');
            return
        }

        const user = {name: name, email: email, password: password};
        
            const promise = api.signUp(user);

            promise.then((res) => {
                console.log(res.data);
                setIsLoading(false);
                navigate('/');
            });

            promise.catch((error) => {
                console.log(error);
                setIsLoading(false);
                alert('Erro!');
            });

    }

    function ButtonContent(){
        if(isLoading === true){
            return(
                <Loading color="#FFF" height={40} width={40}/> 
            )
        }
        else{
            return(<span>Cadastrar</span>)
        }
    }

    return(
        <>
            <Container>
               <Content>
                    <PageTitle>
                        <TitleText>Entrar</TitleText>
                        <TitleStyle/>
                    </PageTitle>

                    <Form onSubmit={RequestSignUp}>
                        {loginItems.map((item, index) => (<Input opacity={isLoading === true? 0.8 : 1} disabled={isLoading === true? true : false} placeholder={item.placeholder} type={item.type} key={index}></Input>))}

                        <Button type="submit">
                            <ButtonContent/>
                        </Button>
                    </Form>
                    
               </Content>
            </Container>
        </>
    )
}
