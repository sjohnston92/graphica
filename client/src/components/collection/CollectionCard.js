import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const CollectionCard = (props) => {
  

  return(
    <Wrapper>
      <CardDiv>
        <CollectionImages image={props.picture.url}/>
      </CardDiv>
    </Wrapper>
  )
}

const Wrapper = styled.div`
`

const CollectionImages = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 20rem;
  height: 20rem;
  align-content: flex-start;
  float: left;
`

const CardDiv = styled.div`
  cursor: zoom-in;
  position: relative;
  display: inline-block;
` 


export default CollectionCard