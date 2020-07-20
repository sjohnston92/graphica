import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Comments from './comments/Comments'

import PictureCollection from './PictureCollection';
import { ImageConsumer } from '../../providers/ImageProvider'

const PictureShow = (props) => {
  const [user, setUser ] = useState([]) 
  const [catName, setCatName] = useState("");
  const [comments, setComments] = useState([]);
  const [image, setImage] = useState([])
  const [junctionList, setJunctionList ] = useState(null)
  const [showAllCollections, setShowAllCollections ] = useState(false)
  const [junctionSlice, setJunctionSlice ] = useState(null)

  useEffect(() => runFetch(props.imageId), [props.imageId])

  const runFetch = (id) => {
    props.fetchImage(id)
      .then(res => {
        setImage(res.data)
        props.updateViewsState(id)

        props.fetchCategoryName(res.data.category_id)  
          .then(res => setCatName(res.data.title))
          .catch(console.log)

        props.fetchUser(res.data.user_id)
          .then(res => setUser(res.data))
          .catch(console.log)

        props.fetchJunction(id)
          .then(res => {
              // setJunctionSlice(res.data.slice(1, res.data.length) )
              setJunctionList(res.data)
            })
          .catch(console.log)
      })
      .catch(console.log)
      
    props.fetchComments(id)
      .then(res => setComments(res.data))
      .catch(console.log)   
  }

  const setStatePictureShow = (newComment) => {
    setComments([ newComment, ...comments  ])
  }

  const deleteCommentState = (incomingId) => {
    setComments( comments.filter( a => a.id !== incomingId ))
  }

console.log(junctionSlice)
  const checkJunctionList = () => {

    if (junctionList) {
      if (showAllCollections == false ){
        return renderPictureCollection()
      } else if (showAllCollections == true){
        return renderPictureCollections()
      }
    }
    // if (junctionList) {
    //   if (junctionList.length > 1) {
    //     return renderPictureCollection() 
    //     } else return renderPictureCollections()    
    // }
  }
  const renderPictureCollections = () => (
    <>
    <LinkDiv onClick={()=>setShowAllCollections(false)}> Show Less </LinkDiv>
    {junctionList.map(jct => (
      
        <PictureCollection 
          toggle={props.toggle} 
          pictureCollection={jct}
          runFetch={runFetch} 
          fetchCollection={props.fetchCollection}
          user={props.user}
        />
      
    ))}
    </>
    
  )

  const renderCollections = () => (
    <>
      {junctionList && 
        <>
          { (showAllCollections)
            ? 
              <>
              <LinkDiv onClick={()=>setShowAllCollections(false)}> Show Less </LinkDiv>
                {/* {junctionSlice.map(jct => ( */}
                 {junctionList.map(jct => (
                    <PictureCollection 
                      toggle={props.toggle} 
                      pictureCollection={jct}
                      runFetch={runFetch} 
                      fetchCollection={props.fetchCollection}
                      user={props.user}
                    />
                ))}
              </> 
            :
              <>
                  { junctionList.length > 1 &&
                    <LinkDiv onClick={()=>setShowAllCollections(true)}> See All Collections </LinkDiv>
                  }
                <PictureCollection 
                  toggle={props.toggle}
                  pictureCollection={junctionList[0]}
                  runFetch={runFetch} 
                  fetchCollection={props.fetchCollection}
                  user={props.user}
                /> 
              </>
          }
        </>
      }
    </>
  )

  const renderPictureCollection = () => (
    <>
        <PictureCollection 
        toggle={props.toggle}
        pictureCollection={junctionList[0]}
        runFetch={runFetch} 
        fetchCollection={props.fetchCollection}
        user={props.user}
        /> 
        { junctionList.length > 1 && <LinkDiv onClick={()=>setShowAllCollections(true)}> ...Show More Collections </LinkDiv>}
    </>
  )

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
      </PictureInfoDiv>
      <PictureCollectionDiv>
          {/* { checkJunctionList() } */}
          {renderCollections()}
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
      <Comments comments={comments} pictureId={props.imageId} setStatePictureShow={setStatePictureShow} deleteCommentState={deleteCommentState}/>
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
  flex-direction: column;
  justify-content: flex-start;
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
const LinkDiv = styled.div`
  color: #81adda;
  cursor: pointer;


`


const ConnectedPictureShow = (props) => (
  <ImageConsumer>
    {(value) => <PictureShow {...props} {...value} />}
  </ImageConsumer>
);

export default ConnectedPictureShow;



