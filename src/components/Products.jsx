import React from 'react'
import { popularProducts } from '../mock/data'
import Product from './Product'
import styled from 'styled-components'

const ProductsList = styled.div`
display:flex;
flex-wrap:wrap;
`
const Heading = styled.h2`
    text-align: center;
    margin: 10px;
    font-size: 50px;
    `

function Products() {
  return (
    <>
    <Heading>BEST SELLERS</Heading>
      <ProductsList>
        {
          popularProducts.map(product => <Product product={product} />)
        }
      </ProductsList>
    </>
  )
}

export default Products