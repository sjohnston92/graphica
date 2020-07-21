import React, {useState, useEffect}  from 'react';
import styled from 'styled-components';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Redirect } from 'react-router-dom';
import axios from "axios";

//get collection / user id / user tagline 

const CollectionHeader = (props) => {
  const [ collections, setCollections ] = useState([])

  useEffect(() => {
    axios.get(`api/collections/${props.id}/collection_pictures`)
    .then( res => (setCollections(res.data)))
    .catch(console.log)
  }, [])

  return(
    
    <Wrapper>
      {props.collection.title}
    </Wrapper>
)
  }

const Wrapper = styled.div`
  width: 100%;
`

export default CollectionHeader;