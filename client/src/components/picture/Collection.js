import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import axios from 'axios';

const Collection = (props) => {
  const [ collection, setCollection ] = useState([])
  const id = props.collectionId
  const [ picSrc, setPicSrc ] = useState([])
  useEffect(() => {
    axios.get(`/api/collections/${id}/collection_pictures`)
      // .then(res => setCollection(res.data))
      .then(res => res.data.map(picture => loadPic(picture.id)) )
      .catch(console.log)
  }, [])

  function loadPic(picId) {
    axios.get(`/api/pictures/${picId}`)
      .then(res => setPicSrc(picSrc.concat(res.data.url)) )
      .catch(console.log)
  }
  return (
    <>
      {picSrc.map(url => (<Flex><li><StyledImg src={url} /></li> </Flex>))}
    </>
  )
}
//Got STUCK HERE
export default Collection

const Flex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 700px;
  height: 400px;
`



const StyledImg = styled.img`
  margin-top: 1rem;
  width: 50px;
`
