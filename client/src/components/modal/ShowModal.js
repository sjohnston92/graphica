import React, { useState } from 'react'
import PictureModal from './PictureModal'
import Feed from '../home/Feed'

const ShowModal = () => {

  const [show, setShow] = useState(false);
  const children = ["This is where you can put content in the modal"]
    const toggle = () => { 
    setShow(!show)
  }
  const open = true
  
  const handleClick = (e) => {
    e.preventDefault()
    setShow(!show) 
  }





  return (
    <>
    <button onClick={handleClick}>Click to add Pic</button>
  {show ? <div><PictureModal children={children} toggle={toggle} open={open} />
</div> : ""}
    
    </>
  )
}

export default ShowModal