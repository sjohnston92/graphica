import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Card from './Card';
import styled from 'styled-components';


// these two lines in Feed
// axios.get("/api/pictures/?limit=3&offset=0")
// <> <List pictures={pictures} /> </>


const List = (props) => {
  // const [listItems, setListItems] = useState(Array.from(Array(30).keys(), n => n + 1));
  const [listItems, setListItems] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [newItems, setNewItems] = useState([]);
  
  useEffect(() => {
    setListItems(props.pictures)
  }, [props.pictures])
  console.log(listItems)

  // useEffect(() => {
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);
  useEffect(() => {
    window.addEventListener('scroll', debounce(handleScroll, 500));
    return () => window.removeEventListener('scroll', debounce(handleScroll, 500));
    }, []);
  useEffect(() => {
    if (!isFetching) return;
    fetchMoreListItems();
    getMore()
  }, [isFetching]);
  function handleScroll() {
    if (window.innerHeight + document.documentElement.scrollTop !== document.documentElement.offsetHeight ) return;
    //Less than works here in stead of not equal to.. WHY?
    // if (window.innerHeight + document.documentElement.scrollTop < document.documentElement.offsetHeight) return; 
    // if (window.innerHeight + document.documentElement.scrollTop == document.documentElement.offsetHeight ) return;

    setIsFetching(true);
  }
  const debounce = (func, delay) => {
    let inDebounce;
    return function() {
    clearTimeout(inDebounce);
    inDebounce = setTimeout(() => {
    func.apply(this, arguments);
    }, delay);
    }
  }
  function getMore() {
    const offset = listItems.length
    axios.get(`/api/pictures/?limit=8&offset=${offset}`)
      .then( res => {
        setNewItems(res.data)
        //fetchMoreListItems should be in here? ###
      })
      .catch( err => {
        console.log(err)
      })
  }
  function fetchMoreListItems() {
      setListItems(prevState => ([...prevState, ...newItems]))
      setIsFetching(false);
  }

  return (
    <ColumnContainer>
      {listItems.map(listItem =><><Card {...listItem}/></>)}
      {isFetching && 'Fetching more list items...'}
    </ColumnContainer>
  );
};
const ColumnContainer = styled.div`
  column-count: 4;
  margin: 30px;
  @media (max-width: 1600px) {column-count: 3};
  @media (max-width: 1100px) {
    column-count: 2;
  }
  @media only screen and (max-width: 800px) {
    column-count: 1;
  }
`

export default List;