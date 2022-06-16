import React from 'react'
import { popularProducts } from '../data'
import Product from './Product'
import styled from 'styled-components';

const Container = styled.div`
    padding:20px;
    display:grid;
    grid-template-columns:25% 25% 25% 25%;
    justify-content: space-evenly;
`

const Products = () => {
  return (
    <Container>
          {popularProducts?.map((item) => (
            <Product product={item} key={item.id} />     
        ))}      
    </Container>
  )
}

export default Products