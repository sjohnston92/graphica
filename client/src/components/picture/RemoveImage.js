import React from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import axios from 'axios';

const RemoveImage = (props) => {

  const removeImage = (incomingId) => {
    const result = window.confirm("Remove Image from Collection?")
    if (result) {
      axios.delete(`api/collection_pictures/${props.pictureCollection.id}`)
      .then( res => props.refreshJunctionState(incomingId) )
    }
  }

  return (
    <>  
      { props.authenicated && props.user.id === props.image.user_id &&
        <button onClick={() => removeImage(props.pictureCollection.id)}>Remove from this collection</button>
      }
    </>
  )
}
const ConnectedRemoveImage = (props) => (
  <AuthConsumer>
    {(auth) => <RemoveImage {...props} {...auth} />}
  </AuthConsumer>
);

export default ConnectedRemoveImage;