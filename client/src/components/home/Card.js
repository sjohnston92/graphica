import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Modal from '../modal/Modal';
import useModal from '../../hooks/useModal';
import PictureShow from '../picture/PictureShow';
import defaultUserImage from '../../img/defaultUserImage.png'
import commentsImage from '../../img/comments.png'
import viewsImage from '../../img/views.png'
import { ImageConsumer } from '../../providers/ImageProvider'

// const Card = ( { category_id, title, id, url, user_id, views, description, fetchUser, user, userImage }, ) => {
const Card = (props) => {

  const { open, toggle } = useModal();
  // const [commentsLength, setComments] = useState(0)
  const [firstPic, setFirstPic] = useState(true)
  const [nextPic, setNextPic ] = useState([])
  const id = props.image.id
  // const user = props.user
  const user_id = props.image.user_id
  const category_id = props.image.category_id
  const title = props.image.title
  const url = props.image.url
  const description = props.image.description
  const views = props.image.views
  // const userImage = props.userImage
  // const commentsLength = props.commentsLength

  const [user, setUser] = useState("");
  const [userImage, setUserImage] = useState();
  const [comments, setComments] = useState([]);
  

  useEffect(() => {
    props.fetchUser(user_id)
      .then (res => {
        setUser(res.data)
        setUserImage(res.data.image)
      })
      .catch(console.log)

    props.fetchComments(id)
      .then(res => {
        setComments(res.data)
      })
      .catch(console.log)

  }, [])


  // const switchPicture = (incomingPic, incomingComments) => {
  //   setFirstPic(false)
  //   setNextPic(incomingPic)
    // props.fetchUser(incomingPic.user_id)
        
      
  
 //Change back to first pic on close
  return (
    <CardBorder>
      <Modal onClose={toggle} open={open}>     
        
          <PictureShow 
            toggle={toggle}
            user={user}
            user_id={user_id} 
            category_id={category_id} 
            title={title} 
            id={id} 
            url={url} 
            description={description} 
            views={views}
            // comments={comments}
          />    
        
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
          {comments.length}
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

const ConnectedCard = (props) => (
  <ImageConsumer>
    {(value) => <Card {...props} {...value} />}
  </ImageConsumer>
);

export default ConnectedCard;