import React, { useState } from 'react';
import axios from 'axios';

const FeedContext = React.createContext();

export const FeedConsumer = FeedContext.Consumer;

export const FeedProvider = (props) => {
  const [pictures, setPictures] = useState([]);
  const [query, setQuery ] = useState("");
  const [categoryId, setCategoryId] = useState(null);
  const [searching, setSearching ] = useState(false);
  const [noMorePictures, setNoMorePictures] = useState(false);

  const categorySearch = (catId) => {
    setSearching(true)
    setNoMorePictures(false)
    axios.get(`/api/pictures/?search=${query}&limit=11&offset=${0}&category_id=${catId}`)
      .then(res => {
        setPictures(res.data);
        setSearching(false);
        setCategoryId(catId)
      })
      .catch(console.log)
  }

  const searchPictures = () => {
    return new Promise((resolve, reject) => {
      setCategoryId(null)
      setSearching(true)
        axios.get(`/api/pictures/?search=${query}&limit=11&offset=${pictures.length}&category_id=${categoryId}`)
          .then(res => {
            console.log(res.data);
            setPictures(pictures.concat(res.data));
            setSearching(false);
            if (res.data.length < 11) setNoMorePictures(true)
            resolve(res.data);
          })
          .catch((err) => {
            console.log(err);
            reject(err);
          })
    })
  }

  const resetAndSearchPictures = () => {
    return new Promise((resolve, reject) => {
      setNoMorePictures(false)
      setCategoryId(null)
      setSearching(true)
      axios.get(`/api/pictures/?search=${query}&limit=11&offset=${0}&category_id=${categoryId}`)
        .then(res => {
          setPictures(res.data);
          setSearching(false);
          resolve(res.data);
        })
        .catch((err) => {
          console.log(err);
          reject(err);
        })
    })
  }

  const resetPictures = () => setPictures([]);

  const deletePicture = (incomingId) => setPictures( pictures.filter(a => a.id !== incomingId ))

  return(
    <FeedContext.Provider value={{
      pictures,
      searching,
      resetPictures,
      resetAndSearchPictures,
      setQuery,
      setCategoryId,
      categoryId,
      categorySearch,
      query,
      searchPictures,
      offset: pictures.length,
      deletePicture,
      noMorePictures,
      setNoMorePictures,
    }}> 
      { props.children }
    </FeedContext.Provider>     
  )
}

export default FeedProvider;