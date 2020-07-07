import React, { useState, useEffect } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Card = ({ id, url, user_id, views}) => {

  const [userId, setUserId] = useState("");

  useEffect(() => {

    axios.get(`/api/users/${user_id}`)
      .then( res => {
        setUserId(res.data)
        // console.log(res.data)
      })
  }, [])
// console.log(userId)
  // console.log(userId)
  return (
  <CardBoarder>
    <CardDiv>
      
      <StyledImage src={url} />
      <CardFooterLeft>
        {userId.first_name}
      </CardFooterLeft>
      <CardFooterRight>
        {views} views
      </CardFooterRight>
    </CardDiv>

  </CardBoarder>
    
    )

}

const StyledImage = styled.img`
  width: 100%
`

const CardDiv = styled.div`

}
`
const CardBoarder = styled.div`
padding-bottom: 10%;
box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
&:hover {
  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);
`

const CardFooterLeft = styled.div`
float: left;
margin-bottom: 15px;

`
const CardFooterRight = styled.div`
float: right;
margin-bottom: 15px;
`


export default Card