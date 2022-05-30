import React from 'react'
import styled from 'styled-components'
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';

const Image = styled.img`
width:100%;
height:100%;
object-fit: contain;
/* background-color:red; */
`
const ProductContainer = styled.div`
flex:1;
min-height:280px;
min-width:280px;
max-height:320px;
max-width:320px;
margin:10px;
display:flex;
flex-direction:column;
background-color: antiquewhite;
position:relative;
`
const Icons = styled.div`
  opacity:0;
  background-color: white;
  border-radius:50%;
  padding:10px;
  font-size:medium;
  transition: all 0.5s ease-in;
  &:hover{
    transform: scale(1.1)
   }

`

const Buttons = styled.div`
/* background-color:gray; */
height:100%;
width:100%;
display:flex;
justify-content:space-around;
align-items:center;
position:absolute;
top:0;
left:0;
&:hover ${Icons}{
  opacity:1;   
}
`


const Product = ({ product }) => {
  return (
    <ProductContainer>
      <Image src={product.img} />
      <Buttons>
        <Icons>
          <SearchIcon></SearchIcon>
        </Icons>
        <Icons>
          <FavoriteBorderIcon ></FavoriteBorderIcon>
        </Icons>
        <Icons>
          <ShoppingCartOutlinedIcon ></ShoppingCartOutlinedIcon>
        </Icons>
      </Buttons>
    </ProductContainer>
  )
}

export default Product