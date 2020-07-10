import React, { useState } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { AuthConsumer } from '../../providers/AuthProvider'

const CommentBar = (props) => {
  //Check to see if user is logged in to set userId
  const id = props.id
  const userId = props.auth.user.id
  const [comment, setComment] = useState("")
  
  const addComment = () => {
    axios.post("/api/picture_comments", {body: "Hello New Comment", user_id: userId, picture_id: id })
      .then( res => {
        console.log(res.data)
      })
      .catch(console.log)
  }
  const handleChange = (event) => {
    setComment( event.target.value );
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    addComment()
  }
  //can I just have addComment do the handlesubmit stuff?
  
  return(
    <form onSubmit={handleSubmit}>
    <StyledInput type="text" name="body" value={comment} onChange={handleChange} placeholder="have something to say..."/>
    </form>
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
