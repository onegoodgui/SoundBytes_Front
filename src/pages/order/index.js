import Content from "../../components/Content"
import Container from "../../components/Container"
import InsideContainer from "../../components/ItemPage/InsideContainer"
import InsideContent from "../../components/ItemPage/InsideContent"
import PageTitle from "../../components/PageTitle/PageTitle"
import TitleStyle from "../../components/PageTitle/TitleStyle"
import TitleText from "../../components/PageTitle/TitleText"
import OrderItem from "../../components/Order/OrderItem"
import OrderData from "../../components/Order/OrderData"
import TextContainer from "../../components/Order/TextContainer"
import { useEffect, useState } from "react"
import useShoppingCart from "../../hooks/useShoppingCart"
import { MoneyStringToCentsInt, CentsIntToMoneyString } from "../../services/transformText";
import api from "../../services/api"
import useAuth from "../../hooks/useAuth"
import useOrder from "../../hooks/useOrder"
import { AppsOutline } from "react-ionicons"

export default function Order(){

    const {auth} = useAuth();
    const [orderData, setOrderData] = useState([]);
    const [userData, setUserData] = useState([]);
    const [userAddress, setUserAddress] = useState([]);
    const [userPayment, setUserPayment] = useState([]);
    const { shoppingCartState, setShoppingCartState } = useShoppingCart()
    const {OrderState, setOrderState} = useOrder();
    const totalsArray = [];



    const displayTotalinCart = CentsIntToMoneyString(shoppingCartState.map((el) => getItemTotal(el.price, el.qnt)).reduce(getSum, 0));

    function getItemTotal(price, qty) {
        return MoneyStringToCentsInt(price) * qty
      }
    
      function getSum(total, num) {
        return total + num;
      }



    useEffect(async() => {


        const token = api.createConfig(auth);

        if(token){
            try{
                const orderPromise = await api.getShoppingCart(token);
                setOrderData(orderPromise.data.items);

                const userPromise = await api.getUserAccount(auth);
                const userId = userPromise.data._id;
                setUserData(userPromise.data);
                console.log(userPromise);

                const addressPromise = await api.getUserAddress(auth, userId);
                setUserAddress(addressPromise.data);

                const paymentPromise = await api.getUserPayment(auth, userId);
                setUserPayment(paymentPromise.data)

                console.log(userAddress);
                console.log(userPayment);


            }
            catch(error){
                console.log(error)
            }
        }
    },[])

    useEffect(() => {

        setOrderState(
            {
                orderData, 
                userData,
                userAddress,
                userPayment,
                total: displayTotalinCart
            }
        )

    },[orderData, userData, userAddress, userPayment])



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

                        <OrderData 
                            name={userData.name} 
                            address={`
                                ${userAddress.street}, 
                                ${userAddress.number}, 
                                CEP: ${userAddress.cep}, 
                                cidade: ${userAddress.city}, 
                                estado: ${userAddress.stateBr} `}
                            paymentMethod={userPayment}
                            total={displayTotalinCart}
                        />

                        </InsideContent>
                </InsideContainer>
            </Content>
        </Container>
    )
}