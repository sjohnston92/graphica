import React, { useState, useEffect, useLayoutEffect } from 'react';
import Card from './Card';
import styled from 'styled-components';
import { FeedConsumer } from '../../providers/FeedProvider';
import useRenderColumns from '../../hooks/useRenderColumns';
import FeedColumns from '../feed/FeedColumns';

const Feed = (props) => {
  const [isFetching, setIsFetching] = useState(true);
  const { columnArrays, columnArrays2, renderColumns } = useRenderColumns();

  useEffect(() => {
    props.searchPictures()
  }, [])
  
  useEffect(() => {
    
    renderColumns(props.pictures)
  }, [props.pictures])
  
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
  return (
    <>
      <FeedColumns tag={Card} deletePicture={props.deletePicture} input={props.pictures} columnArrays={columnArrays} columnArrays2={columnArrays2}/>
      <NoContent>
        {isFetching && !props.noMorePictures ? '[ Loading.. ]' : (props.noMorePictures || props.querySearch.length > 0) &&
          <>[ No {props.pictures.length > 0 && "more"} pictures {props.querySearch.length > 0 && `found for: "${props.querySearch}"`}  ]</>
        }         
      </NoContent>
    </> 
  )
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

const ConnectedFeed = (props) => (
  <FeedConsumer>
    {(value) => <Feed {...props} {...value} />}
  </FeedConsumer>
);

export default ConnectedFeed;