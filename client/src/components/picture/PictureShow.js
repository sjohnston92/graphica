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
        props.updateViewsState && props.updateViewsState(id)
        props.fetchCategory(res.data.category_id)  //NOT NAME ANYMORE
          .then(res => setCategory(res.data))
          .catch(console.log)

        props.fetchUser(res.data.user_id)
          .then(res => setUser(res.data))
          .catch(console.log)
        props.fetchJunction(id)
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

  const renderCollections = () => (
    <>
      { showAllCollections 
        ?
        <>
            {props.pictureJunctions.map(jct => (
              <>
                <PictureCollection 
                  pictureCollection={jct}
                  runFetch={runFetch} 
                  fetchCollection={props.fetchCollection}
                  image={image}
                  userId={user.id}
                />
              </>
            ))}
          </> 
        :
          <>
            <PictureCollection 
              pictureCollection={props.pictureJunctions[0]}
              runFetch={runFetch} 
              fetchCollection={props.fetchCollection}
              image={image}
              userId={user.id}
              /> 

          </>
      }
      { props.pictureJunctions.length > 1 &&
        <>
          { (showAllCollections == false) 
            ? <LinkDiv onClick={()=>setShowAllCollections(true)}> see all collections </LinkDiv>
            : <LinkDiv onClick={()=>setShowAllCollections(false)}> show less </LinkDiv>
          }
        </>
      }
    </>
  )

  return (
   <Wrapper>
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
          {image.views && <>{(image.views + 1).toLocaleString()} views </>}
        { category && 
          <EditPicture 
          userId={user.id} 
          image={image} 
          category={category} 
          deleteImageState={deleteImageState}
          refreshImageState={refreshImageState}
          />
        }
        </UserInfoRight>
      </UserInfoDiv>
      <PictureDiv>
        <StyledImg src={image.url} />
      </PictureDiv>
      <PictureInfoDiv>
        <InfoLeft>{image.title}</InfoLeft>
      </PictureInfoDiv>
      <PictureCollectionDiv>
          { props.pictureJunctions && (props.pictureJunctions.length > 0) ? <> {renderCollections()} </> : null }
          <AddCollectionButton userId={user.id} image={image}/>
      </PictureCollectionDiv>
      <PictureDescriptionDiv>
        <InfoLeft>
          Description
        </InfoLeft>
        <InfoRight>
        in {category.title} category
        {/* in <a href="url">{category.title}</a> category */}
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
  width: 78vw;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  font-family: Montserrat;
  
  
  ::-webkit-scrollbar { /* WebKit */
    width: 0;
    height: 0;
  } 

  scrollbar-width: none; /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */

`
const UserInfoDiv= styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  padding-left: 25px;
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
`
const UserImage = styled.div`
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 100%;
  height: 70px;
  width: 70px;
`
const UserLeftContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: left;
  padding: 1rem;
  margin-top: 20px;
`
const NameDiv = styled.div`
  font-size: 14px;
  display: flex;
  align-items: center;
`
const EmailDiv = styled.div`
  color: gray;
  font-size: 10px;
  margin-bottom: 12px;
`
const PictureDiv = styled.div`
  display: grid;
  height: 100%;
`
const StyledImg = styled.img`
  max-width: 100%;
  max-height: 85vh;
  margin: auto;
`
const PictureInfoDiv = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 2rem;
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
  padding: 2rem;
  padding-bottom: 9px;
`
const Description = styled.div`
  width: 100%;
  font-weight: normal;
  font-size: 12px;
  padding-left: 2rem;
  margin-top: 1px;
`
const LinkDiv = styled.div`
  color: #81adda;
  cursor: pointer;
  padding-left: 2rem;

`


const ConnectedPictureShow = (props) => (
  <ImageConsumer>
    {(value) => <PictureShow {...props} {...value} />}
  </ImageConsumer>
);


export default ConnectedPictureShow;



