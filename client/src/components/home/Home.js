import React from 'react';
import styled from "styled-components";
import img from '../../img/whitemtn.jpg';
import logo from '../../img/GraphicaLogo.png';
import store from '../../img/store.jpg'
import SearchBar from './SearchBar'
import Feed from './Feed'
import ShowModal from '../modal/ShowModal'
const Home = () => (

  <Wrapper>
    <Hero>
      
      
   
    </Hero>
      <GraphicaLogoImage src={logo} />
   
      <Rectangle>
        <SearchBar />
      </Rectangle>
      <HeroSubText>
        Discover a world you never knew existed
      </HeroSubText>
      <ShowModal />

    <FeedDiv>
    <Feed />
    
    </FeedDiv>
  </Wrapper>

)

const Wrapper = styled.div`


`
const Hero = styled.div`
  width: 100%;
  height: 278px;
  display: flex;
  align-items: center;
  background: url(${store});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`

const GraphicaLogoImage = styled.img`
  position: absolute;
  left: 18.42%;
  display: flex;
  top: 110px;
  
  width: 20%;

`
const Rectangle = styled.div`
  position: absolute;
  left: 18.42%;
  top: 160px;
  width: 40%;
  height: 35.24px;
  
`
const HeroSubText = styled.p`
position: absolute;
width: 304px;
height: 16.64px;
left: 18.42%;
top: 220px;

font-family: Montserrat;
font-style: normal;
font-weight: bold;
font-size: 14px;
line-height: 17px;

color: #FFF
`

const FeedDiv = styled.div`
margin: 30px;
  
`

export default Home
