import React from 'react';
import Dropzone from 'react-dropzone';


class UpdateProfileImage extends React.Component {

  state = { 
    formValues: { file: '' }, url: "" 
  };

  onDrop = (files) => {
    const blob = new Blob([files[0]], { type: 'image/png' });
    const url = URL.createObjectURL(blob);
    this.setState({ 
      formValues: { ...this.state.formValues, file: files[0] },
      url,
    }) 
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('formsubmit')
    this.props.updateUserProfileImage(this.props.user.id, this.state.formValues)
      .then((user) => this.props.setUser(user))
      .catch(console.log)
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit} style={{margin: "1rem"}} >
        <Dropzone
          onDrop={this.onDrop}
          multiple={false}>
          {({ getRootProps, getInputProps, isDragActive}) => {
            return (
              <div
                {...getRootProps()}
                style={styles.dropzone}>
                <input {...getInputProps()} />
                <img src={this.state.url.length > 0 ? this.state.url : this.props.user.image} style={{width: "100%"}}/>
                { isDragActive ? <p>Already loaded</p> : <p>Drop items here</p> }
              </div>
            )
          }}
        </Dropzone>
        <button type="submit" >Update Profile Image</button>
      </form>
    )
  }
}

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

export default UpdateProfileImage;