import React, { useState, useEffect } from 'react'
import { Menu, Button} from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'
import axios from 'axios';
import styled from 'styled-components'
import { FeedConsumer } from '../../providers/FeedProvider'

const Catbar = (props) => {
  const [cats, setCats] = useState([])

  // useEffect(() => {
  //   axios.get("/api/categories")
  //     .then( res => setCats(res.data))
  //     .catch(console.log)
  // }, [])
  
  const handleClick1 = () => {  
    props.setCategoryId(1)
    props.categorySearch(1)
  }
  const handleClick2 = () => {  
    props.setCategoryId(2)
    props.categorySearch(2)
  }
  const handleClick3 = () => {  
    props.setCategoryId(3)
    props.categorySearch(3)
  }
  const handleClick4 = () => {  
    props.setCategoryId(4)
    props.categorySearch(4)
  }
  const handleClick5 = () => {  
    props.setCategoryId(5)
    props.categorySearch(5)
  }
  const handleClick6 = () => {  
    props.setCategoryId(6)
    props.categorySearch(6)
  }
  const handleClick7 = () => {  
    props.setCategoryId(7)
    props.categorySearch(7)
  }

  return (
  <>
      <button onClick={handleClick1}>Animals</button>
      <button onClick={handleClick2}>Art</button>
      <button onClick={handleClick3}>Other</button>
      <button onClick={handleClick4}>Nature</button>
      <button onClick={handleClick5}>Places</button>
      <button onClick={handleClick6}>People</button>
      <button onClick={handleClick7}>Technology</button>
   </>           
  )  
}
const ConnectedCatbar = (props) => (
  <FeedConsumer>
    {(value) => <Catbar {...props} {...value} />}
  </FeedConsumer>
);

export default ConnectedCatbar;