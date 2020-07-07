
// const useModal = () => {

//   const [open, setOpen] = useState(false)

//   const toggle = () => setOpen(!open)

//   return ({open, {toggle}})
// }
import React, { useState } from 'react';
import Modal from '../components/modal/Modal'

 
const useModal = (isOpen) => {

  const [open, setOpen] = useState(isOpen)
  // const setOpen(isOpen)
  // const toggle = () => {console.log(data)}
  // console.log("using Modal")
  // toggle()
  // const [test, setTest] = useState('test value')

  const toggle = () => setOpen(!open)


  return (

<>
    <div> Hello </div>
  <Modal onClose={toggle} open={open}>     
      "this is the HELLO MODAL"     
  </Modal> 
  </>
  )

}

export default useModal


  