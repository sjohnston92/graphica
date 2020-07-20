import React, { useState, useEffect } from 'react'
import { Menu, Button} from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'
import axios from 'axios';
import styled from 'styled-components'
import { PictureConsumer } from '../../providers/PictureProvider'


const Catbar = (props) => {
  const [cats, setCats] = useState([])

  useEffect(() => {
    axios.get("/api/categories")
      .then( res => setCats(res.data))
      .catch(console.log)
  }, [])
  


  const handleClick1 = () => {  
    props.setQuery("")
    props.setCategoryId(1)
    props.resetPictures()
    props.categorySearch()
    
    // props.resetAndSearchPictures()
  }
  const handleClick2 = () => {  
    props.setQuery("")
    props.setCategoryId(2)
    props.resetPictures()
    props.categorySearch()
    
    // props.resetAndSearchPictures()
  }
  return (
  <>
      {/* {cats.map(cat => (
      <> */}
      <button onClick={handleClick1}>Animals</button>
      <button onClick={handleClick2}>Art</button>

      {/* <input value={cat.title} type="button"/> */}
      {/* </>

        )
      )} */}
   </>        
      
        
    
  )  
}
const ConnectedCatbar = (props) => (
  <PictureConsumer>
    {(value) => <Catbar {...props} {...value} />}
  </PictureConsumer>
);

export default ConnectedCatbar;