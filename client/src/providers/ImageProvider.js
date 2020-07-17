import React, { useState, useEffect } from 'react';
import axios from 'axios';


const ImageContext = React.createContext();

export const ImageConsumer = ImageContext.Consumer;

export const ImageProvider = (props) => {
  
  const [image, setImage] = useState([]);
  const [user, setUser] = useState("");
  const [userImage, setUserImage] = useState();


  const fetchUser = (userId) => {
    return new Promise((resolve, reject) => {
      axios.get(`/api/users/${userId}`)
        .then( res => { 
            resolve(res)
          }) 
        .catch((err) => {
          console.log(err);
          reject(err);
        })
    })
  }

  const fetchComments = (id) => {
    return new Promise((resolve, reject) => {
      axios.get(`/api/pictures/${id}/picture_comments`)
      .then( res => {
        resolve(res)
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      })
    })
  }

  const fetchImage = (id) => {
    return new Promise((resolve, reject) => {
      axios.get(`/api/pictures/${id}`)
      .then( res => {
        resolve(res)
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      })
    })
  }

  const fetchCategoryName = (catId) => {
    return new Promise((resolve, reject) => {
      axios.get(`/api/categories/${catId}`)
      .then( res => {
        resolve(res)
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      })
    })
  }

  const fetchJunction = (id) => {
    return new Promise((resolve, reject) => {
      axios.get(`/api/pictures/${id}/collection_pictures`)
      .then( res => {
        resolve(res)
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      })
    })
  }


  const fetchCollection = (collectionId, userId) => {
    return new Promise((resolve, reject) => {
      axios.get(`/api/users/${userId}/collections/${collectionId}`)     
        .then( res => {
        resolve(res)
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      })
    })  
  }

  return(
    <ImageContext.Provider value={{
      // imageUser,
      fetchUser,
      user,
      userImage,
      fetchComments,
      fetchImage,
      fetchCategoryName,
      fetchJunction,
      fetchCollection,
      // commentsLength,
      // pictures,
      // searching,
      // resetPictures,
      // resetAndSearchPictures,
      // setQuery,
      // query,
      // searchPictures,
      // offset: pictures.length,
    }}> 
      { props.children }
    </ImageContext.Provider>     
  )
  
}

export default ImageProvider;