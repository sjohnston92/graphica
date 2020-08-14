import React, { useState, useEffect } from 'react';
import Card from './Card';
import styled from 'styled-components';
import { FeedConsumer } from '../../providers/FeedProvider'

const Feed = (props) => {
  const [isFetching, setIsFetching] = useState(false);
  
  useEffect(() => {
    props.searchPictures();
  }, [])

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!isFetching) return;
    getMore();
  }, [isFetching]);
  
  function handleScroll() {
    if ((window.innerHeight + window.pageYOffset) >= document.body.scrollHeight - 1000) {
      setIsFetching(true);
    }
  }
  
  function getMore() {
    if(props.noMorePictures){
      setIsFetching(false)
    } else {
      props.searchPictures()
        .then(res => {
          setIsFetching(false);
        })
        .catch(console.log)
    }
  }

  const renderColumns = () => {
    const column_arrays = [[], [], []];
    let iterator = 0;

    props.pictures.forEach((listItem) => {
      column_arrays[iterator].push(listItem);
      if(iterator == 2) iterator = 0;
      else iterator ++;
    })
  
  const updateFeedState = (incomingId) => {
    props.deletePicture(incomingId)
  }
    return (
      <>
        <FeedDiv>
          <ColumnContainer>
            {column_arrays[0].map(listItem =><><Card key={listItem.id} image={listItem} updateFeedState={updateFeedState}/></>)}
          </ColumnContainer>
          <ColumnContainer>
            {column_arrays[1].map(listItem =><><Card key={listItem.id} image={listItem} updateFeedState={updateFeedState}/></>)}
          </ColumnContainer>
          <ColumnContainer>
            {column_arrays[2].map(listItem =><><Card key={listItem.id} image={listItem} updateFeedState={updateFeedState}/></>)}
          </ColumnContainer>
        </FeedDiv>
        {props.noMorePictures && <NoContent> [ No {props.pictures.length > 0 && "more"} pictures {props.query.length > 1 && `found for: "${props.query}"`}  ]</NoContent>}
        {isFetching && !props.noMorePictures && 'Loading..'}
      </>
    )
  }

  return renderColumns();
};

const NoContent = styled.div`
  display: flex;  
  width: 100vw;
  justify-content: center;
  padding: 2rem;
  font-weight: 600;
  font-size: 16px;
  color: grey;
`
const FeedDiv = styled.div`
  display: flex;
  padding-right: 20px;
  padding-top: 20px;
  width: 75vw;
  margin: auto;
  min-width: 1000px;
`
const ColumnContainer = styled.div`
  margin-top: 25px;
  margin-left: 25px;
  width: calc(100% / 3);
  @media (max-width: 1600px) {};
  @media (max-width: 1100px) {}
  @media only screen and (max-width: 800px) {}
`

const ConnectedFeed = (props) => (
  <FeedConsumer>
    {(value) => <Feed {...props} {...value} />}
  </FeedConsumer>
);

export default ConnectedFeed;

