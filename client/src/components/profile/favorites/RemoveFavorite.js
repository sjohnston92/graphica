import React from 'react';
import deleteImg from '../../../img/delete_24px.svg';
import styled from 'styled-components';
import axios from 'axios';
import { AuthConsumer } from '../../../providers/AuthProvider';

const RemoveFavorite = (props) => {

  const removeImage = () => {
    axios.delete(`/api/users/${props.fav.user_id}/favorites/${props.fav.id}`)
      .then(res => {
        props.updateFeed(props.fav.picture_id)
      })
      .catch(console.log)
  }

  return(
    <>
      { props.authenticated && props.user.id === props.fav.user_id &&
        <>
          <RemoveDiv image={deleteImg} onClick={removeImage}/> 
        </>
      }
    </>
  )
}

const RemoveDiv = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 100%;
  height: 20px;
  width: 20px;  
  cursor: pointer;
  margin-left: -20px;
`

const ConnectedRemoveFavorite = (props) => (
  <AuthConsumer>
    {(value) => <RemoveFavorite {...props} {...value} />}
  </AuthConsumer>
);
export default ConnectedRemoveFavorite