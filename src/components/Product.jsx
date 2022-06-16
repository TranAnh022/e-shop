import React from 'react'
import styled from 'styled-components'
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';


const Info = styled.div`
    opacity:0;
    display:flex;
    gap:1rem;
    width:100%;
    height:100%;
    position:absolute;
    top:0;
    left:0;
    background-color:rgba(0,0,0,0.5);
    z-index:3;
    align-items:center;
    justify-content:center;
    transition: all 1s ease;
    cursor:pointer;
`;

const Container = styled.div`
    margin: 5px;
    position:relative;
    height: 350px;
    display:flex;
    justify-content: center;
    align-items:center;
    background-color:#f5fbfd;
   

    &:hover ${Info}{
        opacity:1;
    }
`;

const Image = styled.img`
    height: 75%;
    z-index:2;
 `   

const Icon = styled.div`
    width:40px;
    height:40px;
    border-radius:50%;
    background-color:white;
    display:flex;
    justify-content:center;
    align-items:center;
    transition: all 0.5s ease;
    &:hover{
        background-color:#e9f5f5;
        transform:scale(1.1);
    }
`;

const Product = ({ product }) => {
  return (
      <Container>
          <Info>
              <Icon>
                  <ShoppingCartOutlinedIcon />
              </Icon>
              <Icon>
                  <SearchOutlinedIcon />
              </Icon>
              <Icon>
                  <FavoriteBorderOutlinedIcon />
              </Icon>
          </Info>
          <Image src={product?.img} />
          
    </Container>
  )
}

export default Product