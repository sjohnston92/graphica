import React from 'react';
import styled from "styled-components";
import logo from '../../img/GraphicaLogo.png';
import store from '../../img/store.jpg'
import SearchBar from './SearchBar'
import Feed from './Feed'

const Home = () => (
  <Wrapper>
    <Hero>
<<<<<<< HEAD
      <GraphicaLogoImage>Graphica</GraphicaLogoImage>
      <Rectangle>
        <SearchBar />
      </Rectangle>
      <HeroSubText>
        Discover a world you never knew existed
      </HeroSubText>
    </Hero>
    <FeedDiv>
      <Feed />
=======
      <HeroArea>
        <GraphicaLogo>
          GRAPHICA
        </GraphicaLogo>
        <Rectangle>
          <SearchBar />
        </Rectangle>
        <HeroSubText>
          Discover a world you never knew existed
        </HeroSubText>
      </HeroArea>
    </Hero>
    <ShowModal />
    <FeedDiv>
      <Feed />  
>>>>>>> de852b0b51463ae0456be49f8a055a0c2c6b06b5
    </FeedDiv>
  </Wrapper>
)

const Wrapper = styled.div``

const Hero = styled.div`
  width: 100%;
<<<<<<< HEAD
  height: 60%;
  left: 0px;
  background: url("https://res.cloudinary.com/graphica/image/upload/v1593462552/103311551_10101392152751811_4545732633030656478_n_yzrabm.jpg");
=======
  height: 278px;

  background: url(${store});
>>>>>>> de852b0b51463ae0456be49f8a055a0c2c6b06b5
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
const HeroArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;

<<<<<<< HEAD
const GraphicaLogoImage = styled.h1`
  position: absolute;
  left: 18.42%;
  right: 30.44%;
  top: 20.59%;
  bottom: 75.61%;
  width: 20%;
  color: white;
=======
  padding: 7rem;
  margin-left: 1rem;
`
>>>>>>> de852b0b51463ae0456be49f8a055a0c2c6b06b5

const GraphicaLogo = styled.div`
  
  display: flex;
  align-items: center;
  padding-bottom: 2rem;
  font-family: 'Elianto-Regular';
  font-size: 42px;
  @font-face {
    font-family: 'Elianto-Regular';
    src: url(${logoFont}) format("opentype");
  }
  color: #FFF
`
const Rectangle = styled.div`
  display: flex;
  align-items: center;
  height: 35.24px;
  width: 60%;
  
`
const HeroSubText = styled.p`

padding-top: 1rem;
display: flex;
height: 16.64px;




font-family: 'Montserrat', sans-serif;

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
