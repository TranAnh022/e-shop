import React from 'react'
import styled from 'styled-components'
import Annoucement from '../components/Annoucement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';
import Newsletter from '../components/Newsletter';
import RemoveIcon from '@mui/icons-material/Remove';
import AddIcon from '@mui/icons-material/Add';

const Container = styled.div``;
const Wrapper = styled.div`
    padding : 50px;
    display:flex;
`;
const ImageContainer = styled.div`
    flex:1;
`;
const InfoContainer = styled.div`
    flex:1;
    padding: 0px 50px;
`;
const Img = styled.img`
    width:100%;
    height:100vh;
    object-fit:cover;
`;
const Title = styled.h1`
    font-weight:200;
    
`;
const Desc = styled.p`
    margin: 20px 0px;
`;
const Price = styled.span`
    font-size:20px;
    font-weight:500;
    
`;
const FilterContainer = styled.div`
    display:flex;
    width:50%;
    justify-content:space-between;
`;

const Filter = styled.div`
    display:flex;
    align-items:center;
    padding-top:1rem;
`;

const FilterColor = styled.div`
    width:20px;
    height:20px;
    border-radius:50%;
    background-color : ${props => props.color};
    margin:0px 5px;
    cursor:pointer;
`;

const FilterTitle = styled.span`
    font-size:20px;
    font-weight:200;
`;

const FilterSize = styled.select`
    padding: 5px;
    margin-left: 10px;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
    display:flex;
    align-items:center;
    justify-content:space-between;
    width:50%;
    padding-top:30px;
`;

const AmountContainer = styled.div`
    display:flex;
    align-items:center;
    font-weight:700;
    justify-content:center;
`;
const Amount = styled.div`
    width:30px;
    height:30px;
    border-radius:10px;
    border:1px solid teal;
    display:flex;
    align-items:center;
    justify-content:center;
    margin: 0px 5px;
`;
const Button = styled.button`
    padding:15px;
    border:1px solid teal;
    background-color:white;
    cursor:pointer;
    font-weight:500;
    transition: all 0.5s ease;
    &:hover{
        background-color:#f8f4f4;
    }
`;

const Product = () => {
  return (
      <Container>
          <Annoucement />
          <Navbar />
          <Wrapper>
              <ImageContainer>
                <Img src="https://d3o2e4jr3mxnm3.cloudfront.net/Mens-Jake-Guitar-Vintage-Crusher-Tee_68382_1_lg.png"/>
              </ImageContainer>
              <InfoContainer>
                  <Title>T-Shirt</Title>
                  <Desc>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi alias animi aliquam nesciunt assumenda! Neque laborum, libero cumque, nemo ipsum ratione dolore atque incidunt, iure autem doloribus voluptatem nihil nulla.
                  </Desc>
                  <Price>$ 20</Price>
                  <FilterContainer>
                      <Filter>
                          <FilterTitle>Color</FilterTitle>
                          <FilterColor color="beige" />
                          <FilterColor color="blue" />
                          <FilterColor color="black" />
                      </Filter>
                      <Filter>
                          <FilterTitle>Size</FilterTitle>
                          <FilterSize>
                            <FilterSizeOption>XS</FilterSizeOption>
                            <FilterSizeOption>S</FilterSizeOption>
                            <FilterSizeOption>M</FilterSizeOption>
                            <FilterSizeOption>L</FilterSizeOption>
                            <FilterSizeOption>XL</FilterSizeOption>
                           </FilterSize>
                      </Filter>
                  </FilterContainer>
                  <AddContainer>
                    <AmountContainer>
                        <RemoveIcon />
                          <Amount>1</Amount>
                        <AddIcon />
                    </AmountContainer>
                    <Button>ADD TO CART</Button>
                  </AddContainer>
                  
              </InfoContainer>
          </Wrapper>
          <Newsletter />
          <Footer/>
    </Container>
  )
}

export default Product