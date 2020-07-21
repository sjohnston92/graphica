import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../shared/Navbar';
import CollectionHeader from './CollectionHeader';



const CollectionShow = (props) => {

  const description = props.description;
  const title = props.title;

  return(
    
      <Wrapper>
        <Navbar />
        <CollectionHeader />
      </Wrapper>
  )
}

const Wrapper = styled.div`
`

const Banner = styled.div`
`

export default CollectionShow;