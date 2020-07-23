import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import Navbar from '../shared/Navbar';
import CollectionHeader from './CollectionHeader';
import CollectionFeed from './CollectionFeed';
import axios from 'axios';
import EditCollection from './EditCollection'
import { Redirect } from 'react-router-dom';

const CollectionShow = (props) => {
  const [collection, setCollection] = useState(null);
  const [user, setUser] = useState(null);
  const [pictures, setPictures] = useState([]);
  const [redirect, setRedirect ] = useState(null);

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
  
  const handleRes = (res) => setCollection(res.data);
  
  const deleteCollection = (incomingId) => {
    const result = window.confirm("Delete Collection? (This will not delete its pictures)")
    if (result) {
      axios.delete(`/api/collections/${incomingId}`)
        .then(res => setRedirect(`/Profile/${user.id}/?collections`))
        .catch(console.log)
    }
  }

  const deletePicture = (incomingId) => setPictures( pictures.filter(a => a.id !== incomingId ))

  return (
      <Wrapper>
        {collection && user &&
          <>
            {redirect && <Redirect to={redirect}/> }
            <CollectionHeader collection={collection} user={user}/>
            <EditCollection deleteCollection={deleteCollection} handleRes={handleRes} collection={collection}/>
            <CollectionFeed deletePicture={deletePicture} pictures={pictures}/>
          </>
        }
      </Wrapper>
  )
}

const Wrapper = styled.div`
`
export default CollectionShow;