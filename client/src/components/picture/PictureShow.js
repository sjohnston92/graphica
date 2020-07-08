import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const PictureShow = (props) => {
  const id = props.id;
  const url = props.url;
  const user = props.user
  const description = props.description

  const [collectionPictures, setCollectionPictures] = useState([]);
  
  useEffect(() => {
    axios.get(`/api/collections/${id}/collection_pictures`)
      .then(res => {
        setCollectionPictures(res.data)
        console.log(collectionPictures)
      })
      .catch(err => {
        console.log(err)
      })
  }, [])
  return (
   <>
      <UserInfoDiv>
       
        {`User: ${user.first_name}`}
      </UserInfoDiv>
      <PictureDiv>
        
        <StyledImg src={url} />
      </PictureDiv>
      <PictureInfoDiv>
        Description of picture {description}
      </PictureInfoDiv>
      <PictureCollectionDiv>
        Hello Picture Collection 
      </PictureCollectionDiv>
      <PictureDescriptionDiv>
        Hello Picture Description
      </PictureDescriptionDiv>
      <CommentsDiv>
        Hello Comments
      </CommentsDiv>
   </>
  )
}

const UserInfoDiv = styled.div`

`
const PictureDiv = styled.div`

`
const StyledImg = styled.img`
  height: 300px;
`
const PictureInfoDiv = styled.div`

`
const PictureCollectionDiv = styled.div`

`
const PictureDescriptionDiv = styled.div`

`
const CommentsDiv = styled.div`

`

export default PictureShow







