import React, { useState } from 'react'
import useModal from '../../hooks/useModal';
import AddToExisting from './AddToExisting';
import AddToNew from './AddToNew'

const AddOrCreateCollection = (props) => {
  const [ toggle, setToggle ] = useState(true)
  const addToExisting = () => setToggle(true)
  const addToNew = () => setToggle(false)

  return (
    <>
      { toggle 
        ? <button onClick={addToNew}> Add To New Collection </button>
        : <button onClick={addToExisting}> Add To Existing Collection </button>
      }
      { toggle 
        ? <AddToExisting toggleModal={props.toggleModal}/>
        : <AddToNew toggleModal={props.toggleModal}/>
      }
    </>
  )
}

export default AddOrCreateCollection