import { PosterStyled, PosterImg, PosterLogo } from "./style";

function Poster(Props) {

  return (
    <PosterStyled posterImg={Props.posterImg}>
      <PosterLogo src={Props.logo} />
    </PosterStyled>
  )

}

export default Poster