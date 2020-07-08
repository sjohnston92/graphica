import React from 'react';
import styled from 'styled-components';
import Feed2 from '../home/Feed';

const UserInfo = () => (
  <AboutMe 
    type="textfield" 
    name="bioName" 
    placeholder="YOUR INFO HERE, HELLO From ABOUTME.JS"
  />
)
  // about me under profile picture
const AboutMe = styled.textarea`
  border: black;
  height: 15vh;
  width: 525px;
  box-sizing: border-box;
`

export default AboutMe;