import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { AuthConsumer } from '../../providers/AuthProvider'

const CommentBar = (props) => {
  const id = props.id
  const [userId, setUserId] = useState("1") //set default user id to 1??
  const auth = props.auth.authenticated
  // const userId = props.auth.user.id //Check to see if user is logged in to set userId
  const [comment, setComment] = useState("")
  
  const addComment = () => {
    axios.post("/api/picture_comments", {body: comment, user_id: userId, picture_id: id })
      .then( res => {
        setComment("")
        props.setStatePictureShow(res.data)
      })
      .catch(console.log)
  }

  const loginRequired = () => {
    console.log("You must be logged in to leave a comment!")
  }
  const handleChange = (event) => {
    setComment( event.target.value );
  }
  const handleSubmit = (e) => { //can I just have addComment do the handlesubmit stuff?
    e.preventDefault()
    addComment()
  }
  // setUserId(props.auth.user.id) : loginRequired()}
  return(
    <>
    { auth != false ? "Logged in" : "Logged Out" }

    <form onSubmit={handleSubmit}>
    <StyledInput type="text" name="body" value={comment} onChange={handleChange} placeholder="have something to say..."/>
    </form>
    </>
    //String interpolate user name in placeholder?
  )
}

export default class ConnectedCommentBar extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <CommentBar {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}

const StyledInput = styled.input`
  border: none;
  height: 35px;
  width: 525px;
  box-sizing: border-box;
  outline: none
`