import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import Comments from './comments/Comments'
import { Redirect, Link, NavLink } from 'react-router-dom';

import PictureCollection from './PictureCollection';
import { ImageConsumer } from '../../providers/ImageProvider'
import EditPicture from './EditPicture'
import AddCollectionButton from './AddCollectionButton';
import RemoveImage from './RemoveImage';

const PictureShow = (props) => {
  const [user, setUser ] = useState([]) 
  const [category, setCategory] = useState("");
  const [comments, setComments] = useState([]);
  const [image, setImage] = useState([])
  const [junctionList, setJunctionList ] = useState(null)
  const [showAllCollections, setShowAllCollections ] = useState(false)

  useEffect(() => runFetch(props.imageId), [props.imageId])

  const runFetch = (id) => {
    setJunctionList(null) //START HERE, try to get it so it doesn't reload everytime
    props.fetchImage(id)
      .then(res => {
        setImage(res.data)
        props.updateViewState && props.updateViewsState(id)

        props.fetchCategory(res.data.category_id)  //NOT NAME ANYMORE
          .then(res => setCategory(res.data))
          .catch(console.log)

        props.fetchUser(res.data.user_id)
          .then(res => setUser(res.data))
          .catch(console.log)

        props.fetchJunction(id)
          .then(res => {
              setJunctionList(res.data)
            })
          .catch(console.log)
      })
      .catch(console.log)
      
    props.fetchComments(id)
      .then(res => setComments(res.data))
      .catch(console.log)  
      console.log("user ID", user.id)
      console.log("logged in user", props.user.id)
  }

  const setStatePictureShow = (newComment) => {
    setComments([ newComment, ...comments  ])
  }

  const refreshImageState = (incomingImage, incomingCategory) => {
    setImage(incomingImage) 
    setCategory(incomingCategory)
  }
  const deleteCommentState = (incomingId) => {
    setComments( comments.filter( a => a.id !== incomingId ))
  }

  const deleteImageState = () => {
    alert("image has been deleted")
    props.toggleAndDelete(image.id)
    //delete junctions.. maybe no need..
  }

  const refreshCollectionState = (incomingJunctionId) => { //RENAME
    setJunctionList(junctionList.concat(incomingJunctionId))
  }

  const refreshJunctionState = (incomingJunctionId) => {
    setJunctionList(junctionList.filter(a => a.id !== incomingJunctionId))
  }
 
  const renderCollections = () => (
    <>
      { junctionList.length > 1 &&
        <>
          { (showAllCollections == false) 
            ? <LinkDiv onClick={()=>setShowAllCollections(true)}> See All Collections </LinkDiv>
            : <LinkDiv onClick={()=>setShowAllCollections(false)}> Show Less </LinkDiv>
          }
        </>
      }
      { showAllCollections 
        ?
          <>
            {junctionList.map(jct => (
              <>
                {/* <RemoveImage pictureCollection={jct} image={image} refreshJunctionState={refreshJunctionState}/> */}
                <PictureCollection 
                  pictureCollection={jct}
                  runFetch={runFetch} 
                  fetchCollection={props.fetchCollection}
                  refreshJunctionState={refreshJunctionState}
                  image={image}
                  userId={user.id}
                />
              </>
            ))}
          </> 
        :
          <>
            {/* <RemoveImage pictureCollection={junctionList[0]} image={image} refreshJunctionState={refreshJunctionState}/> */}
            <PictureCollection 
              pictureCollection={junctionList[0]}
              runFetch={runFetch} 
              fetchCollection={props.fetchCollection}
                refreshJunctionState={refreshJunctionState}
                image={image}
                userId={user.id}
            /> 

          </>
      }
    </>
  )

  return (
   <Wrapper>
        { category && 
          <EditPicture 
          userId={user.id} 
          image={image} 
          category={category} 
          deleteImageState={deleteImageState}
          refreshImageState={refreshImageState}
          />
        }
      <UserInfoDiv>
        <UserInfoLeft>
          <a href={`/Profile/${user.id}`}>
            <UserImage image={user.image} />  
          </a>
          <UserLeftContent>
            <NameDiv>
              {user.first_name} {user.last_name}
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
          { junctionList && (junctionList.length > 0) ? <> {renderCollections()} </> : null }
          <AddCollectionButton refreshCollectionState={refreshCollectionState} userId={user.id} image={image}/>
      </PictureCollectionDiv>
      <PictureDescriptionDiv>
        <InfoLeft>
          Description
        </InfoLeft>
        <InfoRight>
        in <a href="url">{category.title}</a> category
        </InfoRight>
      </PictureDescriptionDiv>
      <Description> {image.description} </Description>
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
  font-family: Montserrat;
  
  
  
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
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 24px;
  line-height: 29px;
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
  font-size: 12px;
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
  font-weight: normal;
  font-size: 12px;
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



