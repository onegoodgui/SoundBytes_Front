import styled from "styled-components";
import TextContainer from "./TextContainer";

function OrderData({name, address, paymentMethod, total}){

return(
<TextContainer>
    <span>Cliente: {name}</span>
    <ul> 
        Endereço: {address}
    </ul>
    <span> Tempo de entrega: 10 dias</span>
    <span> Método de pagamento: {paymentMethod}</span>
    <span> Total: {total}</span>
</TextContainer>
)

}

export default OrderData