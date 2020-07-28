import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { AuthConsumer } from '../../../providers/AuthProvider'

const CommentBar = (props) => {
  const id = props.id
  const [userId, setUserId] = useState(0)
  const auth = props.auth.authenticated
  const [comment, setComment] = useState("")

  const loginRequired = () => {
    alert("You must be logged in to leave a comment!")
  }
  const handleChange = (event) => {
    setComment( event.target.value );
    auth !== false ? setUserId(props.auth.user.id) : loginRequired();
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    if (userId > 0) {
      axios.post("/api/picture_comments", {body: comment, user_id: userId, picture_id: id })
        .then( res => {
          setComment("")
          props.setStatePictureShow(res.data)
        })
        .catch(console.log)
    } else { loginRequired() }
  }
  return(
    <>
      <form onSubmit={handleSubmit}>
        <StyledInput type="text" name="body" value={comment} onChange={handleChange} placeholder="Have something to say...?"/>
      </form>
    </>
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
  border: 1px solid black;
  height: 35px;
  width: 72vw;
  box-sizing: border-box;
  outline: none;
  ::placeholder {
    font-family: Montserrat;
  }
  padding: 1rem;
`