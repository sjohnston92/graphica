import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { AuthConsumer } from '../../providers/AuthProvider'

const CommentBar = (props) => {
  const id = props.id
  const [userId, setUserId] = useState(0) //for now setting logged out comments to user_id: 1
  const auth = props.auth.authenticated
  // const userId = props.auth.user.id //Check to see if user is logged in to set userId
  const [comment, setComment] = useState("")
  
  // useEffect(() => {
  //   auth != false ? setUserId(props.auth.user.id) : loginRequired()
  // }, [])

  const addComment = () => {
    if (userId > 0) {
      axios.post("/api/picture_comments", {body: comment, user_id: userId, picture_id: id })
        .then( res => {
          setComment("")
          props.setStatePictureShow(res.data)
        })
        .catch(console.log)
    } else { loginRequired() }
  }

  const loginRequired = () => {
    alert("You must be logged in to leave a comment!")
  }
  const handleChange = (event) => {
    setComment( event.target.value );
    auth != false ? setUserId(props.auth.user.id) : loginRequired();
  }
  const handleSubmit = (e) => { //can I just have addComment do the handlesubmit stuff?
    e.preventDefault()
    addComment()
  }
  // setUserId(props.auth.user.id) : loginRequired()}
  return(
    <>
    {/* { auth != false ? "Logged in" : "Logged Out" } */}

    <form onSubmit={handleSubmit}>
    <StyledInput type="text" name="body" value={comment} onChange={handleChange} placeholder="have something to say..."/>
    </form>
    </>
    //Idea String interpolate user name in placeholder?
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