import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Comments from './comments/Comments'

import PictureCollection from './PictureCollection';
import { ImageConsumer } from '../../providers/ImageProvider'

const PictureShow = (props) => {
  const pictureId = props.imageId
  const [user, setUser ] = useState([]) 
  const [catName, setCatName] = useState("");
  const [comments, setComments] = useState([]);
  const [collectionName, setCollectionName ] = useState();
  const [collectionId, setCollectionId ] = useState();
  const [image, setImage] = useState([])
  const [junctionList, setJunctionList ] = useState("HELLO LIST!!!!!")

  useEffect(() => runFetch(pictureId), [])

  const runFetch = (id) => {
    setJunctionList(id)
    props.fetchImage(id)
      .then(res => {
        setImage(res.data)
        props.updateViewsState(id)
        props.fetchCategoryName(res.data.category_id)  
          .then(res => {
            setCatName(res.data.title)
          })
          .catch(console.log)  
        props.fetchUser(res.data.user_id)
          .then (res => {
            setUser(res.data)
          })
          .catch(console.log)
        props.fetchJunction(id)
          .then (jcts => { 
            console.log(jcts.data)
            jcts.data.map( jct => {
              props.fetchCollection(jct.collection_id, res.data.user_id)
                .then( res => {
                  setCollectionId(jct.collection_id)
                  setCollectionName(res.data.title)   
                })
                .catch(console.log)
            })
          })
          .catch(console.log)
      })
      .catch(console.log)
      
    props.fetchComments(id)
      .then(res => {
        setComments(res.data)
      })
      .catch(console.log)   
  }

  const setStatePictureShow = (newComment) => {
    setComments([ newComment, ...comments  ])
  }
  const deleteCommentState = (incomingId) => {
    setComments( comments.filter( a => a.id !== incomingId ))
  }
  return (
   <Wrapper>
      <UserInfoDiv>
        <UserInfoLeft>
          <UserImage image={user.image} />
          <UserLeftContent>
            <NameDiv>
              {user.first_name}
            </NameDiv>
            <EmailDiv>
              {user.email}
            </EmailDiv>
          </UserLeftContent>
        </UserInfoLeft>
        <UserInfoRight>
          {image.views && <>{image.views + 1} views </>}
        </UserInfoRight>
      </UserInfoDiv>
      <PictureDiv>
        <StyledImg src={image.url} />
      </PictureDiv>
      <PictureInfoDiv>
        <InfoLeft>{image.title}</InfoLeft>
        <InfoRight>
          {collectionName ? <>
            part of <a href="url">{collectionName}</a> collection 
          </> : null}
        </InfoRight> 
      </PictureInfoDiv>
      <PictureCollectionDiv>
          {collectionId && <PictureCollection toggle={props.toggle} collectionId={collectionId} runFetch={runFetch} /> }
      </PictureCollectionDiv>
      <PictureDescriptionDiv>
        <InfoLeft>
          Description
        </InfoLeft>
        <InfoRight>
        in <a href="url">{catName}</a> category
        </InfoRight>
      </PictureDescriptionDiv>
      <Description> {image.first_namedescription} </Description>
      <Comments comments={comments} pictureId={pictureId} setStatePictureShow={setStatePictureShow} deleteCommentState={deleteCommentState}/>
   </Wrapper>
  )
}
const Wrapper = styled.div`
  min-height: 600px;
  max-height: 100vh;
  overflow-y: auto;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
`
const UserInfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`
const UserInfoRight = styled.div`
  display: flex;
  align-items: center;
`
const UserInfoLeft = styled.div`
  display: flex;
  align-items: center;
`
const UserImage = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 100%;
  height: 40px;
  width: 40px;
`
const UserLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  margin-left: 1rem;
`
const NameDiv = styled.div`
  font-size: 18px;
  display: flex;
  align-items: center;
`
const EmailDiv = styled.div`
  color: gray;
`
const PictureDiv = styled.div`
  text-align: center;
`
const StyledImg = styled.img`
  margin-top: 1rem;
  width: 500px;
`
const PictureInfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
`
const FeedbackDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 1rem;
`
const InfoRight = styled.div`
`
const InfoLeft = styled.div`
  font-weight: bold;
  font-size: 24px;
`
const PictureCollectionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
`
const PictureDescriptionDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-top: 1rem;
`
const Description = styled.div`
  width: 100%;
  margin-top: 1rem;
`


const ConnectedPictureShow = (props) => (
  <ImageConsumer>
    {(value) => <PictureShow {...props} {...value} />}
  </ImageConsumer>
);

export default ConnectedPictureShow;



