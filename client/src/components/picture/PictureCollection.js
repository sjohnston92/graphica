import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CollectionImage from './CollectionImage'
import styled from "styled-components";

const PictureCollection = (props) => {
  const [ pics, setPics ] = useState([]);
  const [ collection, setCollection ] = useState(null);
  
  useEffect(() => {
    props.fetchCollection(props.pictureCollection.collection_id, props.pictureCollection.user_id)
      .then( res => {
        setCollection(res.data);
        return axios.get(`/api/collections/${res.data.id}/collection_pictures`)
      })
      .then((res) => setPics(res.data))
      .catch(console.log)
  }, [])

  return (
    <Container>
      <div>
        { collection && 
          <CollectionText> 
            part of 
            <a href="url">{" " + collection.title + " "}</a> 
            collection 
          </CollectionText>
        }
      </div> 
      <PictureContainer>
        {pics.map(pic => (
          <>
            <CollectionImage 
              toggle={props.toggle} 
              picId={pic.picture_id} 
              runFetch={props.runFetch} 
            />
          </> 
        ))}
      </PictureContainer>
    </Container>
  )
}

const Container = styled.div`
  display: flex;
  flex-direction: column;
`
const PictureContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100px;
`

const CollectionText = styled.span`
  align-self: flex-end;
`


export default PictureCollection;

