import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';
import Modal from '../modal/Modal';
import useModal from '../../hooks/useModal';
import PictureShow from '../picture/PictureShow';

const Card = ({ id, url, user_id, views, description, category_id}) => {
  const [user, setUser] = useState("");
  const { open, toggle } = useModal();
  useEffect(() => {
    axios.get(`/api/users/${user_id}`)
      .then( res => { setUser(res.data) })
  }, [])

  return (
    <CardBorder>
      <Modal onClose={toggle} open={open}>     
        <PictureShow user={user} id={id} url={url} description={description} />     
      </Modal>       
      <CardDiv>
        <StyledImage src={url} onClick={toggle} />
      </CardDiv>
      <PointerOff>
        <CardFooterLeft>
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
`
const CardFooterRight = styled.div`
  float: right;
  margin-bottom: 15px;
  cursor: default;
`

export default Card