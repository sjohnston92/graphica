import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CollectionImage from './CollectionImage'

const PictureCollection = (props) => {
  const id = props.collectionId
  const [ picIds, setPicIds ] = useState([])
  
  // console.log(id)
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
          <CollectionImage toggle={props.toggle} picId={pic.picture_id} runFetch={props.runFetch} /> 
        </> 
      ))}
    </>
  )
}

export default PictureCollection

