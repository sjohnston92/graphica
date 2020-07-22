import React, { useState, useEffect } from 'react';
import axios from "axios";
import { AuthConsumer } from "../../providers/AuthProvider";
import styled  from 'styled-components';


const CollectionForm = (props) => {

  const [ title, setTitle ] = useState("")
  const [ description, setDescription ] = useState("")

  useEffect(() => {
    if (props.collection && props.collection.id) {
      setDescription(props.collection.description)
      setTitle(props.collection.title)
    }
  }, [])

  

  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  const handleChangeDescription = (event) => {
    setDescription(event.target.value)
  }
  const handleSubmit = (e) => {
    e.preventDefault()
   if (props.collection && props.collection.id) {
      axios.patch(
        `/api/users/${props.user.id}/collections/${props.collection.id}`, 
        { title: title, description: description }
      )
        .then( res => {
          props.handleRes(res)
        })
     
   } else {
      axios.post(
        `/api/users/${props.user.id}/collections`, 
        { title: title, description: description }
        )
        .then( res => {
          props.handleRes(res.data)
          
          
        })
        .catch(console.log)
    }
  }

  return(

    <form onSubmit={handleSubmit}>
      <label>
        Title: 
        <input type="text" name="title" value={title} required onChange={handleChangeTitle}/>
      </label>
      <label>
        Description: 
        <input type="text" name="description" value={description} onChange={handleChangeDescription}/>
      </label>
      <button>Submit</button>
    </form>
  )

}


const CollectionStyleForm = styled.form`
  display: flex;
  flex-direction: column;
`

const ConnectedCollectionForm = (props) => (
  <CollectionConsumer>
      {(value) => <CollectionForm {...props} {...value} />}
  </CollectionConsumer>
)

const AuthConnectedCollectionForm = (props) => (
  <AuthConsumer>
    {(value) => <ConnectedCollectionForm {...props} {...value} />}
  </AuthConsumer>
);



export default AuthConnectedCollectionForm;