import { ShoppingCardItem } from "./style";
import SquareButton from "../generic-component/SquareButton";
import Item from "../generic-component/Item";

import { MoneyStringToCentsInt, CentsIntToMoneyString } from "../../services/transformText";

function InShoppingCardItem(Props) {

  let priceRemoveSymbol = Props.itemPrice.replace("R$", "")

  let totalPriceString = (MoneyStringToCentsInt(Props.itemPrice) * Props.itemQty).toString()
  let displayPriceString = CentsIntToMoneyString(totalPriceString)

  function addButtonFunction() {
    alert("clicou em aumentar")
  }

  function minusButtonFunction() {
    alert("clicou em deletar")
  }

  function removeButtonFunction() {
    alert("remover")
  }

  return (
    <ShoppingCardItem>
      <div className="ShoppingCard-column">
        <Item
          size={"90px"}
          itemPhoto={Props.itemThumbnail} />
      </div>
      <div className="ShoppingCard-column column-variation middle-column">
        <h1 >{Props.itemName}</h1>
        <div className="price-wrapper">
          <h1>Preço: </h1>
          <h1 className="shopping-cart-st">{Props.itemPrice}</h1>
        </div>
        <div className="price-wrapper">
          <h1>Quantidade: {'\u00A0'}</h1>
          <SquareButton
            onClick={Props.minusButtonFunction}
            buttonText="-"
            size="16px"
            backgroundColor="#272727"
          />
          <h1 className="shopping-cart-st">{'\u00A0'}{Props.itemQty}{'\u00A0'}</h1>
          <SquareButton
            onClick={Props.addButtonFunction}
            buttonText="+"
            size="16px"
            backgroundColor="#990000"
          />
        </div>
        <div className="inv-line"></div>
        <h1 onClick={() => Props.removeButtonFunction()} className="remove-shoppingCart-button">Remover do Carrinho</h1>
      </div>
      <div className="ShoppingCard-column column-variation ShoppingCart-item-price-calc">
        <h1>{<br />}</h1>
        <h1 className="shopping-cart-st">{priceRemoveSymbol}</h1>
        <h1 className="shopping-cart-st"> X {'\u00A0'} {Props.itemQty} </h1>
        <div className="price-line"></div>
        <div className="price-wrapper">
          <h1>Preço: </h1>
          <h1 className="shopping-cart-st">{displayPriceString}</h1>
        </div>
      </div>

    </ShoppingCardItem>
  )
}

export default InShoppingCardItem