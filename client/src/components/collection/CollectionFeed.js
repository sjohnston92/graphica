import React, { useState, useEffect} from 'react';
import axios from 'axios'
import CollectionCard from './CollectionCard'

const CollectionFeed = () => {
  
  
  const [collections, setCollections] = useState([])
  
  useEffect(() => {
    axios.get(`/api/collections`)
    .then(res => setCollections(res.data))
    .catch(console.log)
  
  }, [])

  return(
    <>
      {collections.map(collection => <li><CollectionCard collection={collection}/></li>)}
    </>
  )

}

export default CollectionFeed