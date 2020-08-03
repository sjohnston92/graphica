import React, { useEffect, useState } from 'react';
import { FavConsumer } from '../../providers/FavProvider';
import { AuthConsumer } from '../../providers/AuthProvider';

const AddToFavorites = (props) => {
  const [ isFavorite, setIsFavorite ] = useState(false)
  useEffect(() => {
      //get all favorites by user
      //check to see if this pictures is one of those favorites
    console.log("favorites", props.favorites)
    console.log("image id", props.image.id)
    props.favorites.map( favorite => {
      if (favorite.picture_id === props.image.id) {
        setIsFavorite(true)
      }
    })
  }, [props.image])
  // }, [props.image], [props.favorites]) //need to add to favorites in Fav Provider so this will change


  return(
    <>
      {props.authenticated && 
        <button onClick={() => props.addToFavorites(props.user.id)}>{isFavorite ? <> Favorited </>: <>Favorite Me</> } </button>
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
