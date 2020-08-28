import React, { useState, useEffect, useLayoutEffect } from 'react';
import Card from './Card';
import styled from 'styled-components';
import { FeedConsumer } from '../../providers/FeedProvider';
import useRenderColumns from '../../hooks/useRenderColumns';

const Feed = (props) => {
  const [isFetching, setIsFetching] = useState(true);
  const { columnArrays, columnArrays2, renderColumns } = useRenderColumns();

  useEffect(() => {
    props.searchPictures()
  }, [])
  
  
  // let columnCount = (window.innerWidth > 1000) ? 3 : (window.innerWidth < 650) ? 1 : 2

  // function useWindowSize() {
  //   const [size, setSize] = useState([0, 0]);
  //   useLayoutEffect(() => {
  //     function updateSize() {
  //       setSize([window.innerWidth, window.innerHeight]);
  //     }
  //     window.addEventListener('resize', updateSize);
  //     updateSize();
  //     return () => window.removeEventListener('resize', updateSize);
  //   }, []);
  //   console.log(size[0])
  //   if (size[0] < 650) {
  //     columnCount = 1
  //   } else if (size[0] > 1000){
  //     columnCount = 3
  //   } else columnCount = 2
  // }
  // useWindowSize()
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
  // console.log(columnArrays2)
  return (
    <>
      <FeedDiv>
        { columnArrays.map( column => (
          <ColumnContainer>
            {column.map(listItem =><><Card key={listItem.id} image={listItem} updateFeedState={props.deletePicture}/></>)}
          </ColumnContainer>
        ))}
      </FeedDiv>
      <FeedDiv2>
        { columnArrays2.map( column => (
          <ColumnContainer2>
            {column.map(listItem =><><Card key={listItem.id} image={listItem} updateFeedState={props.deletePicture}/></>)}
          </ColumnContainer2>
        ))}
      </FeedDiv2>
      <FeedDiv1>
          <ColumnContainer1>
            {props.pictures.map(listItem =><><Card key={listItem.id} image={listItem} updateFeedState={props.deletePicture}/></>)}
          </ColumnContainer1>
      </FeedDiv1>
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

const ConnectedFeed = (props) => (
  <FeedConsumer>
    {(value) => <Feed {...props} {...value} />}
  </FeedConsumer>
);

export default ConnectedFeed;