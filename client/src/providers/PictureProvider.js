import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PictureContext = React.createContext();

export const PictureConsumer = PictureContext.Consumer;

export const PictureProvider = (props) => {
  
  const [pictures, setPictures] = useState([]);
  const [query, setQuery ] = useState("");
  const [categoryId, setCategoryId] = useState(null);
  const [searching, setSearching ] = useState(false);

  const searchPictures = () => {
    return new Promise((resolve, reject) => {
      setSearching(true)
      // console.log("FIRED")
      // console.log(pictures.length)
      // console.log("query", query)
      axios.get(`/api/pictures/?search=${query}&limit=11&offset=${pictures.length}&category_id=${categoryId}`)
        .then(res => {
          setPictures(pictures.concat(res.data));
          setSearching(false);
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
      setSearching(true)
      console.log("FIRED")
      console.log(pictures.length)
      console.log("query", query)
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

  return(
    <PictureContext.Provider value={{
      pictures,
      searching,
      resetPictures,
      resetAndSearchPictures,
      setQuery,
      query,
      searchPictures,
      offset: pictures.length,
    }}> 
      { props.children }
    </PictureContext.Provider>     
  )
  
}

export default PictureProvider;