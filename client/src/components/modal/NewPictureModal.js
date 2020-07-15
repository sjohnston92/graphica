import React, { useState } from "react";
import Modal from "./Modal";
import useModal from "../../hooks/useModal";
import styled from "styled-components";
import Dropzone from "react-dropzone";
import axios from "axios";
import { AuthConsumer, } from "../../providers/AuthProvider"

class NewPictureModal extends React.Component {

  state = { 
    formValues: {  file: "", title: "", description: "",  category: "" },
    categories: [],
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
        // do things when picture uploads successfully
        console.log(res); 
        alert("success");
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
    const { toggle, open } = this.props;
    return (
      <Modal onClose={toggle} open={open}>
        <PictureForm onSubmit={this.handleSubmit} >
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
          <lable>
            Description: 
          <input 
            type="text"
            name="description"
            value={this.state.formValues.description}
            placeholder="Description..."
            onChange={this.handleChange}
          />
          </lable>

          <lable>
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
          </lable>
          
          <SubmitButton>Submit</SubmitButton>
        </PictureForm>
      </Modal>
    )
  }
}

const PictureForm = styled.form`
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

const ConnectedNewPictureModal = (props) => (
  <AuthConsumer> 
    { auth => 
      <NewPictureModal { ...props } auth={auth} />
    }
  </AuthConsumer>
)

// function MyDropzone() {
//   const {getRootProps, getInputProps} = useDropzone()
//   return (
//     <div {...getRootProps()}>
//       <input {...getInputProps()} />
//       <p>Drag and drop picture image, or click to select files</p>
//     </div>
//   )
// }
export default ConnectedNewPictureModal;