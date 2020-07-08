
import React, { useState } from 'react';
import Modal from '../components/modal/Modal'
import Test from "../components/modal/Test"
//import all component names here

//By the time I have a button run a toggle which setsOpen, I've created the
   //same component twice!!

 
const useModal = (isOpen = false) => {

  const [open, setOpen] = useState(isOpen)


  const toggle = () => setOpen(!open)


  return { open, toggle };
}


export default useModal;




  