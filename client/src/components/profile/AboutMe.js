import React from 'react';
import styled from 'styled-components';

const UserInfo = () => (
  <AboutMe 
    type="box" 
    name="bioName" 
    placeholder="Bio Here."
  />
)

const UserName = () => (
  <Name
    type="textfield"
    name="personName"
    placeholder="YOUR NAME HERE"
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

const Name = styled.textarea`
border: black;
height: 29px;
box-sizing: border-box;
`


export default AboutMe;
