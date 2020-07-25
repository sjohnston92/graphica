import React, { useState } from "react";
import styled from "styled-components";
import Dropzone from "react-dropzone";
import axios from "axios";
import { AuthConsumer, } from "../../providers/AuthProvider";
import { withRouter } from "react-router-dom";
import AddCollectionToPicture from "./AddCollectionToPicture";
import '../../Styles/Form.css'

class PictureForm extends React.Component {

  state = { 
    formValues: {  file: "", title: "", description: "",  categoryId: "", url: "" },
    categories: [],
  };
  
  componentDidMount() {
    axios.get("/api/categories")
    .then((res) => this.setState({ 
      categories: res.data,
      formValues: { ...this.state.formValues, categoryId: res.data[0].id }
    }))
    .catch(console.log)
  }

  handleSubmit = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append("file", this.state.formValues.file);
    const options = { 
      params: { 
        title: this.state.formValues.title,
        description: this.state.formValues.description,
        category_id: this.state.formValues.categoryId,
      } 
    }

    console.log(this.state.formValues);

    axios.post(`/api/users/${this.props.auth.user.id}/pictures`, data, options)
      .then(res => {
        this.props.toggleModal()
        this.props.history.push(`/`);
      })
      .catch(console.log);
  }
  
  onDrop = (files) => {
    const blob = new Blob([files[0]], { type: 'image/png' });
    const url = URL.createObjectURL(blob);
    this.setState({ 
      formValues: { ...this.state.formValues, file: files[0], },
      url, 
    })
  }

  handleChange = (event) => {
    this.setState({ 
      formValues: { 
        ...this.state.formValues,
        [event.target.name]: event.target.value 
      }
    });  
  }


  render() {
    const { toggle, open } = this.props;

    return (
      <>
      <FormWrapper>
        <HeaderDiv>
          <FormHeader>add a picture</FormHeader>
        </HeaderDiv>
      </FormWrapper>
        <StyledLine></StyledLine>
        <FormWrapper>
        <StyledForm onSubmit={this.handleSubmit} >
          <Dropzone
            onDrop={this.onDrop}
            multiple={false}
          >
            {({ getRootProps, getInputProps, isDragActive }) => {
              return (
                <div
                  {...getRootProps()}
                  style={styles.dropzone}
                >
                  <input {...getInputProps()} />
                <img src={this.state.url} style={{width: "100%"}}/>
                  {
                    isDragActive ?
                      <p>Drop files here...</p> :
                      <p>Click Here...</p>
                  }
                </div>
              )
            }}
          </Dropzone>
            <StyledLabel>
              title: 
              <TitleInput
                type="text"
                name="title"
                value={this.state.formValues.title}
                placeholder="Picture Title"
                required
                onChange={this.handleChange}
              />
            </StyledLabel>
            <StyledLabel>
              description: 
            <DescriptionInput 
              type="text"
              name="description"
              value={this.state.formValues.description}
              placeholder="Description..."
              onChange={this.handleChange}
            />
            </StyledLabel>
            <StyledLabel>
              category: 
            <FormSelect
              type="select"
              name="categoryId"
              value={this.state.formValues.categoryId}
              onChange={this.handleChange}
              required
            >
              { this.state.categories.map((category) => (
                  <option value={category.id} >{category.title}</option>
                ))
              }
            </FormSelect>
            </StyledLabel>
            
          <SubmitButton>submit</SubmitButton>
        </StyledForm>
      </FormWrapper>
      </>
    )
  }
}
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
  width: 90%;
  font-family: 'Montserrat',  sans-serif !important;
  margin-top: 4px;
`
const DescriptionInput = styled.textarea`
  font-size: 1rem;
  width: 90%;
  max-height: 40%;
  font-family: 'Montserrat',  sans-serif !important;
  resize: none;
  margin-top: 4px;
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
  display: flex;
  align-self: center;
  cursor: pointer;
`

const FormSelect = styled.select`
  font-size: 1rem;
  width: 90%;
  font-family: 'Montserrat',  sans-serif !important;
`



const styles = {
  dropzone: {
    height: "150px",
    width: "150px",
    border: "1px dashed black",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
}
const ConnectedPictureForm = (props) => (
  <AuthConsumer> 
    { auth => <PictureForm { ...props } auth={auth} />}
  </AuthConsumer>
)


export default withRouter(ConnectedPictureForm);
