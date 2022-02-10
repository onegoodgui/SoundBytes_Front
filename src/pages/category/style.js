import styled from "styled-components";

const CategoryStyled = styled.div`

width: 100%;
height: 100%;

padding-top: 40px;

`

const ItensCategoryDisplay = styled.div`
display: flex;
width:100;
flex-wrap: wrap;
overflow-y: scroll;
gap: 20px;
align-items: center;
justify-content: center;
padding: 10px;

`

export { CategoryStyled, ItensCategoryDisplay }