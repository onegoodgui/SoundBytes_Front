import OrderContainer from "./OrderContainer"
import Image from "./Image"
import OrderDetails from "./OrderDetails"

export default function OrderItem({imgUrl, productName, price, qnt, total}){


    return(
        <>
        <OrderContainer>
        <Image src={imgUrl}/>
        <OrderDetails>
            <h1>{productName}</h1>
            <span>Preço: <p>{price}</p></span>
            <span>Quantidade: <p>{qnt}</p></span>
            <span>Total: <p>{`  R$ ${total}`}</p></span>
        </OrderDetails>
        </OrderContainer>
        </>
    )
}