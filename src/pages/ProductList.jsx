import React from 'react'
import styled from 'styled-components'
import Navbar from '../components/Navbar'
import Announcement from '../components/Annoucement'
import Products from '../components/Products'
import Newsletter from '../components/Newsletter'
const Container = styled.div``;
const Title = styled.h1`
    margin:20px;
`;
const FilterContainer = styled.div`
    display:flex;
    justify-content:space-between;
`;
const Filter = styled.div`
    margin:20px;
`;

const FilterText = styled.span`
    font-size:20px;
    font-weight:600;
    margin-right:20px;
`;
const Select = styled.select`
    padding: 10px;
    margin :10px;
`;
const Option = styled.option`
    font-size:15px;
    gap:5px;
`;

const ProductList = () => {
  return (
      <Container>
        <Announcement/> 
        <Navbar />
        <Title>Dresses</Title>  
          <FilterContainer>
              <Filter>
                  <FilterText>Filter Products:</FilterText>
                  <Select>
                      <Option disabled selected> Color</Option>
                      <Option>White</Option>
                      <Option>Black</Option>
                      <Option>Blue</Option>
                      <Option>Red</Option>
                      <Option>Yellow</Option>
                      <Option>Green</Option>
                  </Select>
                  <Select>
                      <Option disabled selected> Size</Option>
                      <Option>XS</Option>
                      <Option>S</Option>
                      <Option>M</Option>
                      <Option>L</Option>
                      <Option>XL</Option>
                  </Select>
              </Filter>
              <Filter>
                <FilterText>Sort Products:</FilterText>
                <Select>
                    <Option selected>Newest</Option>
                    <Option>Price (asc)</Option>
                    <Option>Price (desc)</Option>  
                </Select> 
              </Filter>
          </FilterContainer>
          <Products />
          <Newsletter/>
    </Container>
  )
}

export default ProductList