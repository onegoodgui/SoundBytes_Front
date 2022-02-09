import styled from "styled-components";

const HomePageStyled = styled.div`

width: 100%;
height: 100%;

padding-top: 40px;

h1{
  font-size: 40px;
}

  &:after {
    content: "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa"; //use non-empty string
    color: rgba(0,0,0,0);
    width:100vw;
    height: 10px;
    background-color: red;
  }

`

export default HomePageStyled