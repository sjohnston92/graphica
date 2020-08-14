import React, { useEffect, useState, useContext } from 'react';
import styled from "styled-components";
import logoFont from '../../fonts/Elianto-Regular.otf';
import store from '../../img/store.jpg'
import SearchBar from './SearchBar'
import Feed from './Feed'
import { withRouter, Link } from 'react-router-dom'
import { ConfigContext } from '../../App';
 
const Home = (props) => {
  const context = useContext(ConfigContext)

  useEffect(() => {
    context.setShowCatbar(true)
    console.log(context.showCatbar)
    return () => context.setShowCatbar(false)
  })
  return(
    <Wrapper>
      <Hero>
        <HeroArea>
          <GraphicaLogo>
            GRAPHICA
          </GraphicaLogo>
          <SearchBar />
          <HeroSubText>
            Discover a world you never knew existed
          </HeroSubText>
        </HeroArea>
        <BottomText>
          <FreeForever>
            Free Forever
          </FreeForever>
          <AboutUs>
            <Link to={'/about_us'}>Learn about our developers</Link>
          </AboutUs>
        </BottomText>
      </Hero>
      <Feed />  
    </Wrapper>
  )
}
const Wrapper = styled.div`
  
`
const Hero = styled.div`
  width: 100%;
  height: 416px;
  background: linear-gradient(0deg, rgba(39, 39, 53, 0.35), rgba(39, 39, 53, 0.35)), url('https://res.cloudinary.com/graphica/image/upload/v1595688102/ladybug_ekpq5c.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`
const HeroArea = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: left;
  padding-top: 11rem;

  margin-left: 25vw;
`
const GraphicaLogo = styled.div`
  display: flex;
  align-items: center;
  padding-bottom: 4rem;
  font-family: 'Elianto';
  font-size: 44px;
  color: #FFF;
  text-shadow: 0 2px 5px rgba(0,0,0,0.75), 0 -1px 4px rgba(255,255,255,0.75);
  //text shadow is the same on search

`
const BottomText = styled.div`
  display: flex;
  width: 100%;
  margin-top: 6rem;
  padding: 2rem;
  color: #FFF;
  justify-content: space-between;
  font-family: 'Montserrat';
  font-size: 12px;
  font-weight: 600;

`
const FreeForever = styled.div`
`
const AboutUs = styled.div`
  a:link {
    color: white;
  }
  a:visited {
    color: white;
  }
  a:hover {
    color: lightgrey;
  }
  a:active {
    color: white;
  }
  cursor: pointer;
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

export default Home
