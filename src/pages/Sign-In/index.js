import Container from "../../components/Container"
import Content from "../../components/Content"
import PageTitle from "../../components/PageTitle/PageTitle"
import TitleText from "../../components/PageTitle/TitleText"
import TitleStyle from "../../components/PageTitle/TitleStyle"

export default function SignIn(){
    return(
        <>
            <Container>
               <Content>
                    <PageTitle>
                        <TitleText>Entrar</TitleText>
                        <TitleStyle/>
                    </PageTitle>
               </Content>
            </Container>
        </>
    )
}