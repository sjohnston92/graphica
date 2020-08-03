import React, { useState, useEffect} from 'react';
import CollectionCard from './CollectionCard'
import styled from 'styled-components';
import axios from 'axios';

const CollectionFeed = (props) => {
  const [ otherPics, setOtherPics ] = useState([]);

  useEffect(() => {
    setOtherPics([])
    const newarray = []
    props.otherPicIds.map( id => (
      axios.get(`/api/pictures/${id}`)
        .then(res => {
          newarray.push(res.data)
          if (newarray.length === props.otherPicIds.length) {setOtherPics(newarray)}
        })
        .catch(console.log)
    ))
    console.log(newarray)
  }, [props.otherPicIds])

  
  const addPicture = (incomingPicture) => {
    setOtherPics( otherPics.filter(a => a.id !== incomingPicture.id)) 
    props.addPicture(incomingPicture)
  }
  const updateFeedState = (incomingId) => {
    props.deletePicture(incomingId)
  }
  
  const renderColumns = (input) => {
    const column_arrays = [[], [], []];
    let iterator = 0;

    input.forEach((listItem) => {
      column_arrays[iterator].push(listItem);
      if(iterator == 2) iterator = 0;
      else iterator ++;
    })
  
    return(
      <>
        {input.length > 0 
          ?
            <FeedDiv>
              <ColumnContainer>
                {column_arrays[0].map(listItem =><><CollectionCard key={listItem.id} picture={listItem} addPicture={addPicture} adding={props.adding} removing={props.removing} removeImage={props.removeImage} updateFeedState={updateFeedState}/></>)}
              </ColumnContainer>
              <MiddleContainer>
                {column_arrays[1].map(listItem =><><CollectionCard key={listItem.id} picture={listItem} addPicture={addPicture} adding={props.adding} removing={props.removing} removeImage={props.removeImage} updateFeedState={updateFeedState}/></>)}
              </MiddleContainer>
              <ColumnContainer>
                {column_arrays[2].map(listItem =><><CollectionCard key={listItem.id} picture={listItem} addPicture={addPicture} adding={props.adding} removing={props.removing} removeImage={props.removeImage} updateFeedState={updateFeedState}/></>)}
              </ColumnContainer>
            </FeedDiv>
          : 
            <NoContent> 
              <>
                { props.pictures === input &&
                  <> [ there are no pictures in this collection ] </>
                }
                { otherPics === input && 
                  <> [ all your pictures are in this collection ] </>
                }
              </>
            </NoContent>
        }
      </>
    )
  }

  return (
    <>
      {props.adding 
        ?
          <>
            {renderColumns(otherPics)}
          </>
        :
          <>
            {renderColumns(props.pictures)}
          </>
      }
    </>
  )
};


const NoContent = styled.div`
  display: flex;  
  width: 100vw;
  justify-content: center;
  padding: 2rem;
  font-weight: 600;
  font-size: 16px;
  color: grey;
`
const FeedDiv = styled.div`
  display: flex;
  // padding-right: 20px;
  // padding-top: 20px;
  width: 75vw;
  margin: auto;
  min-width: 1000px;
`
const ColumnContainer = styled.div`
  // margin-top: 20px;
  // margin-left: 20px;
  width: calc(100% / 3);
  @media (max-width: 1600px) {};
  @media (max-width: 1100px) {}
  @media only screen and (max-width: 800px) {}
`
const MiddleContainer = styled.div`
  margin: 0 25px;
  width: calc(100% / 3);
  @media (max-width: 1600px) {};
  @media (max-width: 1100px) {}
  @media only screen and (max-width: 800px) {}
`

export default CollectionFeed
