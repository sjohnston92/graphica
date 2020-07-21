import React from 'react';
import Dropzone from 'react-dropzone';


class UpdateBannerImage extends React.Component {

  state = { formValues: { file: '' }, };

  onDrop = (files) => {
    this.setState({ formValues: { ...this.state.formValues, file: files[0] }})
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log('formsubmit')
    this.props.updateUserBannerImage(this.props.user.id, this.state.formValues)
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
                { isDragActive ? <p>Already loaded</p> : <p>Drop items here</p> }
              </div>
            )
          }}
        </Dropzone>
        <button type="submit" >Update Banner Image</button>
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

export default UpdateBannerImage;