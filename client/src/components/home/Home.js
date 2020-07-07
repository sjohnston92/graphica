import React from 'react';
import styled from "styled-components";
import img from '../../img/whitemtn.jpg';
import logo from '../../img/GraphicaLogo.png';
import SearchBar from './SearchBar'
import Feed from './Feed'
import ShowModal from '../modal/ShowModal'
const Home = () => (

  <Wrapper>
    <Hero>
      
      
   
      <GraphicaLogoImage src={logo} />
   
      <Rectangle>
        <SearchBar />
      </Rectangle>
      <HeroSubText>
        Discover a world you never knew existed
      </HeroSubText>
      <ShowModal />
    </Hero>

    <FeedDiv>
    <Feed />
    
    </FeedDiv>
  </Wrapper>

)

const Wrapper = styled.div`


`
const Hero = styled.div`
  width: 100%;
  height: 40%;
  left: 0px;
  background: url("https://res.cloudinary.com/graphica/image/upload/v1593462552/103311551_10101392152751811_4545732633030656478_n_yzrabm.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: absolute;
`

const GraphicaLogoImage = styled.img`
  position: absolute;
  left: 18.42%;
  right: 30.44%;
  top: 20.59%;
  bottom: 75.61%;
  width: 20%;

`
const Rectangle = styled.div`
  position: absolute;
  left: 18.42%;
  top: 50%;
  width: 708px;
  height: 35.24px;
  background-color: white;
  
`
const HeroSubText = styled.p`
position: absolute;
width: 304px;
height: 16.64px;
left: 18.42%;
top: 70%;

font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 17px;

color: #FFF
`

const FeedDiv = styled.div`
padding-top: 30%
  
`

export default Home
