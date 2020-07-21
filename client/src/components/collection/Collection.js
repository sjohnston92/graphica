import React, { useEffect } from 'react';
import styled from 'styled-components';
import Feed from '../home/Feed';
import CollectionDescription from './CollectionDescription';
import CollectionFeed from './CollectionFeed';


const Collection = (props) => {

  useEffect(() => { props.toggleCatbar(true)}, []) ;

  return(

    <Wrapper>
      <Title>
      </Title>
      <CollectionFeed />
      
    </Wrapper>
  )
}
// styled components


const Wrapper = styled.div`
`
const Title = styled.div`
`


export default Collection;