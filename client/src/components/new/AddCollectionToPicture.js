import React, {useState, useEffect} from 'react';
import axios from 'axios';
import styled from "styled-components";

const AddCollectionToPicture = () => {

  const [ collections, setCollections ] = useState([])
  const [ collection, setCollection ] = useState({})
  
  useEffect(() => {

    axios.get(`/api/collections`)
      // .then( res => (console.log(res.data)))
      .then( res => (setCollections(res.data)))

      .catch(console.log)
      
  }, [])

  
    const handleChange = (event) => {
      setCollection(event.target.value)
    }
    

  return (
    <PictureCollectionForm>
      <lable>
              Collection: 
            <select
              type="select"
              name="collection"
              value={collection}
              onChange={handleChange}
              required
            >
              { collections.map((collection) => {
                return (
                <option value={collection.id} >{collection.title}</option>
                )
              }) }
            </select>
            </lable>
    </PictureCollectionForm>
  )
}

const PictureCollectionForm = styled.form`
  display: flex;
  flex-direction: column;
`

export default AddCollectionToPicture