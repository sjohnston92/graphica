import React, { useState, useEffect } from 'react'
import { CollectionConsumer } from '../../providers/CollectionProvider';
import { AuthConsumer } from '../../providers/AuthProvider';
import { ImageConsumer } from '../../providers/ImageProvider';

const AddToExisting = (props) => {

const [ collectionId, setCollectionId ] = useState()

  useEffect(() => {
    props.fetchCollections(props.user.id) 
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault()
    props.addImageToCollection(collectionId)
    props.toggleModal()
  }

  const handleChange = (event) => {
    setCollectionId(event.target.value)
  }
  
  return (
    <form onSubmit={handleSubmit} >
      <label>
        Collection: 
        <select
          type="select"
          name="collection"
          value={collectionId}
          onChange={handleChange}
          required
          
        >
          <option value="" disabled selected>Select your option</option>
          {/* <option value={HelloValue}>--Please Select--</option> */}
          { props.userCollections.map((collection) => (
            <option value={collection.id} >{collection.title}</option> 
          ))}
        </select>
      </label>
      <button>Add</button>
    </form>
  )

}



const ConnectedAddToExisting = (props) => (
  <CollectionConsumer>
    {(value) => <AddToExisting {...props} {...value} />}
  </CollectionConsumer>
);

const AuthConnectedAddToExisting = (props) => (
  <AuthConsumer>
    {(value) => <ConnectedAddToExisting {...props} {...value} />}
  </AuthConsumer>
);

const ImageAuthConnectedAddToExisting = (props) => (
  <ImageConsumer>
    {(value) => <AuthConnectedAddToExisting {...props} {...value} />}
  </ImageConsumer>
);


export default ImageAuthConnectedAddToExisting