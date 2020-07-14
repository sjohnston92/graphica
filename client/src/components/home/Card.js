import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Modal from '../modal/Modal';
import useModal from '../../hooks/useModal';
import PictureShow from '../picture/PictureShow';
import defaultUserImage from '../../img/defaultUserImage.png'
import commentsImage from '../../img/comments.png'
import viewsImage from '../../img/views.png'

const Card = ({ category_id, title, id, url, user_id, views, description}) => {
  const [user, setUser] = useState("");
  const { open, toggle } = useModal();
  const [userImage, setUserImage] = useState(defaultUserImage);
  const [comments, setComments] = useState(0)

  useEffect(() => {
    axios.get(`/api/users/${user_id}`)
      .then( res => { 
          setUser(res.data)
          setUserImage(res.data.image)
        }) //this could be refactored into a Provider
      .catch(console.log)
    axios.get(`/api/pictures/${id}/picture_comments`)
      .then( res => {
        if (res) {setComments(res.data.length)} else null
        
      .catch(console.log)
      })
  }, [])

  return (
    <CardBorder>
      <Modal onClose={toggle} open={open}>     
        <PictureShow user={user} user_id={user_id} category_id={category_id} title={title} id={id} url={url} description={description} views={views}/>     
      </Modal>       
      <CardDiv>
        <StyledImage src={url} onClick={toggle} />
      </CardDiv>
      <PointerOff>
        <CardFooterLeft>
          <SmallImage image={userImage}/>
          {user.first_name}
        </CardFooterLeft>
        <CardFooterRight>
          <SmallImage image={commentsImage} />
          {comments}
          <SmallImage image={viewsImage} />
          {views} 
        </CardFooterRight>
      </PointerOff>
    </CardBorder>
  )
}

const StyledImage = styled.img`
  width: 100%
`
const CardDiv = styled.div`
  cursor: zoom-in;
`
const PointerOff = styled.div`
  width: 100%
  cursor: default;
  font-family: 'Montserrat', sans-serif;
`
const CardBorder = styled.div`

  margin-bottom: -40px;
   

`
const CardFooterLeft = styled.div`
  float: left;
  margin-bottom: 15px;
  cursor: default;
  display: flex;
  align-items: center;
`
const SmallImage = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 100%;
  height: 20px;
  width: 20px;
`
const CardFooterRight = styled.div`
  display: flex;  
  float: right;
  margin-bottom: 15px;
  cursor: default;
  color: #96969C
`

export default Card