import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CollectionCard = (props) => {
  const [collectionPictures, setCollectionPictures] = useState([])
  useEffect(() => {
    axios.get(`api/collections/${props.id}/collection_pictures`)
    .then(res => setCollectionPictures(res.data))
    .catch(console.log)
  
  }, [])

  return(
    <>
      {props.collection.title}
      {/* {collectionPictures.map(collectionPicture => <li>{collectionPicture.picture_id}</li>)} */}
    </>
  )
}


export default CollectionCard