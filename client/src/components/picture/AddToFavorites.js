import React from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';

const AddToFavorites = (props) => {

  return(
    <>
      {props.authenticated && 
        <button onClick={() => props.addToFavorites(props.user.id)}>Favorite Me</button>
      }
    </>
  )
}

const ConnectedAddToFavorites = (props) => (
  <AuthConsumer>
    {(value) => <AddToFavorites {...props} {...value} />}
  </AuthConsumer>
);

export default ConnectedAddToFavorites
