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
    // setNewItems([{id: 99}, {id: 999}, {id: 9999}, {id: 99999}])
  }
  function fetchMoreListItems() {
    // setTimeout(() => {
      // setListItems(prevState => ([...prevState, ...Array.from(Array(20).keys(), n => n + prevState.length + 1)]));
      
      setListItems(prevState => ([...prevState, ...newItems]))

      setIsFetching(false);
    // }, 2000);
  }

  return (
    <ColumnContainer>
    <ul>

      {listItems.map(listItem => <li>
        {/* {listItem.id} */}
      <Card {...listItem}/>
        </li>)}
      {isFetching && 'Fetching more list items...'}
    </ul>
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