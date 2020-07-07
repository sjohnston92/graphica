import React, { useState } from 'react'
import Modal from './Modal'
import Test from './Test'
import useModal from '../../hooks/useModal'
import { isStyledComponent } from 'styled-components'

const ShowModal = () => {
  const [open, setOpen] = useState(false)
  const toggle = () => setOpen(!open)


// const isOpen = useModal(true)
// const UsingModal = useModal(children)

// const handleClick = () => {
  
  // console.log(isOpen)
// }
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