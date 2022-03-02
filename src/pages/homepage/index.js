import Item from "../../components/generic-component/Item"
import Title from "../../components/generic-component/Title"
import Poster from "../../components/generic-component/Poster"
import logomark from "../../assets/Logo.svg"

import { HomePageStyled, ItensHomepageDisplay } from "./style"

import { useState, useEffect } from "react"

import cookieHandler from "../../services/cookies"
import api from "../../services/api"


function HomePage() {

  const [arrayItens, setArrayItens] = useState([])






  async function getAllItens() {
    try {
      const itensList = await api.getAllItens()
      setArrayItens(itensList.data.sort(random))

      

    } catch {
      alert("um erro ocorreu")
    }
  }

  useEffect(() => {
    getAllItens();
    const cookieItems = cookieHandler.cookieParse();
    console.log(cookieItems);

  }, []);

  

  function random() {
    return Math.random() - 0.5;
  }


  return (
    <HomePageStyled>
      <Poster
        posterImg={"https://musiciansunion.org.uk/MusiciansUnion/media/content/hero/gig-music-instruments-wide.jpg"}
        logo={logomark}
      />
      <Title
        navTo={"/category/Todos"}
        titleAlign="center"
        titleText="Todos"
      />
      <ItensHomepageDisplay>
        {arrayItens.map((el) =>
          <Item
            key={el._id}
            size={"132px"}
            itemPhoto={el.itemThumbnail}
            itemName={el.itemName}
            itemPrice={el.itemPrice}
            navTo={`/item/${el._id}`}
          />)}
      </ItensHomepageDisplay>
      <Title
        navTo={"/category/Cordas"}
        titleAlign="center"
        titleText="Cordas"
      />
      <ItensHomepageDisplay>
        {arrayItens.filter((el) => { return el.itemCategory === "Cordas" }).map((el) =>
          <Item
            key={el._id}
            size={"132px"}
            itemPhoto={el.itemThumbnail}
            itemName={el.itemName}
            itemPrice={el.itemPrice}
            navTo={`/item/${el._id}`}
          />)}
      </ItensHomepageDisplay>
      <Title
        navTo={"/category/Sopro"}
        titleAlign="center"
        titleText="Sopro"
      />
      <ItensHomepageDisplay>
        {arrayItens.filter((el) => { return el.itemCategory === "Sopro" }).map((el) =>
          <Item
            key={el._id}
            size={"132px"}
            itemPhoto={el.itemThumbnail}
            itemName={el.itemName}
            itemPrice={el.itemPrice}
            navTo={`/item/${el._id}`}
          />)}
      </ItensHomepageDisplay>
    </HomePageStyled>
  )
}

export default HomePage