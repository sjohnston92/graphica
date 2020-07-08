import React from 'react';
import styled from 'styled-components';
// import Feed2 from '../home/Feed';

const UserInfo = () => (
  <AboutMe 
    type="box" 
    name="bioName" 
    placeholder="Bio Here."
  />
)

  // about me under profile picture
const AboutMe = styled.textarea`
  border: black;
  height: 72px;
  width: 441px;
  box-sizing: border-box;
  margin-left: -15rem;
  margin-top: 17rem;
  box-sizing: content-box;
`

export default AboutMe;
