import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CollectionImage from './CollectionImage'

const PictureCollection = (props) => {
  const id = props.collectionId
  const [ picIds, setPicIds ] = useState([])
  
  useEffect(() => {
    axios.get(`/api/collections/${id}/collection_pictures`)
      .then(res => {
        setPicIds(res.data)
      })
      .catch(console.log)
  }, [])

  return (
    <>
      {picIds.map(pic => (
        <>
          <CollectionImage picId={pic.picture_id}/> 
        </> 
      ))}
    </>
  )
}

export default PictureCollection

