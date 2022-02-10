import Item from "../../components/generic-component/Item"
import Title from "../../components/generic-component/Title"
import Poster from "../../components/generic-component/Poster"
import logomark from "../../assets/Logo.svg"

import { HomePageStyled, ItensHomepageDisplay } from "./style"

import { useState, useEffect } from "react"

import api from "../../services/api"




function HomePage() {

  const [arrayItens, setArrayItens] = useState([])

  async function getAllItens() {
    try {
      const itensList = await api.getAllItens()
      setArrayItens(itensList.data)
    } catch {
      alert("um erro ocorreu")
    }
  }

  useEffect(() => {
    getAllItens()
  }, []);



  return (
    <HomePageStyled>
      <Poster
        posterImg={"https://musiciansunion.org.uk/MusiciansUnion/media/content/hero/gig-music-instruments-wide.jpg"}
        logo={logomark}
      />
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