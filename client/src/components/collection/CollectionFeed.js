import React, { useState, useEffect} from 'react';
import axios from 'axios'
import CollectionCard from './CollectionCard'
import styled from 'styled-components';


const CollectionFeed = (props) => {
  
  const updateFeedState = (incomingId) => {
    props.deletePicture(incomingId)
  }


  const renderColumns = () => {
    const column_arrays = [[], [], []];
    let iterator = 0;

    props.pictures.forEach((listItem) => {
      column_arrays[iterator].push(listItem);
      if(iterator == 2) iterator = 0;
      else iterator ++;
    })
  
    return(
      <>
        <FeedDiv>
          <ColumnContainer>
            {column_arrays[0].map(listItem =><><CollectionCard key={listItem.id} picture={listItem} updateFeedState={updateFeedState}/></>)}
          </ColumnContainer>
          <ColumnContainer>
            {column_arrays[1].map(listItem =><><CollectionCard key={listItem.id} picture={listItem} updateFeedState={updateFeedState}/></>)}
          </ColumnContainer>
          <ColumnContainer>
            {column_arrays[2].map(listItem =><><CollectionCard key={listItem.id} picture={listItem} updateFeedState={updateFeedState}/></>)}
          </ColumnContainer>
        </FeedDiv>
    
      </>
    )
      
  }

  return renderColumns();

};



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
