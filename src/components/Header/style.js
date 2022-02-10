import styled from "styled-components";

const HeaderStyled = styled.header`

width: 100vw;
height: 40px;

position: fixed;
top: 0px;
left: 0px;
z-index: 10;

background-color: #2E2E2E;

display: flex;
align-items: center;
justify-content: space-between;

padding: 0px 10px;


img{
  height: 27px;
}

.welcome-user-phrase-menu{
font-family: 'Roboto';
font-style: normal;
font-weight: normal;
font-size: 12px;
line-height: 14px;
display: flex;
align-items: center;
text-align: center;

color: #FFFFFF;
}

.number-shopping-cart-menu{
font-family: 'Dancing Script';
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 17px;
display: flex;
align-items: center;

color: #FFFFFF;
}

.wrapper-menu-icons{
  display: flex;
  gap: 10px;
  align-items: center;
}


`

export default HeaderStyled