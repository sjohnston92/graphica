import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Modal from '../modal/Modal';
import useModal from '../../hooks/useModal';
import PictureShow from '../picture/PictureShow';
import defaultUserImage from '../../img/defaultUserImage.png'

const Card = ({ category_id, title, id, url, user_id, views, description}) => {
  const [user, setUser] = useState("");
  const { open, toggle } = useModal();
  const [userImage, setUserImage] = useState(defaultUserImage);


  useEffect(() => {
    axios.get(`/api/users/${user_id}`)
      .then( res => { 
          setUser(res.data)
          if (res.data.image) { console.log("data is there") } else { console.log("data is not there") }
          setUserImage(res.data.image)
        }) //this could be refactored into a Provider
      .catch(console.log)
  }, [])

  return (
    <CardBorder>
      <Modal onClose={toggle} open={open}>     
        <PictureShow user={user} user_id={user_id} category_id={category_id} title={title} id={id} url={url} description={description} views={views}/>     
      </Modal>       
      <CardDiv>
        <StyledImage src={url} onClick={toggle} />
        {/* <StyledImage src={defaultUserImage} onClick={toggle} /> */} 

      </CardDiv>
      <PointerOff>
        <CardFooterLeft>
          <img src={userImage} height="20"/>
          {user.first_name}
        </CardFooterLeft>
        <CardFooterRight>
          {views} views
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
`
const CardBorder = styled.div`
   margin-bottom: 10px
`
const CardFooterLeft = styled.div`
  float: left;
  margin-bottom: 15px;
  cursor: default;
  height: 100px;
`
const CardFooterRight = styled.div`
  float: right;
  margin-bottom: 15px;
  cursor: default;
`

export default Card