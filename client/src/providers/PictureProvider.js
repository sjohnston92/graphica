import React, { useState, useEffect } from 'react';
import axios from 'axios';

const PictureContext = React.createContext();

export const PictureConsumer = PictureContext.Consumer;

const PictureProvider = () => {
  
  const [pictures, setPictures] = useState([]);
console.log(pictures)
  useEffect(() => {
    axios.get("/api/pictures")
      .then( res => {
        setPictures(res.data)
      })
      .catch( err => {
        console.log(err)
      })
    
  }, [])

  
  return(
    <PictureContext.Provider value={{...pictures}}> 
      { this.props.children }
    </PictureContext.Provider>     
  )
  
}

export default PictureProvider