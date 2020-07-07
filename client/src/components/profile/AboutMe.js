import React from 'react';
import styled from 'styled-components';

const Userinfo = () => (

  <AboutMe type="textfield" name="bioName" placeholder="YOUR INFO HERE, HELLO From ABOUTME.JS"/>
  
  )





  // about me under profile picture

const AboutMe = styled.textarea`
border: black;

height: 15vh;

width: 525px;
box-sizing: border-box;
outline: none
`

export default AboutMe;