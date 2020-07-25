import React, { useEffect, useState } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider'
import deleteImg from '../../img/delete.png';
import editImg from '../../img/edit.jpg';
import axios from 'axios';
import styled from 'styled-components';

const EditPicture = (props) => {
  const [ title, setTitle ] = useState(props.image.title)
  const [ description, setDescription ] = useState(props.image.description)
  const [ category, setCategory ] = useState(props.category)
  const [ categories, setCategories ] = useState([])
  const [ editing, setEditing ] = useState(false)
  const [ categoryId, setCategoryId ] = useState(props.category.id)
  
  useEffect(() => { 
    axios.get("/api/categories")
    .then(res => setCategories(res.data))
    .catch(console.log)
  }, [])

  const toggleEdit = () => {
    setEditing(!editing)
  }

  const deleteImage = () => {
    const result = window.confirm("Delete Image!?")
    if (result) {
      axios.delete(`/api/pictures/${props.image.id}`)
      .then( res => props.deleteImageState(props.image.id)) 
      .catch(console.log)
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.patch(
      `/api/pictures/${props.image.id}`, 
      { title: title, description: description, category_id: categoryId }
    )
      .then( res => {
        toggleEdit()
        props.refreshImageState(res.data, categories[categoryId-1])
      })
      .catch(console.log)
  }
  
  const handleChangeTitle = (event) => {
    setTitle(event.target.value)
  }

  const handleChangeDescription = (event) => {
    setDescription(event.target.value)
  }

  const handleChangeCategory = (event) => {
    setCategoryId(event.target.value)
  }

  const RenderEditPicture = () => (
    <Wrapper>
      <EditButton onClick={toggleEdit} image={editImg} title="Edit"/>
      <DeleteButton onClick={deleteImage} image={deleteImg} title="Delete" />
      {editing &&
        <>
          <form onSubmit={handleSubmit}>
            <label>
              Title: 
              <input type="text" name="title" value={title} required onChange={handleChangeTitle}/>
            </label>
            <label>
              Description: 
              <input type="text" name="description" value={description} onChange={handleChangeDescription}/>
            </label>
            <label>
              Category: 
              <select type="select" name="category" onChange={handleChangeCategory} required>
                {/* how do I remove duplicate title? */}
                <option value={category.id}>{category.title}</option> 
                  { categories.map(cat => (
                      <option value={cat.id}>{cat.title}</option>
                    )) 
                  }
              </select>
            </label>
            <button>Submit</button>
          </form>
        </>
      }
    </Wrapper>
  )

  return (
    <>
      { props.authenticated && 
        <> 
          { 
            props.user.id === (props.userId) &&
              <>
                { RenderEditPicture() }
              </>
          }
        </>
      }
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`
const EditButton = styled.div `
background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 100%;
  height: 30px;
  width: 30px;  
  cursor: pointer;
`
const DeleteButton = styled.div `
background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 100%;
  height: 30px;
  width: 30px;  
  cursor: pointer;
`
const ConnectedEditPicture = (props) => (
  <AuthConsumer>
    {(value) => <EditPicture {...props} {...value} />}
  </AuthConsumer>
);

export default ConnectedEditPicture