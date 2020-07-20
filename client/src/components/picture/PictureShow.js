import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PictureComments from './PictureComments'
import CommentBar from './CommentBar';
import PictureCollection from './PictureCollection';
import { ImageConsumer } from '../../providers/ImageProvider'

const PictureShow = (props) => {
  // const id = props.id;
  const pictureId = props.imageId

  // const url = image.url;
  // const user = props.user;
  // const description = image.description;
  // const title = image.title;
  // const catId = image.category_id
  // const userId = image.user_id
  // const [views, setViews] = useState(image.views + 1)
  const [user, setUser ] = useState([]) //maybe add props.user for initial state
  const [catName, setCatName] = useState("");
  const [comments, setComments] = useState([]);
  const [collectionName, setCollectionName ] = useState([]);
  const [collectionId, setCollectionId ] = useState();
  const [image, setImage] = useState([])
  const [junctionList, setJunctionList ] = useState("HELLO LIST!!!!!")

  useEffect(()=> {

    console.log("Component has been updated")
  })

  useEffect(() => {
    
    runFetch(pictureId)

  }, [])


  const runFetch = (id) => {
    setJunctionList(id)
    props.fetchImage(id)
      .then(res => {
        setImage(res.data)
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
        props.fetchJunction(id) //Doing with just one
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
        
    
        
        // updateViews()

  }
    const setImagePictureShow = () => {

      runFetch()

    }
  //     axios.get(`/api/pictures/${id}/collection_pictures`) 
  //       .then(res => {
  //           mapData(res.data) 
  //             .then( collectionTitle => {
  //               setCollectionNames(collectionNames.concat(...collectionNames, [collectionTitle])) 
  //               console.log(collectionNames)
  //             })
  //         })
  //       .catch((err) => {
  //         console.log(err)  
  //       })
      
  //     const mapData = (junctions) => {
  //       return new Promise((resolve, reject) => {

  //     junctions.map( junction => {
  //       // console.log("junction", junction)
  //       getCollectionName(junction.collection_id)
  //       .then( (collectionTitle) => {
  //         // console.log("Collection Title:", collectionTitle)
  //         // setCollectionNames(collectionNames.concat([collectionTitle])) 
  //         resolve(collectionTitle)
  //         // console.log("Collection Names:", collectionNames)
          
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //         reject(err)
  //       })
  //     })
  //   })
  // }

  // const getCollectionName = (collectionId) => {
  //   return new Promise((resolve, reject) => {
  //     setCollectionIds(collectionIds.concat([collectionId]))
  //     axios.get(`/api/users/${image.userId}/collections/${collectionId}`)
  //       .then(res => {
  //         resolve(res.data.title)
  //       })
  //       .catch((err) => {
  //         console.log(err)
  //         reject(err)
  //       })
  //   })
  // }

  // const updateViews = () => {
  //   axios.patch(`/api/pictures/${id}`, {views: views, url: url, title: title, description: description, user_id: userId, category_id: catId})
  //     .catch(console.log)
  // }

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
          {image.views - 1} views
        </UserInfoRight>
      </UserInfoDiv>
      <PictureDiv>
        <StyledImg src={image.url} />
      </PictureDiv>
      <PictureInfoDiv>
        <InfoLeft>{image.title}</InfoLeft>
        <InfoRight>
          {collectionName && <>
            part of <a href="url">{collectionName}</a> collection 
            {/* {collectionNames.length > 1 ? `and the ${collectionNames[1]} collection` : null}  */}
          </> }
        </InfoRight> 
      </PictureInfoDiv>
      <PictureCollectionDiv>
          {collectionId && <PictureCollection toggle={props.toggle} collectionId={collectionId} runFetch={runFetch} /> }
        {/* { (collectionIds[1]) && <PictureCollection collectionId={collectionIds[1]}/> } */}
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
      <FeedbackDiv>
        <InfoLeft>
          Feedback
        </InfoLeft>
        <InfoRight>
          {/* {comments.length} 
          {comments.length !== 1 ? " responses" : " response" } */}
        </InfoRight>
        <Rectangle>
          <CommentBar id={pictureId} setStatePictureShow={setStatePictureShow}/>
        </Rectangle>
      <CommentsDiv>
          {comments.map((comment, index) => (
            <>
               <PictureComments key={comment.id} {...comment} deleteCommentState={deleteCommentState}/>
            </>
          ))}
      </CommentsDiv>
      </FeedbackDiv>
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
const CommentsDiv = styled.div`
  width: 100%;
  margin-top: 1rem;
  padding-bottom: 10rem;
`
const Rectangle = styled.div`
  width: 708px;
  height: 35.24px;
  background-color: white;
  border-style: solid;
`

const ConnectedPictureShow = (props) => (
  <ImageConsumer>
    {(value) => <PictureShow {...props} {...value} />}
  </ImageConsumer>
);

export default ConnectedPictureShow;



