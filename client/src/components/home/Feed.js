import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import styled from 'styled-components';
import { PictureConsumer } from '../../providers/PictureProvider'
import PictureShow from '../picture/PictureShow';

const Feed = (props) => {
  const [listItems, setListItems] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [noMorePictures, setNoMorePictures] = useState(false);
  
  useEffect(() => {
    props.searchPictures();
    //   .then((pictures) => setListItems(pictures))
    //   .catch(console.log)
    // axios.get("/api/pictures/?limit=9")
    //   .then( res => setListItems(res.data))
    //   .catch(console.log)
  }, [])

  // useEffect(() => {
  //   if (props.searching) {
  //     setListItems(props.pictures)
  //     setNoMorePictures(true)
  //   } 
  // })

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
    if(noMorePictures) return;
    props.searchPictures()
      .then((pictures) => {
        if(pictures.length < 6) setNoMorePictures(true);
        setIsFetching(false);
      })
      .catch(console.log)
    // axios.get(`/api/pictures/?limit=6&offset=${listItems.length}`)
    //   .then( res => {
    //     setListItems(listItems.concat(res.data))
    //   })
    //   .catch(console.log)
  }

  const renderColumns = () => {
    const column_arrays = [[], [], []];
    let iterator = 0;

    props.pictures.forEach((listItem) => {
      column_arrays[iterator].push(listItem);
      if(iterator == 2) iterator = 0;
      else iterator ++;
    })
  
    return (
      <>
        { props.searching ? "Searching" : "Not Searching" }
 
        <FeedDiv>
          <ColumnContainer>
            {column_arrays[0].map(listItem =><><Card image={listItem}/></>)}
          </ColumnContainer>
          <ColumnContainer>
            {column_arrays[1].map(listItem =><><Card image={listItem}/></>)}
          </ColumnContainer>
          <ColumnContainer>
            {column_arrays[2].map(listItem =><><Card image={listItem}/></>)}
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
  <PictureConsumer>
    {(value) => <Feed {...props} {...value} />}
  </PictureConsumer>
);

export default ConnectedFeed;

