import styled from "styled-components";

const HomePageStyled = styled.div`

width: 100%;
height: 100%;

padding-top: 40px;

`

const ItensHomepageDisplay = styled.div`
display: flex;
flex-wrap: wrap;
height: 160px;
flex-direction: column;
overflow-y: scroll;
gap: 20px;
align-items: center;
justify-content: flex-start;
padding: 10px;

`

export { HomePageStyled, ItensHomepageDisplay }