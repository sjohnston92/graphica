import React, { useEffect, useState } from 'react';
import { FavConsumer } from '../../providers/FavProvider';
import { AuthConsumer } from '../../providers/AuthProvider';
import starOutlineIcon from '../../img/star_outline_24px.svg'
import starFillIcon from '../../img/star_rate_24px.svg'
import styled from 'styled-components';

const AddToFavorites = (props) => {
  const [ favId, setFavId ] = useState(null)
  const [ starColor, setStarColor] = useState("10000%") 

  useEffect(() => {
    setFavId(null)
    props.favorites.map( favorite => {
      if (favorite.picture_id === props.image.id) {
        setFavId(favorite.id)
        
      }
    })
  }, [props.favorites, props.image]) 

  useEffect(() => {

    if (favId) setStarColor("10000%");
    else setStarColor("10%");

  }, [favId])

  const handleClick = () => {
    props.toggleFavorite(props.user.id, favId, props.image.id)
  }
  return(
    <>
      {props.authenticated && 
        <>
          { favId 
            ? <Icon color="#0099BA" src={starOutlineIcon} onClick={handleClick}/>
            : <Icon color="none" src={starOutlineIcon} onClick={handleClick}/>
          }
        </>
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

const Icon = styled.img`
  border: 2.5px solid rgb(39, 39, 53);
  background-color: ${props => props.color};
  box-sizing: border-box;
  border-radius: 4px;
  height: 2.25rem;
  filter: opacity(75%);
  cursor: pointer;
  box-shadow: 0 2px 5px rgba(0,0,0,0.75), 0 -1px 4px rgba(255,255,255,0.75), inset 0 2px 5px rgba(0,0,0,0.75), inset 0 -1px 4px rgba(255,255,255,0.75);
  // box-shadow: inset 0 2px 5px rgba(0,0,0,0.75), 0 -1px 4px rgba(255,255,255,0.75);
`

// filter: brightness(18%) hue-rotate(240deg) saturate(15%) opacity(75%);
