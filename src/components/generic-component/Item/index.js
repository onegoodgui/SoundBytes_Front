import { ItemStyled, PhotoThumbnail, ItemName, ItemTitleThumbnail, ItemPriceThumbnail } from "./style";
import { useNavigate } from "react-router-dom";


function Item(Props) {

  const navigate = useNavigate();

  return (
    <ItemStyled onClick={() => navigate(Props.navTo)} size={Props.size}>
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