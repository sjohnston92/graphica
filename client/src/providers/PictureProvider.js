import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PictureContext = React.createContext();

export const PictureConsumer = PictureContext.Consumer;

export const PictureProvider = (props) => {
  
  const [pictures, setPictures] = useState("HELLO PICTURE PROVIDER");
    // console.log(pictures)
  useEffect(() => {
    axios.get("/api/pictures")
      .then( res => {
        setPictures(res.data)
      })
      .catch( err => {
        console.log(err)
      })
    
  }, [])

  // console.log(pictures)
  return(
    <PictureContext.Provider value={{pictures: pictures}}> 
      { props.children }
    </PictureContext.Provider>     
  )
  
}

export default PictureProvider;