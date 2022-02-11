import { ShoppingCartStyled } from "./style"
import Title from "../../components/generic-component/Title";
import InShoppingCardItem from "../../components/In-Shopping-Cart-Item";
import { useEffect } from "react";

import { MoneyStringToCentsInt, CentsIntToMoneyString } from "../../services/transformText";

import useShoppingCart from "../../hooks/useShoppingCart";

function ShoppingCart() {

  const { shoppingCartState, setShoppingCartState } = useShoppingCart()

  const numItems = [...shoppingCartState].length

  const displayTotalinCart = CentsIntToMoneyString(shoppingCartState.map((el) => getItemTotal(el.itemPrice, el.itemQuantity)).reduce(getSum, 0));

  function getItemTotal(price, qty) {
    return MoneyStringToCentsInt(price) * qty
  }

  function getSum(total, num) {
    return total + num;
  }

  function addButtonFunction(id) {
    const newShoppingArray = [...shoppingCartState]
    let index = newShoppingArray.map((el) => el._id).indexOf(id)
    newShoppingArray[index].itemQuantity++
    setShoppingCartState(newShoppingArray)
  }

  function minusButtonFunction(id) {
    const newShoppingArray = [...shoppingCartState]
    let index = newShoppingArray.map((el) => el._id).indexOf(id)
    if (newShoppingArray[index].itemQuantity === 1) {
      return
    }
    newShoppingArray[index].itemQuantity--
    setShoppingCartState(newShoppingArray)
  }

  function removeButtonFunction(id) {
    const newShoppingArray = [...shoppingCartState].filter(el => el._id !== id)
    setShoppingCartState(newShoppingArray)
  }

  return (
    <ShoppingCartStyled>
      <Title
        titleAlign="left"
        titleText="Seu Carrinho"
      />
      {numItems === 0
        ? <h1 className="shopping-total-cart-nt">Seu carrinho está vazio :(</h1>
        : shoppingCartState.map((el) => <InShoppingCardItem
          itemName={el.itemName}
          itemPrice={el.itemPrice}
          itemThumbnail={el.itemThumbnail}
          itemQty={el.itemQuantity}
          addButtonFunction={() => addButtonFunction(el._id)}
          minusButtonFunction={() => minusButtonFunction(el._id)}
          removeButtonFunction={() => removeButtonFunction(el._id)}
        />)}
      {numItems !== 0 &&
        <span>
          <div className="price-line"></div>
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