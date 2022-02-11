import styled from "styled-components";

const ShoppingCartStyled = styled.div`

width: 100%;
height: 100%;

padding-top: 40px;


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

`

export {
  ShoppingCartStyled,
}