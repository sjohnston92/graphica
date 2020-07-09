import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PictureComments from './PictureComments'

const PictureShow = (props) => {
  const id = props.id;
  const url = props.url;
  const user = props.user;
  const description = props.description;
  const title = props.title;
  const catId = props.category_id
  const [catName, setCatName] = useState("");
  const [comments, setComments] = useState([]);
  
  useEffect(() => {
    axios.get(`/api/categories/${catId}`)
      .then(res => {
        setCatName(res.data.title)
      })
      .catch(console.log)
    axios.get(`/api/pictures/${id}/picture_comments`)
      .then(res => { setComments(res.data) })
      .catch(console.log)      
      
  }, [])

  return (
   <Wrapper>
      <UserInfoDiv>
        {`User: ${user.first_name}`}
      </UserInfoDiv>
      <PictureDiv>
        <StyledImg src={url} />
      </PictureDiv>
      <PictureInfoDiv>
        <InfoLeft>{title}</InfoLeft>
        <InfoRight>part of <a href="url">such and such</a> collection</InfoRight> 
      </PictureInfoDiv>
      <PictureCollectionDiv>
        Hello Picture Collection 
      </PictureCollectionDiv>
      <PictureDescriptionDiv>
        Description
        category {catName}
      </PictureDescriptionDiv>
        <Description>{description} </Description>
      <CommentsDiv>
        {comments.map((comment, index) => (
          <li>
            <PictureComments key={comment.id} {...comment}/>
          </li>
        ))}
      </CommentsDiv>
   </Wrapper>
  )
}
//Ready for some styling fail?

const Wrapper = styled.div`
  max-height: 500px;
`
const UserInfoDiv = styled.div`
`
const PictureDiv = styled.div`
  width: 50%;
  margin: auto;
`
const StyledImg = styled.img`
  height: 400px;
`
const PictureInfoDiv = styled.div`
  margin: 10px;
  height: 30px;
`
const InfoRight = styled.div`
  position: relative;  
  float: right;
  top: -17px;
`
const InfoLeft = styled.div`
  font-weight: bold;
  font-size: 24px;

`
const PictureCollectionDiv = styled.div`

`
const PictureDescriptionDiv = styled.div`
  font-weight: bold;
  font-size: 24px;
`
const Description = styled.div`

`
const CommentsDiv = styled.div`
  width: 300px
`

export default PictureShow







