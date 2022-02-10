import { ItemStyled } from "./style";



function Item(Props) {

  return (
    <ItemStyled size={Props.size}>
      <div className="item-title-thumbnail">
        <h1>{Props.itemName}</h1>
      </div>
      <img src={Props.itemPhoto} alt={Props.itemName} />
      <div className="item-price-thumbnail">
        <h1>{Props.itemPrice}</h1>
      </div >
    </ItemStyled>
  )
}

export default Item