
import React from 'react'
import styled from 'styled-components';
import SendOutlinedIcon from '@material-ui/icons/SendOutlined';


const Container = styled.div`
    height:60vh;
    width:100%;
    background-color:#fcf5f5;
    display:flex;
    align-items:center;
    justify-content:center;
    flex-direction: column;
`;
const Title = styled.h1`
    font-size:70px;
    margin: 20px;
`;
const Description = styled.div`
    font-size:24px;
    font-weight:300;
    margin-bottom:20px;
`;
const InputContainer = styled.div`
    width:50%;
    height:40px;
    background-color:white;
    display:flex;
    justify-content:space-between;;
    border:1px solid lightgray;
`;
const Input = styled.input`
    flex:8;
    border:none;
    padding-left:20px;
    font-size:20px;
`;
const Button = styled.button`
    flex:1;
    border:none;
    background-color:teal;
    color:white;
`;

const Newsletter = () => {
  return (
    <Container>
        <Title>Newsletter</Title>
        <Description>Get timely updates from your favarite products.</Description>
          <InputContainer>
              <Input placeholder="Enter your email..."/>
              <Button >
                <SendOutlinedIcon/>
              </Button>
          </InputContainer>  
    </Container>
  )
}

export default Newsletter