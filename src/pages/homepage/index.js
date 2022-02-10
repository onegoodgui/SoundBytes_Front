import Item from "../../components/generic-component/Item"
import Title from "../../components/generic-component/Title"

import HomePageStyled from "./style"


function HomePage() {

  return (
    <HomePageStyled>
      <Title titleAlign="left" titleText="Categoria 1" />
      <Item
        size={"132px"}
        itemPhoto={"https://picsum.photos/id/237/200/300"}
        itemName={"Nome do Produto"}
        itemPrice={"R$ 15,00"}
      />
    </HomePageStyled>
  )
}

export default HomePage