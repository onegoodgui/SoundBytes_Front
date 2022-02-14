import styled from "styled-components";

const ShoppingCartStyled = styled.div`

width: 100%;
height: 100%;

padding: 40px 0px 80px 0px;


.total-price-wrapper{
  padding: 10px;
  display: flex;
  gap: 1em;
  justify-content: flex-end;
}

.price-line{
    width: 100%;
    height: 1px;
    background-color: white;
  }
  .shopping-total-cart-st {
    font-family: 'Dancing Script';
    font-style: normal;
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: white;

  }
  .shopping-total-cart-nt {
    font-family: 'Roboto';
    font-weight: bold;
    font-size: 18px;
    line-height: 21px;
    color: white;
  }

  .shopping-save-button{
    font-family: 'Dancing Script';
  font-weight: bold;
  font-size: 18px;
  line-height: 22px;
  text-align: center;
  color: #FFFFFF;
  background-color: #990000;
  }

`

export {
  ShoppingCartStyled,
}