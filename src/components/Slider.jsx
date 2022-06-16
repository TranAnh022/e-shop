import React, {useState} from 'react'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import styled from 'styled-components';
import { sliderItems } from '../data';
import { Link } from "react-router-dom";

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow:hidden;
    
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${(props) => props.direction === "left" && "10px"};
    right: ${(props) => props.direction === "right" && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    height:100%;
    display:flex;
    transform:translateX(${(props) => props.slideIndex * -100}vw);
    transition: all 1.5s ease;
`;
const Slide = styled.div`
    width:100vw;
    height:100vh;
    display:flex;
    align-items:center;
    background-color: #${props => props.bg};
    
`;
const ImgContainer = styled.div`
    height:100%;
    flex:1;
    justify-content:center;
    display:flex;
    align-items:center;
`;
const Image = styled.img`
    height:95%;
    width:70%;
    object-fit:cover;
`;
const InfoContainer = styled.div`
    flex:1;
    padding: 50px;
`;

const Title = styled.h1`
    font-size:70px;
`;
const Desc = styled.p`
    margin: 50px 0;
    font-size: 20px;
    font-weight:500;
    letter-spacing:2px;
`;
const Button = styled.button`
    padding:10px;
    font-size:20px;
    cursor:pointer;
    background-color:transparent;
`;
const Slider = () => {
    const [slideIndex, setSliceIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSliceIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSliceIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
        console.log(slideIndex);
    }

  return (
      <Container>
          <Arrow direction="left" onClick={()=>handleClick("left")}>
              <ArrowBackIosNewIcon/>
          </Arrow>
          <Wrapper slideIndex={slideIndex}>
            {sliderItems.map((item) => (
                <Slide bg={item.bg} key={item.id}>
                    <ImgContainer>
                        <Image src={item.img}/>
                    </ImgContainer>
                    <InfoContainer>
                        <Title>{item.title}</Title>
                        <Desc>{item.desc}</Desc>
                        <Link to ="productlist"><Button >SHOPPING NOW</Button></Link>
                      </InfoContainer>
                </Slide>
            ))}
              </Wrapper>
          <Arrow direction="right" onClick={()=>handleClick("right")}>
              <ArrowForwardIosIcon/>
          </Arrow>
    </Container>
  )
}

export default Slider