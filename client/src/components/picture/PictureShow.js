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

  const [catName, setCatName] = useState("Loading Category Name..")
  const [commentsState, setCommentsState] = useState([])


  // const [collectionPictures, setCollectionPictures] = useState([]);
  
  useEffect(() => {
    // axios.get(`/api/collections/${id}/collection_pictures`)
    //   .then(res => {
    //     setCollectionPictures(res.data)
    //   })
    //   .catch(console.log)
    axios.get(`/api/categories/${catId}`)
      .then(res => {
        setCatName(res.data.title)
      })
      .catch(console.log)
    axios.get(`/api/pictures/${id}/picture_comments`)
      .then(res => {
        console.log(res.data[1])
        setCommentsState(res.data)
        

      })
      .catch(console.log)      
      
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
        Title of Picture: {title}
      </PictureInfoDiv>
      <PictureCollectionDiv>
        Hello Picture Collection 
      </PictureCollectionDiv>
      <PictureDescriptionDiv>
        Description of picture {description}
        This picture is in category #{catId} {catName}
      </PictureDescriptionDiv>
      <CommentsDiv>
        <PictureComments commentsState={commentsState}/>
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







