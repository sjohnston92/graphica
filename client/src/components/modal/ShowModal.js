import React, { useState} from 'react'
import PictureModal from './PictureModal'

const ShowModal = () => {

  const [show, setShow] = useState(false);
  
  const handleClick = (e) => {
    e.preventDefault()
    //add toggle here
    setShow(true )
    // console.log(show)
  }





  return (
    <>
    <button onClick={handleClick}>Click to add Pic</button>
    <PictureModal show = {show} />
    </>
  )
}

export default ShowModal