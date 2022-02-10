import { ItemStyled, PhotoThumbnail, ItemName, ItemTitleThumbnail, ItemPriceThumbnail } from "./style";

function Item(Props) {

  return (
    <ItemStyled size={Props.size}>
      <ItemTitleThumbnail>
        <ItemName>{Props.itemName}</ItemName>
      </ItemTitleThumbnail>
      <PhotoThumbnail src={Props.itemPhoto} alt={Props.itemName} />
      <ItemPriceThumbnail className="item-price-thumbnail">
        <ItemName>{Props.itemPrice}</ItemName>
      </ItemPriceThumbnail >
    </ItemStyled>
  )
}

export default Item