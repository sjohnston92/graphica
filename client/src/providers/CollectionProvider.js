import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CollectionContext = React.createContext();

export const CollectionConsumer = CollectionContext.Consumer;

export const CollectionProvider = (props) => {
  const [ userCollections, setUserCollections ] = useState([{title: 'there are none'}])

  const fetchCollections = (userId) => {
    axios.get(`/api/users/${userId}/collections`)
    .then( res => (setUserCollections(res.data)) )
    .catch(console.log)

  }

  const createCollectionPicture = (imageId, collectionId) => {
    axios.post(`/api/collection_pictures`, {picture_id: imageId, collection_id: collectionId})
    .then(res => {
      console.log("newCollectionPicture: ", res.data)
      // props.refreshCollectionState(res.data)
      // setToggleForm(!toggleForm)
    })
    .catch(console.log)
  }

  const addCollection = (collection) => {
    setUserCollections(userCollections.concat(collection))
  }

  return(
    <CollectionContext.Provider value={{
      userCollections,
      setUserCollections,
      fetchCollections,
      createCollectionPicture,
    }}> 
      { props.children }
    </CollectionContext.Provider>     
  )
  
}

export default CollectionProvider;