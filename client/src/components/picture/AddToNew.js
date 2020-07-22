import React, { useState } from 'react'
import CollectionForm from '../collection/CollectionForm'
import { CollectionConsumer } from '../../providers/CollectionProvider'
import { ImageConsumer } from '../../providers/ImageProvider'


const AddToNew = (props) => {
  const handleRes = (collection) => {
    // props.createCollectionPicture(props.imageId, collection.id)
    props.addImageToCollection(collection.id)
    props.toggleModal()
    
  }

  return(
    <> 
      <CollectionForm handleRes={handleRes}/>
    </>
  )
}

const ConnectedAddToNew = (props) => ( //Dont need collection consumer
  <CollectionConsumer>
      {(value) => <AddToNew {...props} {...value} />}
  </CollectionConsumer>
)
const ImageConnectedAddToExisting = (props) => (
  <ImageConsumer>
    {(value) => <ConnectedAddToNew {...props} {...value} />}
  </ImageConsumer>
);

export default ImageConnectedAddToExisting
