import { MenuStyled, MenuDisplay } from "./style";
import { useNavigate } from "react-router-dom";

function Menu(Props) {

  const navigate = useNavigate()

  function handleNavigate(to) {
    navigate(to)
    Props.setMenu(false)
  }

  return (

    <MenuStyled menuState={Props.menuState}>
      <MenuDisplay>
        <h1>Área do Cliente</h1>
        <p onClick={() => { handleNavigate("/sign-in") }}>Entrar / Registrar</p>
        <p onClick={() => { handleNavigate("/account") }}>Sua Conta</p>
        <p onClick={() => { handleNavigate("/shopping-cart") }}>Seu Carrinho</p>
        <h1>Loja</h1>
        <p onClick={() => { handleNavigate("/") }}>HomePage</p>
        <p onClick={() => { handleNavigate("/category/Todos") }}>Todos os produtos</p>
        <p onClick={() => { handleNavigate("/category/Cordas") }}>Instrumentos de Cordas</p>
        <p onClick={() => { handleNavigate("/category/Sopro") }}>Instrumentos de Sopro</p>
      </MenuDisplay>
      <div onClick={() => Props.setMenu(!Props.menuState)} className="menu-layer"></div>
    </MenuStyled>
  )
}

export default Menu