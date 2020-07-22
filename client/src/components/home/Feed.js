import React, { useState, useEffect } from 'react';
import Card from './Card';
import styled from 'styled-components';
import { FeedConsumer } from '../../providers/FeedProvider'

const Feed = (props) => {
  const [listItems, setListItems] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [noMorePictures, setNoMorePictures] = useState(false);
  
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
      // console.log(isFetching)
      
    }
  }
  
  function getMore() {
    // console.log("getMOREfired")
    if(noMorePictures) return;
    props.searchPictures()
      .then((pictures) => {
        if(pictures.length < 11) setNoMorePictures(true);
        setIsFetching(false);
      })
      .catch(console.log)
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
        {/* { props.searching ? "Searching" : "Not Searching" } */}
 
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
        {noMorePictures && 'No more pictures'}
        {isFetching && !noMorePictures && 'Loading..'}
      </>
    )
  }

  return renderColumns();
};

const SearchResults = styled.div`

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
  margin-top: 20px;
  margin-left: 20px;
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

