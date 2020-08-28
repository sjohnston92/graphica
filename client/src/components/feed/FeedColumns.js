import React from 'react';
import styled from 'styled-components';
import Card from '../home/Card';
import CollectionCard from '../collection/CollectionCard';

const FeedColumns = ({ tag, columnArrays, columnArrays2, input, ...props}) => (
  <>
    <FeedDiv>
      { columnArrays.map( column => (
        <ColumnContainer>
          {column.map(listItem => (
            <>
              {tag === Card && <Card key={listItem.id} image={listItem} updateFeedState={props.deletePicture}/>}
              {tag === CollectionCard && <CollectionCard key={listItem.id} picture={listItem} addPicture={props.addPicture} adding={props.adding} removing={props.removing} removeImage={props.removeImage} updateFeedState={props.updateFeedState}/>}
            </>
          ))}
        </ColumnContainer>
      ))}
    </FeedDiv>
    <FeedDiv2>
      { columnArrays2.map( column => (
        <ColumnContainer2>
          {column.map(listItem =>(
            <>
              {tag === Card && <Card key={listItem.id} image={listItem} updateFeedState={props.deletePicture}/>}
              {tag === CollectionCard && <CollectionCard key={listItem.id} picture={listItem} addPicture={props.addPicture} adding={props.adding} removing={props.removing} removeImage={props.removeImage} updateFeedState={props.updateFeedState}/>}
            </>
          ))}
        </ColumnContainer2>
      ))}
    </FeedDiv2>
    <FeedDiv1>
      <ColumnContainer1>
        {input.map(listItem => (
          <>
            {tag === Card && <Card key={listItem.id} image={listItem} updateFeedState={props.deletePicture}/>}
            {tag === CollectionCard && <CollectionCard key={listItem.id} picture={listItem} addPicture={props.addPicture} adding={props.adding} removing={props.removing} removeImage={props.removeImage} updateFeedState={props.updateFeedState}/>}
         </>
        ))}
      </ColumnContainer1>
    </FeedDiv1>
  </>
)

const FeedDiv = styled.div`
  display: flex;
  padding-right: 20px;
  padding-top: 20px;
  width: 75vw;
  margin: auto;
  min-width: 1000px;
  // max-width: 1500px;
  @media (max-width: 1000px) {
    display: none;
  };
`
const FeedDiv2 = styled.div`
  display: flex;
  padding-right: 20px;
  padding-top: 20px;
  width: 95vw;
  margin: auto;
  min-width: 700px;
  @media (max-width: 700px) {
    display: none;
  };
  @media (min-width: 1000px) {
    display: none;
  }
`
const FeedDiv1 = styled.div`
  display: flex;
  width: 95vw;
  margin: auto;
  min-width: 375px;
  @media only screen and (min-width: 700px) { 
    display: none;
  };
`
  const ColumnContainer = styled.div`
  margin-top: 25px;
  margin-left: 25px;
  width: calc(100% / 3);
`
const ColumnContainer2 = styled.div`
  margin-top: 25px;
  margin-left: 25px;
  width: calc(100% / 2);
`
const ColumnContainer1 = styled.div`
  margin-top: 25px;
  width: 100%;
`

export default FeedColumns