import { SquareButtonStyle } from "./style";


function SquareButton(Props) {

  return (
    <SquareButtonStyle backgroundColor={Props.backgroundColor} onClick={() => Props.onClick()} size={Props.size}>
      <h1>{Props.buttonText}</h1>
    </SquareButtonStyle>
  )
}

export default SquareButton