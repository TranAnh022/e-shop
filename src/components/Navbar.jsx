import React from 'react'
import styled from 'styled-components'
import  {Search} from '@material-ui/icons'
import Badge from '@mui/material/Badge';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {mobile} from '../responsive'
import { Link } from "react-router-dom";

const Container = styled.div`
    height: 60px;
    ${mobile({ height: "50px"})}
`;

const Wrapper = styled.div`
    padding: 10px 20px ;
    display:grid;
    grid-template-columns: 33.3333333% 33.3333333% 33.3333333%;
    ${mobile({padding: "10px 0px"})}
`;

const Left = styled.div`
    display : flex;
    align-items: center;
    gap: 1rem;
    ${mobile({
        height: "50px"
    })}
`;
const Language = styled.span`
    cursor: pointer;
    font-size: 14px;
`;
const SearchContainer = styled.div`
    border : 1px solid lightgray;
    display: flex;
    align-items:center;
    padding: 5px;
`;

const Input = styled.input`
    border: none;
`;

const Center = styled.div`
    text-align: center;
    a {
        text-decoration:none;
        color:black;
    }
`;
const Logo = styled.h1`
    font-weight: bold;
`;

const Right = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap :1.5rem;
`;

const MenuItem = styled.div`
    font-size: 14px;
    cursor: pointer;
    a {
        text-decoration:none;
        color:black;
    }
`;


const Navbar = () => {
  return (
      <Container>
          <Wrapper> 
              <Left>
                  <Language>EN</Language>
                  <SearchContainer>
                      <Input />
                      <Search style={{color:"gray",fontSize:'16px'}}/>
                  </SearchContainer>
              </Left>
              <Center>
                  <Link style={{decoration:"none"}} to="/"><Logo>DUC PHU</Logo></Link>
              </Center>
              <Right>
                  <MenuItem><Link to="register">REGISTER</Link></MenuItem>
                  <MenuItem><Link to="signin">SIGN IN</Link></MenuItem>
                  <MenuItem>
                  <Badge badgeContent={2} color="primary">
                    <Link to="/Cart"><ShoppingCartIcon color="action" /></Link>
                    </Badge>
                  </MenuItem>
              </Right>
         </Wrapper>
      </Container>
  )
}

export default Navbar