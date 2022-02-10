import { TitleStyled, TitleTextStyled } from "./style"

function Title(Props) {

  return (
    <TitleStyled>
      {(Props.titleAlign === "center" || Props.titleAlign === "right") && <div className="line-design-title"></div>}
      <TitleTextStyled>{Props.titleText}</TitleTextStyled>
      {(Props.titleAlign === "center" || Props.titleAlign === "left") && <div className="line-design-title"></div>}
    </TitleStyled>
  )

}

export default Title