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

export default function SignIn(){

    const [isLoading, setIsLoading] = useState(false)
    const [password, setPassword] = useState('');
    const [email, setEmail] = useState('');
    const navigate = useNavigate();

    const loginItems = [{placeholder: 'E-mail', type: 'email', state: setEmail}, {placeholder: 'Senha', type: 'password', state: setPassword}];



    function ButtonContent(){
        if(isLoading === true){
            return(
                <Loading color="#FFF" height={40} width={40}/> 
            )
        }
        else{
            return(<span>Entrar</span>)
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

                    <Form>
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