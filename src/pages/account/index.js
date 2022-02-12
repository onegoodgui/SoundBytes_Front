import { AccountStyled } from "./style";
import Title from "../../components/generic-component/Title";

function Account() {

  return (
    <AccountStyled>
      <Title
        titleAlign="left"
        titleText="Sua Conta"
      />
    </AccountStyled>
  )
}

export default Account