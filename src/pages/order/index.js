import Content from "../../components/Content"
import Container from "../../components/Container"
import InsideContainer from "../../components/ItemPage/InsideContainer"
import InsideContent from "../../components/ItemPage/InsideContent"
import PageTitle from "../../components/PageTitle/PageTitle"
import TitleStyle from "../../components/PageTitle/TitleStyle"
import TitleText from "../../components/PageTitle/TitleText"
import OrderItem from "../../components/Order/OrderItem"
import { useEffect, useState } from "react"
import api from "../../services/api"
import useAuth from "../../hooks/useAuth"

export default function Order(){

    const {auth} = useAuth();
    const [orderData, setOrderData] = useState([]);
    const totalsArray = [];

    useEffect(async() => {

        const user = api.createConfig(auth);
        if(user){
            try{
                const orderPromise = await api.getShoppingCart(user);
                setOrderData(orderPromise.data.items);
            }
            catch(error){
                console.log(error)
            }
        }
    },[])

    function formatPrice(price, qnt){
        const reg = /[^0-9]+/gm;
        const priceString = price;
        let priceNumber = priceString.replace(reg, '');
        priceNumber = Number(priceNumber);
        const totalPrice = (priceNumber/100)*qnt;
        const formattedTotal = Intl.NumberFormat('de-DE', { minimumFractionDigits: 2 }).format(totalPrice);

        return totalsArray.push(formattedTotal)
    }

    return(
        <Container>
            <Content>
                <InsideContainer>
                    <InsideContent style={{paddingTop:'40px'}} >

                        <PageTitle style={{marginBottom:'30px'}}>
                            <TitleText >{'Finalizar Pedido'}</TitleText>
                            <TitleStyle/>
                        </PageTitle>

                        {orderData.map((item, index) => {
                            const a = formatPrice(item.price, item.qnt);

                            return(
                                <OrderItem imgUrl={item.image} productName={item.name} price={item.price} key={index} qnt={item.qnt} total={totalsArray[index]}/>
                            )
                        })}

                        <PageTitle style={{margin:'20px 0'}}>
                            <TitleText >{'Dados da compra'}</TitleText>
                            <TitleStyle/>
                        </PageTitle>

                        </InsideContent>
                </InsideContainer>
            </Content>
        </Container>
    )
}