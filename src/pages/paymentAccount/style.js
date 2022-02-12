import styled from "styled-components";

const PaymentAccountStyled = styled.div`

width: 100%;
height: 100%;

padding-top: 40px;

h2{
  font-family: 'Dancing Script';
  font-style: normal;
  font-weight: bold;
  font-size: 28px;
  line-height: 29px;

  color: #FFFFFF;
  padding: 20px 10px;
}

p{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  color: #FFFFFF;

  padding: 5px 10px;
}


.payment-wrapper{
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;

}

.Payment-button{
  margin-top: 20px;
}

`

export {
  PaymentAccountStyled,
}