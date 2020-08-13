import React, { useEffect, useState } from 'react';
import { FavConsumer } from '../../providers/FavProvider';
import { AuthConsumer } from '../../providers/AuthProvider';

const AddToFavorites = (props) => {
  const [ favId, setFavId ] = useState(null)
  
  useEffect(() => {
    setFavId(null)
    props.favorites.map( favorite => {
      if (favorite.picture_id === props.image.id) {
        setFavId(favorite.id)
      }
    })
  }, [props.favorites, props.image]) 

  return(
    <>
      {props.authenticated && 
        <button onClick={() => props.toggleFavorite(props.user.id, favId, props.image.id)}>{favId ? <> Favorited(click to remove) </>: <>Favorite Me</> } </button>
      }
    </>
  )
}

const ConnectedAddToFavorites = (props) => (
  <FavConsumer>
    {(value) => <AddToFavorites {...props} {...value} />}
  </FavConsumer>
);
const AuthConnectedAddToFavorites = (props) => (
  <AuthConsumer>
    {(value) => <ConnectedAddToFavorites {...props} {...value} />}
  </AuthConsumer>
);
export default AuthConnectedAddToFavorites
