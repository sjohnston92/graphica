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
  <Wrapper>
      <Spacer></Spacer>
      <LinkDiv onClick={handleClick1}>animals</LinkDiv><Spacer></Spacer>
      <LinkDiv onClick={handleClick2}>art</LinkDiv><Spacer></Spacer>
      <LinkDiv onClick={handleClick3}>other</LinkDiv><Spacer></Spacer>
      <LinkDiv onClick={handleClick4}>nature</LinkDiv><Spacer></Spacer>
      <LinkDiv onClick={handleClick5}>places</LinkDiv><Spacer></Spacer>
      <LinkDiv onClick={handleClick6}>people</LinkDiv><Spacer></Spacer>
      <LinkDiv onClick={handleClick7}>technology</LinkDiv>
   </Wrapper>           
  )  
}

const Wrapper = styled.div`
position: fixed;
display: flex;
  align-items: center;
  background: grey;
  width: 100%;
  padding: 4px;
  opacity: 0.7;
  top: 3rem;
  z-index:1;
  
`
const Spacer = styled.div`
width: 40px;
`
const LinkDiv = styled.div`
  font-family: Montserrat;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  color: white;
  cursor: pointer;
`

const ConnectedCatbar = (props) => (
  <FeedConsumer>
    {(value) => <Catbar {...props} {...value} />}
  </FeedConsumer>
);

export default ConnectedCatbar;