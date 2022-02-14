import Container from "../../components/Container";
import Content from "../../components/Content";
import BackgroundImage from "../../components/ItemPage/BackgroundImage";
import PageTitle from "../../components/PageTitle/PageTitle";
import TitleStyle from "../../components/PageTitle/TitleStyle";
import TitleText from "../../components/PageTitle/TitleText";
import Description from "../../components/ItemPage/Description/Description";
import InsideContainer from "../../components/ItemPage/InsideContainer";
import InsideContent from "../../components/ItemPage/InsideContent";
import ShoppingContainer from "../../components/ItemPage/ShoppingContainer";
import NumberContainer from "../../components/ItemPage/NumberContainer";
import Number from "../../components/ItemPage/Number";
import SquareButton from "../../components/generic-component/SquareButton";
import shoppingCartIcon from '../../assets/shoppingCartIcon.svg'
import AddToCart from "../../components/ItemPage/AddToCart";
import useAuth from "../../hooks/useAuth";
import useShoppingCart from "../../hooks/useShoppingCart";
import { useEffect, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import api from "../../services/api"
import { Add } from "react-ionicons";

export default function ItemPage() {

  const [selectedItem, setSelectedItem] = useState('');
  const [quantity, setQuantity] = useState(0);
  const { itemId } = useParams();
  const { auth } = useAuth();
  const navigate = useNavigate();

  useEffect(async () => {

    try {
      const res = await api.getItem(itemId);
      setSelectedItem(res.data);
      const user = api.createConfig(auth);
      if (user) {
        const cartData = await api.getCartData(user);

      }
      else {

      }

    }
    catch (error) {
      console.log(error)
    }

  }, [])

  async function AddItems() {

    if (!auth) {
      navigate('/sign-in');
    }
    const user = api.createConfig(auth);
    const obj = { qnt: quantity, itemId: itemId }
    try {
      await api.addToCart(obj, user);

      const cartData = await api.getCartData(user);
      const qnty = cartData.data[0].totalQnty
      navigate('/shopping-cart')
    }
    catch (error) {
      console.log(error)
    }
  }

  function Add() {
    setQuantity(quantity + 1);
  }

  function Subtract() {
    if (quantity === 0) {
      return
    }
    setQuantity(quantity - 1);
  }



  console.log(selectedItem);

  return (
    <Container>
      <Content>
        <BackgroundImage src={selectedItem.itemPoster} />

        <InsideContainer>
          <InsideContent>
            <PageTitle>
              <TitleText>{selectedItem.itemName}</TitleText>
              <TitleStyle />
            </PageTitle>


            <Description>
              <h1>Descrição:</h1>
              <span>{selectedItem.itemDescription}</span>
            </Description>

            <ShoppingContainer>

              <span> Preço: <NumberContainer>{`${selectedItem.itemPrice}`}</NumberContainer></span>
              <span> Quantidade:
                <NumberContainer>
                  <SquareButton backgroundColor={'#272727'} size={'24px'} buttonText={'-'} onClick={Subtract}> </SquareButton>
                  <Number>{quantity}</Number>
                  <SquareButton backgroundColor={'#990000'} size={'24px'} buttonText={'+'} onClick={Add}></SquareButton>
                </NumberContainer>
              </span>
              <span> <img src={shoppingCartIcon} alt="Seu Carrinho" style={{ width: '50px' }} />  <AddToCart color={quantity > 0 ? '#990000' : '#636260'} disabled={quantity > 0 ? false : true} onClick={() => AddItems()}> Adicionar ao carrinho</AddToCart></span>

            </ShoppingContainer>
          </InsideContent>
        </InsideContainer>

      </Content>
    </Container>
  )

}
