import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import FavoritesCard from './FavoritesCard';

const Favorites = (props) => {
  const [ favorites, setFavorites ] = useState([]);

  useEffect(() => {
    axios.get(`/api/users/${props.user.id}/favorites`)
      .then( res => setFavorites(res.data) )
      .catch(console.log)
  }, [])

  const updateFeed = (incomingId) => {
    console.log(incomingId)
    setFavorites( favorites.filter( a => a.picture_id !== incomingId ))
  }
  
  return (
    <FeedDiv>
      { favorites.map(fav => (
        <FavoritesCard favorites={favorites} updateFeed={updateFeed} fav={fav}/>
      ))}
    </FeedDiv>
  )

}
const FeedDiv = styled.div`
  width: 75vw;
  min-width: 1000px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 5rem;
  align-items: center;
`
export default Favorites