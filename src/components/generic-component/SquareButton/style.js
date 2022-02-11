import styled from "styled-components";

const SquareButtonStyle = styled.div`

width: ${Props => Props.size};
height: ${Props => Props.size};

background-color: ${Props => Props.backgroundColor};
color: white;
font-weight: bolder;
font-family: 'Dancing Script';
font-size: calc(${Props => Props.size} * 2);

display: flex;
align-items: center;
justify-content: center;

h1{
  width: 100%;
  height: 100%;
  line-height: 0.2em;
  padding-left: 0.02em
}

`

export {
  SquareButtonStyle,
}