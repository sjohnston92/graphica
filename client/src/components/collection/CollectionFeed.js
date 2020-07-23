import React, { useState, useEffect} from 'react';
import axios from 'axios'
import CollectionCard from './CollectionCard'
import styled from 'styled-components';

const CollectionFeed = (props) => {

  
   return(
    <FeedDiv>
      <ColumnContainer>
        {props.pictures.map(picture => <CollectionCard picture={picture}/>)}
      </ColumnContainer>
    </FeedDiv>
  )

}

const FeedDiv = styled.div`
  display: flex;
  padding-right: 20px;
  padding-top: 20px;
  width: 75vw;
  margin: auto;
  min-width: 1000px;
`

const ColumnContainer = styled.div`
  margin-top: 20px;
  margin-left: 20px;
  width: calc(100% / 3);
  @media (max-width: 1600px) {};
  @media (max-width: 1100px) {}
  @media only screen and (max-width: 800px) {}
`

export default CollectionFeed