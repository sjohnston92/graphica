import React from 'react';
import styled from "styled-components";
import store from '../../img/store.jpg'
import SearchBar from './SearchBar'
import Feed from './Feed'
import logoFont from '../../fonts/Elianto-Regular.otf';



const Home = () => (

  <Wrapper>
    <Hero>
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

  background: url(${store});
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
const HeroArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;

  padding: 7rem;
  margin-left: 1rem;
`

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
