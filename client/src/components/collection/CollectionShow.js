import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../shared/Navbar';
import CollectionHeader from './CollectionHeader';
import CollectionFeed from './CollectionFeed';
import axios from 'axios';

const CollectionShow = (props) => {
  const [collection, setCollection] = useState(null);
  const [user, setUser] = useState(null);
  const [pictures, setPictures] = useState([]);

  console.log(pictures)

  // get collection and user of collection
  useEffect(() => {
    axios.get(`/api/collections/${props.match.params.id}`)
      .then( res => {
        setCollection(res.data);
        return axios.get(`/api/users/${res.data.user_id}`);
      })
      .then((res) => setUser(res.data))
      .catch(console.log);
    }, []);

  // get pictures by collection
  useEffect(() => {
    axios.get(`/api/collections/${props.match.params.id}/pictures`)
      .then((res) => setPictures(res.data))
      .catch(console.log);
  }, [])
  

  return(
    
      <Wrapper>
        {collection && user &&
          <>
            <CollectionHeader collection={collection} user={user}/>
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