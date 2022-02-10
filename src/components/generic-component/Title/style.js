import styled from "styled-components";

const TitleStyled = styled.div`

display: flex;
align-items: center;
justify-content: space-between;

.line-design-title{
  width: 100%;
  height: 3px;
  background-color: #990000;
}

`
const TitleTextStyled = styled.h1`
  font-family: 'Dancing Script';
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 43px;
  color: #FFFFFF;
  display: ruby;
  padding: 23px;

`

export {
  TitleStyled,
  TitleTextStyled,
}