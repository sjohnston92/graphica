
import React, { useState } from 'react';

const useModal = (isOpen = false) => {
  
  const [open, setOpen] = useState(isOpen)

  const toggle = () => setOpen(!open)

  return { open, toggle };
}

export default useModal;




  