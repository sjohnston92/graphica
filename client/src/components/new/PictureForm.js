import React, { useState } from "react";
import styled from "styled-components";
import Dropzone from "react-dropzone";
import axios from "axios";
import { AuthConsumer, } from "../../providers/AuthProvider";
import { Redirect } from 'react-router-dom';
 
class PictureForm extends React.Component {

  state = { 
    formValues: {  file: "", title: "", description: "",  category: "" },
    categories: [],
    collectionId: "",
    redirect: null,
  };
  
  componentDidMount() {
    axios.get("/api/categories")
    .then((res) => this.setState({ categories: res.data }))
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
        category_id: this.state.formValues.category,
      } 
    }

    axios.post(`/api/users/${this.props.auth.user.id}/pictures`, data, options)
      .then(res => {
        // this.props.toggle() //CANT DO BOTH ON SEPARATE PictureForm Instances.
        this.setState({redirect: "/"})           
      })
      .catch(console.log);
  }
  
  onDrop = (files) => {
    this.setState({ formValues: { ...this.state.formValues, file: files[0], } });
  }

  handleChange = (event) => this.setState({ 
    formValues: { 
      ...this.state.formValues,
      [event.target.name]: event.target.value 
    }
  });
  
  render() {
    const redirect = this.state.redirect
    return (
      <>
        {redirect && <Redirect to={redirect}/>}
        <PictureFormDiv onSubmit={this.handleSubmit} >
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
                  {
                    isDragActive ?
                      <p>Drop files here...</p> :
                      <p>Try dropping some files here, or click to select files to upload.</p>
                  }
                </div>
              )
            }}
          </Dropzone>
            <label>
              Title: 
              <input
                type="text"
                name="title"
                value={this.state.formValues.title}
                placeholder="Picture Title"
                required
                onChange={this.handleChange}
              />
            </label>
            <label>
              Description: 
            <input 
              type="text"
              name="description"
              value={this.state.formValues.description}
              placeholder="Description..."
              onChange={this.handleChange}
            />
            </label>
            <label>
              Category: 
            <select
              type="select"
              name="category"
              value={this.state.formValues.category}
              onChange={this.handleChange}
              required
            >
              { this.state.categories.map((category) => {
                return (
                <option value={category.id} >{category.title}</option>
                )
              }) }
            </select>
            </label>
          <SubmitButton>Submit</SubmitButton>
        </PictureFormDiv>
      </>
    )
  }
}

const PictureFormDiv = styled.form`
  display: flex;
  flex-direction: column;
`
const SubmitButton = styled.button``
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

export default ConnectedPictureForm;