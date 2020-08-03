import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Favorite from './Favorite';

const Favorites = (props) => {
  const [ favorites, setFavorites ] = useState([]);

  useEffect(() => {
    axios.get(`/api/users/${props.user.id}/favorites`)
      .then( res => setFavorites(res.data) )
        
 
      
      .catch(console.log)
  }, [])

  console.log(favorites)
  return (
    <>
      {favorites.map(fav => (
        
        <Favorite fav={fav}/>
      )
      )}
    </>
  )

}

export default Favorites