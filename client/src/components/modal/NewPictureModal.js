import React, { useState } from 'react';
import Modal from './Modal';
import useModal from "../../hooks/useModal";
import styled from 'styled-components';
import Dropzone from 'react-dropzone';
import axios from "axios";
import { AuthConsumer, } from "../../providers/AuthProvider"

class NewPictureModal extends React.Component {
  state = { formValues: {  file: '', }, };

  componentDidMount() {
    console.log(this.props)
  }

  // updateUser = (id, user) => {
  //   let data = new FormData();
  //   data.append('file', user.file);
  //   axios.put(`/api/users/${id}?name=${user.name}&email=${user.email}`, data)
  //     .then( res => this.setState({ user: res.data, }) )
  // }
  
  handleSubmit = (e) => {
    e.preventDefault();
    let data = new FormData();
    data.append('file', this.state.formValues.file);
    axios.post(`/api/users/${this.props.auth.user.id}/pictures`, data)
      .then(res => {
        console.log(res); 
        alert("success");
      })
      .catch(console.log);
  }

  onDrop = (files) => {
    this.setState({ formValues: { ...this.state.formValues, file: files[0], } });
  }

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
          <SubmitButton>Submit</SubmitButton>
        </PictureForm>
      </Modal>
    )
  }
}

const PictureForm = styled.form`
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
