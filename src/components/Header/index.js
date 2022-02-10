import HeaderStyled from "./style";
import logo from "../../assets/LogoType.svg"
import menuIcon from "../../assets/menu.svg"
import peopleIcon from "../../assets/peopleIcon.svg"
import shoppingIcon from "../../assets/shoppingCartIcon.svg"


function Header(props) {

  return (
    <HeaderStyled>
      <div className="wrapper-menu-icons">
        <img src={menuIcon} onClick={() => props.setMenu(!props.menuState)} alt="Menu de opções do site" />
        <img src={logo} alt="SoundBytes Logotipo" />
      </div>
      <div className="wrapper-menu-icons">
        <img src={peopleIcon} alt="Sua Conta" />
        {props.user
          ? <h1 className="welcome-user-phrase-menu">Oi, {props.user}</h1>
          : ""
        }
        <img src={shoppingIcon} alt="Seu Carrinho" />
        {props.shoppingCartSize
          ? <h1 className="number-shopping-cart-menu">{props.shoppingCartSize}</h1>
          : ""
        }
      </div>
    </HeaderStyled>
  )
}

export default Header