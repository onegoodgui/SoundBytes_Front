import Item from "../../components/generic-component/Item"
import Title from "../../components/generic-component/Title"

import { HomePageStyled, ItensHomepageDisplay } from "./style"

import arrayOfItens from "../../test/test"

function HomePage() {

  let arrayItens = arrayOfItens()
  return (
    <HomePageStyled>
      <Title titleAlign="center" titleText="Categoria 1" />
      <ItensHomepageDisplay>
        {arrayItens.map((el) =>
          <Item
            size={"132px"}
            itemPhoto={el.itemThumbnail}
            itemName={el.itemName}
            itemPrice={el.itemPrice}
          />)}
      </ItensHomepageDisplay>
      <Title titleAlign="center" titleText="Categoria 1" />
      <ItensHomepageDisplay>
        {arrayItens.map((el) =>
          <Item
            size={"132px"}
            itemPhoto={el.itemThumbnail}
            itemName={el.itemName}
            itemPrice={el.itemPrice}
          />)}
      </ItensHomepageDisplay>
      <Title titleAlign="center" titleText="Categoria 1" />
      <ItensHomepageDisplay>
        {arrayItens.map((el) =>
          <Item
            size={"132px"}
            itemPhoto={el.itemThumbnail}
            itemName={el.itemName}
            itemPrice={el.itemPrice}
          />)}
      </ItensHomepageDisplay>
      <Title titleAlign="center" titleText="Categoria 1" />
      <ItensHomepageDisplay>
        {arrayItens.map((el) =>
          <Item
            size={"132px"}
            itemPhoto={el.itemThumbnail}
            itemName={el.itemName}
            itemPrice={el.itemPrice}
          />)}
      </ItensHomepageDisplay>
      <Title titleAlign="center" titleText="Categoria 1" />
      <ItensHomepageDisplay>
        {arrayItens.map((el) =>
          <Item
            size={"132px"}
            itemPhoto={el.itemThumbnail}
            itemName={el.itemName}
            itemPrice={el.itemPrice}
          />)}
      </ItensHomepageDisplay>

    </HomePageStyled>
  )
}

export default HomePage