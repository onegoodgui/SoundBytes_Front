import Item from "../../components/generic-component/Item"

import HomePageStyled from "./style"


function HomePage() {

  return (
    <HomePageStyled>
      <h1>Hello Store</h1>
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