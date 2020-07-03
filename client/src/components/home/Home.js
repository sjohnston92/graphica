import React from 'react';
import { Header, Grid, Column, Card, } from 'semantic-ui-react';
// import '../../index.css';
import styled from "styled-components";
import img from '../../img/whitemtn.jpg';
import SearchBar from './SearchBar';
import Feed from './Feed';

const Home = () => (
<Wrapper>
  <HomeContainer>
    <Hero>
      <GraphicaLogo>
          GRAPHICA
        </GraphicaLogo>
        <Rectangle>

          <FindSomething>
          <SearchBar />
          </FindSomething>
          
            
        </Rectangle>
        <GraphicaSubText>
          Discover a world you never knew existed
        </GraphicaSubText>
    </Hero>   
      {/* <HeroImage src={img} /> */}
  </HomeContainer>
    <br></br>
    <FeedContainer>
      Hello
  <Feed />
  <StyledImage src={img} />
    </FeedContainer>


</Wrapper>
  

);
const Wrapper = styled.div`
  display: grid;
  grid-gap: 500px;
  grid-template-columns: 200px 200px 200px;
  grid-template-areas: "hero hero hero" 
    "feed feed feed";
`
const StyledImage = styled.img`


height: 300px;



`
const FeedContainer = styled.div`
  grid-area: feed;
`

const HomeContainer = styled.div`
  grid-area: hero;
`





const HeroImage = styled.img`
  position: absolute
  left: 0px;
  top: 0px;
  margin: 500px;
  height: 300px;
  

`

const Hero = styled.div`
  
  position: absolute;
  width: 1440px;
  height: 466px;
  left: 0px;
  top: 40px;

  background: url("https://res.cloudinary.com/graphica/image/upload/v1593462552/103311551_10101392152751811_4545732633030656478_n_yzrabm.jpg");

`

const GraphicaLogo = styled.h1`
  position: absolute;
  left: 25.42%;
  right: 54.44%;
  top: 20.59%;
  bottom: 75.61%;

  box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.75), 0px -1px 4px rgba(255, 255, 255, 0.75);
`
const Rectangle = styled.div`
  position: absolute;
  
  width: 708px;
  height: 35.24px;
  
  background-color: white;
  left: calc(50% - 708px/2);
  top: calc(50% - 35.24px/2 - 79.1px);
`

const FindSomething = styled.p`
  margin: 5px;
`
const GraphicaSubText = styled.p`
  position: absolute;
  width: 304px;
  height: 16.64px;
  left: calc(50% - 304px/2 - 202px);
  top: calc(50% - 16.64px/2 - 35.33px);

  font-family: Montserrat;
  font-style: normal;
  font-weight: bold;
  font-size: 14px;
  line-height: 17px;
  /* identical to box height */


  color: #FFFFFF;
  `

export default Home;