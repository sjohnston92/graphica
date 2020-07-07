import React, { useState } from 'react'
import PictureModal from './PictureModal'

const ShowModal = () => {

  const [show, setShow] = useState(false);
  
  const handleClick = (e) => {
    e.preventDefault()
    setShow(!show) 
  }





  return (
    <>
    <button onClick={handleClick}>Click to add Pic</button>
    <PictureModal show={show} clickMe={handleClick}/>
    </>
  )
}

export default ShowModal