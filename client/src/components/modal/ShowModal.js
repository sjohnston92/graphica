import React, { useState } from 'react'
import PictureModal from './PictureModal'
import Test from './Test'

const ShowModal = () => {
  const [show, setShow] = useState(false);
  const children = [ <Test />]
  const toggle = () => { setShow(!show) }
  const open = true
  
  const handleClick = (e) => {
    e.preventDefault() //Do I need this line?
    setShow(!show) 
  }

  return (
    <>
    <button onClick={handleClick}>Click to add Pic</button>
      {show ? 
        <div> 
        <PictureModal children={children} toggle={toggle} open={open} />
        </div>
        : ""}
    </>
  )
}

export default ShowModal