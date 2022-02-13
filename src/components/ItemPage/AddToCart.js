import styled from "styled-components";

const AddToCart = styled.button`

 all:unset;

 width: fit-content;
 height: fit-content;


 background-color: ${props => props.color};
 padding: 5px 10px;
 margin-left: 20px;

font-family: 'Dancing Script', cursive;
font-size: 24px;
font-weight: 700;
color: white;

transition: background-color 0.2s;

`

export default AddToCart;