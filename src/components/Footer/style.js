import styled from "styled-components";

const FooterStyled = styled.footer`

width: 100vw;
height: 40px;
position: fixed;
bottom: 0px;
left: 0px;
z-index: 2;

background-color: #2E2E2E;
padding: 0px 10px;


font-family: 'Dancing Script';
font-style: normal;
font-weight: bold;
font-size: 24px;
line-height: 29px;

& div{
  padding-top: 5px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}

color: white;

.change-color{
  color: #FF0000
}

`

export default FooterStyled