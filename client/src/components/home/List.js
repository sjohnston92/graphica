import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import styled from 'styled-components';

const List = (props) => {
  const [listItems, setListItems] = useState(props.pictures || []);
  const [isFetching, setIsFetching] = useState(false);
  const [noMorePictures, setNoMorePictures] = useState(false);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  useEffect(() => {
    console.log("items: " + listItems.length)
  }, [listItems])

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
    axios.get(`/api/pictures/?limit=6&offset=${listItems.length}`)
      .then( res => {
        if(res.data.length < 6) setNoMorePictures(true);
        setListItems(listItems.concat(res.data))
        setIsFetching(false);
      })
      .catch(console.log)
  }

  const renderColumns = () => {
    const column_arrays = [[], [], []];
    let iterator = 0;

    listItems.forEach((listItem) => {
      column_arrays[iterator].push(listItem);
      if(iterator == 2) iterator = 0;
      else iterator ++;
    })

    return (
      <>
        <Feed>
          <ColumnContainer>
            {column_arrays[0].map(listItem =><><Card {...listItem}/></>)}
          </ColumnContainer>
          <ColumnContainer>
            {column_arrays[1].map(listItem =><><Card {...listItem}/></>)}
          </ColumnContainer>
          <ColumnContainer>
            {column_arrays[2].map(listItem =><><Card {...listItem}/></>)}
          </ColumnContainer>
        </Feed>
        {noMorePictures && 'No more pictures'}
        {isFetching && !noMorePictures && 'Loading..'}
      </>
    )
  }

  return renderColumns();
};

const Feed = styled.div`
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

export default List;