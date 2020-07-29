import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CollectionImage from './CollectionImage'
import styled from "styled-components";
import RemoveImage from './RemoveImage';

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
  }, [props.pictureCollection])
 
  return (
    <Container>
      <div>
        { collection && 
          <RowDiv>
            <CollectionText> 
              part of 
              <StyledBlue href={`/collections/${props.pictureCollection.collection_id}`}>{" " + collection.title + " "}</StyledBlue> 
              collection 
            </CollectionText>
            <RemoveImage 
              refreshJunctionState={props.refreshJunctionState}
              image={props.image}
              userId={props.userId}
              pictureCollection={props.pictureCollection}
            />
          </RowDiv>
        }
      </div> 
      <PictureContainer>
        {pics.map(pic => (
          <>
            <CollectionImage 
              key={pic.id}
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

const StyledBlue = styled.a`
  color: #0099BA;
`

const RowDiv = styled.div`
  display: flex;
  align-items: left;
`
const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-shrink: 0;
`
const PictureContainer = styled.div`
  display: flex;
  justify-content: left;
  width: 78vw;
  overflow-x: auto;
  flex-shrink: 0;
`

const CollectionText = styled.span`
  align-self: flex-end;
  margin-left: 2rem;
`

export default PictureCollection;

