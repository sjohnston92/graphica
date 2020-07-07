import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';


const Card = ({ id, url, user_id, views}) => {
  
  const [userId, setUserId] = useState("");
  const [show, setShow] = useState(false);
  
  const toggle = () => { setShow(!show) }
  const open = true

  useEffect(() => {
    axios.get(`/api/users/${user_id}`)
      .then( res => { setUserId(res.data) })
  }, [])

  return (
    <CardBoarder>
      <CardDiv>
        
        <StyledImage src={url} onClick={toggle} />
      </CardDiv>
      <PointerOff>

        <CardFooterLeft>
          {userId.first_name}
        </CardFooterLeft>
        <CardFooterRight>
          {views} views
        </CardFooterRight>
      </PointerOff>

    </CardBoarder>
  )
}

const StyledImage = styled.img`
  width: 100%
`

const CardDiv = styled.div`
  cursor: pointer;
  
`
const PointerOff = styled.div`
  width: 100%
  cursor: crosshair;
`

const CardBoarder = styled.div`
   margin-bottom: 10px

`
const CardFooterLeft = styled.div`
  float: left;
  margin-bottom: 15px;
  cursor: crosshair;
`
const CardFooterRight = styled.div`
  float: right;
  margin-bottom: 15px;
  cursor: crosshair;
`
export default Card