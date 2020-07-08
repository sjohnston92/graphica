import React, { useState } from 'react'
import Modal from './Modal'
import Test from './Test'

const ShowModal = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)


  return (
   <>
    <button onClick={ toggle }>Click to add Pic</button>
    <Modal onClose={toggle} open={open}>     
      <Test />      
    </Modal>       
   </>

   
  )
}

export default ShowModal