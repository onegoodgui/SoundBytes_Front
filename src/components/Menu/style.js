import styled from "styled-components";

const MenuStyled = styled.div`

width: 100vw;
height: 100vh;

position:fixed;
top: 0px;

z-index: 5;
display: flex;

${Props => Props.menuState
    ? "left: 0px;"
    : "left: -100vw;"}

transition: all 0.5s ease-in-out;

.menu-layer{
  width: 40vw;
  height: 100%;
  background-color: #2E2E2E;
  opacity: 0;

transition: all 1s ease-in-out;

}
`

const MenuDisplay = styled.nav`
width: 60vw;
height: 100%;
background-color: #2E2E2E;

padding: 50px 15px;

transition: all 1s ease-in-out;

h1{

  font-family: 'Dancing Script';
  font-style: normal;
  font-weight: bold;
  font-size: 36px;
  line-height: 43px;

  color: #FFFFFF;
  padding: 10px 0px;
}

p{

  font-family: 'Roboto';
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 21px;

  color: #FFFFFF;
  padding-bottom: 5px;
}
`

export {
  MenuStyled,
  MenuDisplay
}