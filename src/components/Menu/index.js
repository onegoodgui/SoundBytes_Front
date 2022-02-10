import { MenuStyled, MenuDisplay } from "./style";

function Menu(Props) {


  return (

    <MenuStyled menuState={Props.menuState}>
      <MenuDisplay>
        <h1>Área do Cliente</h1>
        <p>Entrar / Registrar</p>
        <p>Sua Conta</p>
        <p>Seu Carrinho</p>
        <h1>Loja</h1>
        <p>HomePage</p>
        <p>Todos os produtos</p>
        <p>Instrumentos de Cordas</p>
        <p>Instrumentos de Sopro</p>
      </MenuDisplay>
      <div onClick={() => Props.setMenu(!Props.menuState)} className="menu-layer"></div>
    </MenuStyled>
  )
}

export default Menu