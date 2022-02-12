import Item from "../../components/generic-component/Item"
import Title from "../../components/generic-component/Title"
import Poster from "../../components/generic-component/Poster"
import { useParams } from "react-router-dom"

import { CategoryStyled, ItensCategoryDisplay } from "./style"

import { useState, useEffect } from "react"

import api from "../../services/api"


function Category() {

  const { name } = useParams()
  const [pageState, setPageState] = useState({ arrayItens: [], pagePoster: "" })

  async function getAllItens() {
    try {
      const itensList = await api.getCategoryItens(name)
      const randomItensList = itensList.data.sort(random)
      setPageState({ ...pageState, arrayItens: randomItensList, pagePoster: randomItensList[0].itemPoster })
    } catch {
      alert("um erro ocorreu")
    }
  }

  useEffect(() => {
    getAllItens()
  }, [name]);

  function random() {
    return Math.random() - 0.5;
  }

  return (

    <CategoryStyled>
      <Poster
        posterImg={pageState.pagePoster}
      />
      <Title
        titleAlign="left"
        titleText={name}
      />
      <ItensCategoryDisplay>
        {pageState.arrayItens.map((el) =>
          <Item
            key={el._id}
            size={"152px"}
            itemPhoto={el.itemThumbnail}
            itemName={el.itemName}
            itemPrice={el.itemPrice}
            navTo={`/item/${el._id}`}
          />)}
      </ItensCategoryDisplay>

    </CategoryStyled>
  )
}

export default Category