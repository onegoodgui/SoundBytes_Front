import styled from "styled-components";

const PosterStyled = styled.div`
width: 100%;
height: 240px;
background-image: url(${Props => Props.posterImg});
background-position: center;
overflow: hidden;

display: flex;
align-items: center;
justify-content: center;

`
const PosterLogo = styled.img`
height: 129px;

`

export {
  PosterStyled,
  PosterLogo,
}