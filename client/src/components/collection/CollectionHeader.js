import React, {useState, useEffect}  from 'react';
import styled from 'styled-components';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Redirect } from 'react-router-dom';
import axios from "axios";

//get collection / user id / user tagline 

const CollectionHeader = (props) => {
  
  return(
    <Wrapper>
      <p>{props.collection.title}</p>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  height: 50px;
  border: solid black 3px;
`

export default CollectionHeader;