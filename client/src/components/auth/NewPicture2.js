import React from 'react'
import {useDropzone} from 'react-dropzone'
import styled from 'styled-components';

 
function MyDropzone() {
  const {getRootProps, getInputProps} = useDropzone()
 
  return (
    <div {...getRootProps()}>
      <input {...getInputProps()} />
      <p>Drag and drop picture image, or click to select files</p>
    </div>
  )
}

export default MyDropzone