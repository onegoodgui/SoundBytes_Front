import styled from "styled-components";

const ShoppingCardItem = styled.div`

width: 100%;
height: 150px;

padding: 10px;

display: flex;
align-items: center;
justify-content: space-between;


.ShoppingCard-column{
  
    font-family: 'Roboto';
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 16px;
    color: #FFFFFF;  
}

.column-variation{
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
}

.price-wrapper{

  display: flex;
  gap: 0.2em;
}
  .shopping-cart-st {
    font-family: 'Dancing Script';
    font-style: normal;
    font-weight: bold;
    font-size: 14px;
    line-height: 17px;


  }
  .shopping-cart-nt {
    font-family: 'Roboto';
    font-weight: normal;
  }

  .ShoppingCart-item-price-calc{
    text-align: right;
  }

  .price-line{
    width: 100%;
    height: 1px;
    background-color: white;
  }

  .inv-line{
    width: 100%;
    height: 1px;
    background-color: white;
    opacity: 0;
  }

.remove-shoppingCart-button{

  font-family: 'Dancing Script';
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  color: #FFFFFF;
  background-color: #272727;
}

`

export {
  ShoppingCardItem,
}