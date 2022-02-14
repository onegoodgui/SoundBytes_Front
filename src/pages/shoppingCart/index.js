import { ShoppingCartStyled } from "./style"
import Title from "../../components/generic-component/Title";
import InShoppingCardItem from "../../components/In-Shopping-Cart-Item";
import { useEffect, useState } from "react";
import api from "../../services/api";
import useAuth from "../../hooks/useAuth";
import { MoneyStringToCentsInt, CentsIntToMoneyString } from "../../services/transformText";

import useShoppingCart from "../../hooks/useShoppingCart";

function ShoppingCart() {

  const { shoppingCartState, setShoppingCartState } = useShoppingCart()
  const [onlineShoppingCart, setOnlineShoppingCart] = useState("")
  const [reload, setReload] = useState(false)
  const { auth } = useAuth()

  const numItems = [...shoppingCartState].length

  const displayTotalinCart = CentsIntToMoneyString(shoppingCartState.map((el) => getItemTotal(el.price, el.qnt)).reduce(getSum, 0));


  useEffect(async () => {
    const shoppingCartData = await api.getShoppingCard(auth)
    if (!shoppingCartData.data) {
      return
    }
    setShoppingCartState(shoppingCartData.data.items)
    setOnlineShoppingCart(shoppingCartData.data.items)
  }, [reload]);

  function getItemTotal(price, qty) {
    return MoneyStringToCentsInt(price) * qty
  }

  function getSum(total, num) {
    return total + num;
  }

  function addButtonFunction(id) {
    const newShoppingArray = [...shoppingCartState]
    let index = newShoppingArray.map((el) => el.itemId).indexOf(id)
    newShoppingArray[index].qnt++
    setShoppingCartState(newShoppingArray)
  }

  function minusButtonFunction(id) {
    const newShoppingArray = [...shoppingCartState]
    let index = newShoppingArray.map((el) => el.itemId).indexOf(id)
    if (newShoppingArray[index].qnt === 1) {
      return
    }
    newShoppingArray[index].qnt--
    setShoppingCartState(newShoppingArray)
  }

  function removeButtonFunction(id) {
    const newShoppingArray = [...shoppingCartState].filter(el => el.itemId !== id)
    setShoppingCartState(newShoppingArray)
  }

  async function saveChanges() {

    try {

      const newShoppingCart = { "items": [...shoppingCartState] }

      await api.setShoppingCart(auth, newShoppingCart)

      setReload(true)
    } catch (err) {
      alert("erro ocorreu")
      console.log(err)
    }
  }

  return (
    <ShoppingCartStyled>
      <Title
        titleAlign="left"
        titleText="Seu Carrinho"
      />
      {onlineShoppingCart !== shoppingCartState
        ? <h1 onClick={saveChanges} className="shopping-save-button">Salvar alterações</h1>
        : ""
      }
      {numItems === 0
        ? <h1 className="shopping-total-cart-nt">Seu carrinho está vazio :(</h1>
        : shoppingCartState.map((el) => <InShoppingCardItem
          itemName={el.name}
          itemPrice={el.price}
          itemThumbnail={el.image}
          itemQty={el.qnt}
          addButtonFunction={() => addButtonFunction(el.itemId)}
          minusButtonFunction={() => minusButtonFunction(el.itemId)}
          removeButtonFunction={() => removeButtonFunction(el.itemId)}
        />)}
      {numItems !== 0 &&
        <span>

          <div className="total-price-wrapper">
            <h1 className="shopping-total-cart-nt">Total: </h1>
            <h1 className="shopping-total-cart-st">{displayTotalinCart}</h1>
          </div>
        </span>
      }
    </ShoppingCartStyled>
  )

}

export default ShoppingCart;