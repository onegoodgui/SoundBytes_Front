
import SquareButton from "../generic-component/SquareButton"
import { PaymentMethodStyled } from "./style"

function PaymentMethod(Props) {

  const isSelected = Props.methodName === Props.selected


  return (
    <PaymentMethodStyled onClick={() => Props.onClick(Props.methodName)} className="payment-method-wrapper">

      {isSelected
        ? <SquareButton
          onClick={() => Props.onClick(Props.methodName)}
          size="32px"
          backgroundColor="#990000"
        />
        : <SquareButton
          onClick={() => Props.onClick(Props.methodName)}
          size="32px"
          backgroundColor="#ffffff"
        />
      }
      <h1>{Props.methodName}</h1>

    </PaymentMethodStyled>
  )

}

export default PaymentMethod
