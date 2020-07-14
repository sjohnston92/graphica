import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import PictureComments from './PictureComments'
import CommentBar from './CommentBar';
import InfiniteScroll from 'react-infinite-scroller';

const PictureShow = (props) => {
  const id = props.id;
  const url = props.url;
  const user = props.user;
  const description = props.description;
  const title = props.title;
  const catId = props.category_id
  const userId = props.user_id
  const [views, setViews] = useState(props.views + 1)
  const [catName, setCatName] = useState("");
  const [comments, setComments] = useState([]);
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    axios.get(`/api/categories/${catId}`)
    .then(res => {
      setCatName(res.data.title)
    })
    .catch(console.log)
    axios.get(`/api/pictures/${id}/picture_comments`)
    .then(res => { setComments(res.data) })
      .catch(console.log)     
    updateViews()
  }, [])
  const updateViews = () => {
    axios.patch(`/api/pictures/${id}`, {views: views, url: url, title: title, description: description, user_id: userId, category_id: catId})
      .then(res => { console.log("working setViews") }) //Do I need anything here?
      .catch(console.log)
  }
  const setStatePictureShow = (newComment) => {
    setComments([ newComment, ...comments  ])
  }
  const handleLoadMore = (page) => {
    console.log(page)
    // setCurrentPage(page)
    return "Hello More ITEMS"
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
          {views} views
        </UserInfoRight>
      </UserInfoDiv>
      <PictureDiv>
        <StyledImg src={url} />
      </PictureDiv>
      <PictureInfoDiv>
        <InfoLeft>{title}</InfoLeft>
        <InfoRight>part of <a href="url">such and such</a> collection</InfoRight> 
      </PictureInfoDiv>
      {/* <PictureCollectionDiv>
        Hello Picture Collection 
      </PictureCollectionDiv> */}
      <PictureDescriptionDiv>
        <InfoLeft>
          Description
        </InfoLeft>
        <InfoRight>
        in <a href="url">{catName}</a> category
        </InfoRight>
      </PictureDescriptionDiv>
      <Description> {description} </Description>
      <FeedbackDiv>
        <InfoLeft>
          Feedback
        </InfoLeft>
        <InfoRight>
          {comments.length} 
          {comments.length !== 1 ? " responses" : " response" }
        </InfoRight>
        <Rectangle>
          <CommentBar id={id} setStatePictureShow={setStatePictureShow}/>
        </Rectangle>
      <CommentsDiv>
        <InfiniteScroll
          pageStart={0}
          loadMore={handleLoadMore}
          hasMore={true} //var to say we only have x amount data left
          loader={<div className="loader" key={0}>Loading ...</div>}
        >
          {comments.map((comment, index) => (
            <>
              <PictureComments key={comment.id} {...comment}/>
            </>
          ))}
        </InfiniteScroll>
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
  position: relative;
  top: 75px;
  left: 100px;
  height: 10px;
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

export default PictureShow







