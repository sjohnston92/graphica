import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../shared/Navbar';
import CollectionHeader from './CollectionHeader';
import CollectionFeed from './CollectionFeed';
import axios from 'axios';

const CollectionShow = (props) => {
  const [collection, setCollection ] = useState(null);

  useEffect(() => {
    console.log(props)
    axios.get(`/api/collections/${props.match.params.id}`)
    .then( res => setCollection(res.data))
    .catch(console.log)
  }, [])

  return(
    
      <Wrapper>
        {collection && 
          <>
            <CollectionHeader collection={collection}/>
            {/* <CollectionFeed /> */}
          </>
        }
      </Wrapper>
  )
}

const Wrapper = styled.div`
`

const Banner = styled.div`
`

export default CollectionShow;