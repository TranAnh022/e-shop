import { Add, Remove } from '@material-ui/icons';
import React from 'react'
import styled from 'styled-components'
import Annoucement from '../components/Annoucement';
import Footer from '../components/Footer';
import Navbar from '../components/Navbar';


const Container = styled.div`
    height:100vh;
    weight:100vw;
`;
const Wrapper = styled.div`
    padding:20px;
`;
const Top = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    padding: 20px;
`;
const Title = styled.h1`
    font-weight:300;
    text-align:center;
`;
const TopButton = styled.button`
    padding:10px;
    font-weight:600;
    cursor:pointer;
    border: ${props => props.type === "filled" && "none"};
    background-color: ${props => props.type === "filled" ? "black" : "transparent"};
    color: ${props=>props.type==="filled" && "white"};
`;
const TopTexts = styled.div``;
const TopText = styled.span`
    text-decoration: underline;
    cursor:pointer;
    margin: 0px 20px;
`;
const Bottom = styled.div`
    display:flex;
    justify-content:space-between;
`;

const Info = styled.div`
    flex:3;
`;
const Product = styled.div`
    display:flex;
    justify-content:space-between;

`;

const ProductDetail = styled.div`
    flex:2;
    display:flex;
`;
const Details = styled.div`
    padding:20px;
    display:flex;
    flex-direction:column;
    
    gap: 2rem;
`;


const Image = styled.img`
    width: 200px;
    height: 200px;
    object-fit:cover;
`;

const ProductName = styled.span``;

const ProducyId = styled.span``;

const ProductColor = styled.div`
    width:20px;
    height:20px;
    border-radius: 50%;
    background-color: ${props=> props.color};
`;

const ProductSize = styled.span``

const PriceDetail = styled.div`
    flex:1;
    display:flex;
    flex-direction:column;
    align-items:center;
    justify-content:center;
`;
const ProductAmountContainer = styled.div`
    display:flex;
    align-items:center;
    margin-bottom:20px;
`;
const ProductAmount = styled.div`
    font-size: 24px;
    margin: 5px;
`;
const ProductPrice = styled.div`
    font-size:30px;
    font-weight:200;   
`;
const Summary = styled.div`
    flex:1;
    border: 0.5px solid lightgray;
    border-radius: 10px;
    padding:20px;
    height: 50vh;
`;
const Hr = styled.hr`
    background-color: #eee;
    border:none;
    height:2px;
    margin-bottom:4px;
`;

const SummaryTitle = styled.h1`
    font-weight:200;
`;
const SummaryItem = styled.div`
    margin: 30px 0px;
    display:flex;
    justify-content: space-between;
    font-weight: ${props=>props.type==="total" && "500"};
    font-size : ${props => props.type==="total" && "24px"};
`;
const SummaryItemText = styled.span`
    flex:4;
`;
const SummaryItemPrice = styled.span`
    flex:1;
`;
const Button = styled.button`
    width:100%;
    padding:10px;
    background-color:black;
    color:white;
    cursor:pointer;
    font-weight:500;
`;

const Cart = () => {
  return (
      <Container>
        
          <Navbar />
          <Annoucement/>
          <Wrapper>
              <Title>YOUR BAG</Title>
              <Top>
                  <TopButton>CONTINUE SHOPPING</TopButton>
                  <TopTexts>
                      <TopText>Shopping Bag(2)</TopText>
                      <TopText>Your Wishlist (0)</TopText>
                  </TopTexts>   
                  <TopButton type="filled">CHECKOUT NOW</TopButton>
              </Top>
              <Bottom>
                  <Info>
                      <Product>
                          <ProductDetail>
                              <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1559321498-pumaa2063715c2f_q1_2-0._UX336_QL90_.jpg" />
                              <Details>
                                  <ProductName><b>Product:</b> JESSUE THUNDER SHOES</ProductName>
                                  <ProducyId><b>ID:</b> 912837812</ProducyId>
                                  <ProductColor color="black" />
                                  <ProductSize><b>Size:</b> 37.5</ProductSize>
                              </Details>
                          </ProductDetail>
                          <PriceDetail>
                              <ProductAmountContainer>
                                  <Add />
                                  <ProductAmount>2</ProductAmount>
                                  <Remove/>
                              </ProductAmountContainer>
                              <ProductPrice>$20</ProductPrice>
                          </PriceDetail>
                      </Product>
                      <Hr/>
                      <Product>
                          <ProductDetail>
                              <Image src="https://hips.hearstapps.com/vader-prod.s3.amazonaws.com/1559321498-pumaa2063715c2f_q1_2-0._UX336_QL90_.jpg" />
                              <Details>
                                  <ProductName><b>Product:</b> JESSUE THUNDER SHOES</ProductName>
                                  <ProducyId><b>ID:</b> 912837812</ProducyId>
                                  <ProductColor color="black" />
                                  <ProductSize><b>Size:</b> 37.5</ProductSize>
                              </Details>
                          </ProductDetail>
                          <PriceDetail>
                              <ProductAmountContainer>
                                  <Add />
                                  <ProductAmount>2</ProductAmount>
                                  <Remove/>
                              </ProductAmountContainer>
                              <ProductPrice>$20</ProductPrice>
                          </PriceDetail>
                      </Product>
                  </Info>
                  <Summary>
                      <SummaryTitle>ORDER SUMMARY</SummaryTitle>
                      <SummaryItem>
                          <SummaryItemText>Subtotal</SummaryItemText>
                          <SummaryItemPrice>$ 80</SummaryItemPrice>
                      </SummaryItem>
                      <SummaryItem>
                          <SummaryItemText>Estimated Shipping</SummaryItemText>
                          <SummaryItemPrice>$ 3</SummaryItemPrice>
                      </SummaryItem>
                      <SummaryItem>
                          <SummaryItemText>Shipping Discount</SummaryItemText>
                          <SummaryItemPrice>$ -3</SummaryItemPrice>
                      </SummaryItem>
                      <SummaryItem type="total">
                          <SummaryItemText>Total</SummaryItemText>
                          <SummaryItemPrice>$ 80</SummaryItemPrice>
                      </SummaryItem>
                      <Button>Checkout Now</Button>
                  </Summary>
              </Bottom>
        </Wrapper>
        <Footer/>  
    </Container>
  )
}

export default Cart