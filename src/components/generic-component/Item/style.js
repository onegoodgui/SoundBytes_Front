import styled from "styled-components";

const ItemStyled = styled.article`

width: ${Props => Props.size};
height: ${Props => Props.size};

background-color: green;

position: relative;


img{
  width:100%;
  aspect-ratio: 1 /1 ;
  object-fit: cover;
}

h1{
  font-family: 'Roboto';
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 16px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #FFFFFF;
}

.item-title-thumbnail{
  width:100%;
  height: calc(${Props => Props.size} * 0.18);
  position: absolute;
  z-index: 1;
  top:0px;
  background-color: #000000;
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
}

.item-price-thumbnail{
  width:100%;
  height: calc(${Props => Props.size} * 0.18);
  position: absolute;
  z-index: 1;
  bottom:0px;
  background-color: #000000;
  opacity: 0.8;
  display: flex;
  align-items: center;
  justify-content: center;
}

`

export {
  ItemStyled,
}