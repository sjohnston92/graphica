import React, { useEffect, useState } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider'
import deleteImg from '../../img/delete_24px.svg';
import editImg from '../../img/settings_24px.svg';
import axios from 'axios';
import styled from 'styled-components';
import Modal from '../modal/Modal';
import useModal from '../../hooks/useModal';

const EditPicture = (props) => {
  const [ title, setTitle ] = useState(props.image.title)
  const [ description, setDescription ] = useState(props.image.description)
  const [ category, setCategory ] = useState(props.category)
  const [ categories, setCategories ] = useState([])
  const [ editing, setEditing ] = useState(false)
  const [ categoryId, setCategoryId ] = useState(props.category.id)
  const { open, toggle } = useModal();

  useEffect(() => { 
    axios.get("/api/categories")
    .then(res => setCategories(res.data))
    .catch(console.log)
  }, [])

 
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
        toggle()
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
      <Flex>

        <Words onClick={toggle}>
        <EditButton image={editImg} title="Edit"/>
        Edit Picture
        </Words>
        <Words onClick={deleteImage}>
        <DeleteButton image={deleteImg} title="Delete" /> 
        Delete Picture
        </Words>
      </Flex>
        <Modal onClose={toggle} open={open}>               
          <FormWrapper>
              <FormHeader>edit picture info</FormHeader>
          </FormWrapper>
          <StyledLine></StyledLine>
          <FormWrapper>
            <StyledForm onSubmit={handleSubmit}>
              <StyledLabel>
                title: 
                <TitleInput type="text" name="title" value={title} required onChange={handleChangeTitle}/>
              </StyledLabel>
              <StyledLabel>
                category: 
                <FormSelect type="select" name="category" onChange={handleChangeCategory} required>
                  {/* how do I remove duplicate title? */}
                  <option value={category.id}>{category.title}</option> 
                    { categories.map(cat => (
                        <option value={cat.id}>{cat.title}</option>
                      )) 
                    }
                </FormSelect>
              </StyledLabel>
              <StyledLabel>
                description: 
                <DescriptionInput type="text" name="description" value={description} onChange={handleChangeDescription}/>
              </StyledLabel>
              <SubmitButton>submit</SubmitButton>
            </StyledForm>
          </FormWrapper>
        </Modal>
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

const Flex = styled.div`
  display: flex;
`
const Words = styled.div`
  align-items: center;
  display: flex;
  cursor: pointer;
  font-size: 12px;
  color: #0099BA;
`

const FormWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1.5rem;
`
const FormHeader = styled.div`
 font-size: 1.5rem;
 font-family: 'Montserrat',  sans-serif !important;
`
const HeaderDiv = styled.div`
  display: flex;
  justify-content: flex-start;
`

const StyledLabel = styled.div`
  font-family: 'Montserrat',  sans-serif !important;
`

const StyledLine = styled.hr`
  background-color: #96969C;
  margin: 0;
`

const TitleInput = styled.input`
  font-size: 1rem;
  width: 100%;
  font-family: 'Montserrat',  sans-serif !important;
  margin-top: 4px;
  padding: 5px;
  margin-bottom: 20px;
`
const DescriptionInput = styled.textarea`
  font-size: 1rem;
  width: 100%;
  max-height: 40%;
  font-family: 'Montserrat',  sans-serif !important;
  resize: none;
  margin-top: 4px;
  padding: 5px;
  margin-bottom: 20px;
`
const StyledForm = styled.form`
  display: flex;
  flex-direction: column;
`
const SubmitButton = styled.button`
  background: #0099BA;
  box-shadow: 0px 2px 10px rgba(0, 153, 186, 0.5);
  border-radius: 4px;
  color: white;
  border: none;
  font-family: 'Montserrat',  sans-serif;
  margin-top: 10px;
  cursor: pointer;
  padding: 10px 20px;
  width: 100%;
`

const FormSelect = styled.select`
  font-size: 1rem;
  width: 100%;
  font-family: 'Montserrat',  sans-serif !important;
  padding: 5px;
  margin-bottom: 20px;
`


////////////
const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: -6px;
`
const EditButton = styled.div `
background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 100%;
  height: 25px;
  width: 25px;  
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