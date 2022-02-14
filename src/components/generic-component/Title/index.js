import { TitleStyled, TitleTextStyled } from "./style"

import { useNavigate } from "react-router-dom"

function Title(Props) {

  const navigate = useNavigate()

  return (
    <TitleStyled >
      {(Props.titleAlign === "center" || Props.titleAlign === "right") && <div className="line-design-title"></div>}
      <div className="title-text-wrapper"><TitleTextStyled onClick={() => { navigate(Props.navTo) }}>{Props.titleText}</TitleTextStyled></div>
      {(Props.titleAlign === "center" || Props.titleAlign === "left") && <div className="line-design-title"></div>}
    </TitleStyled>
  )

}

export default Title