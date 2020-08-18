import React, { useState, useEffect} from 'react';
import CollectionCard from './CollectionCard'
import styled from 'styled-components';
import axios from 'axios';
import useRenderColumns from '../../hooks/useRenderColumns';

const CollectionFeed = ({ loading, setLoading, ...props }) => {
  const [ otherPics, setOtherPics ] = useState([]);
  const { columnArrays, renderColumns } = useRenderColumns();

  useEffect(() => {
    const newarray = []
    if (props.otherPicIds.length === 0) setLoading(false);
    props.otherPicIds.map( id => (
      axios.get(`/api/pictures/${id}`)
        .then(res => {
          setLoading(false)
          newarray.push(res.data)
          if (newarray.length === props.otherPicIds.length) {
            setOtherPics(newarray.sort((a, b) => (a.id > b.id) ? 1 : -1))
          }
        })
        .catch(console.log)
    ))
  }, [props.otherPicIds])

  useEffect(() => {
    if (props.adding) {
      renderColumns(otherPics)
    } else {
      renderColumns(props.pictures)
    }
  }, [props.pictures, otherPics, props.adding])

  const addPicture = (incomingPicture) => {
    setOtherPics( otherPics.filter(a => a.id !== incomingPicture.id)) 
    props.addPicture(incomingPicture)
  }
  
  const updateFeedState = (incomingId) => {
    props.deletePicture(incomingId)
  }

  const returnColumns = (input) => (
    <>
      {input.length > 0 
        ?
          <FeedDiv>
            <ColumnContainer>
              {columnArrays[0].map(listItem =><><CollectionCard key={listItem.id} picture={listItem} addPicture={addPicture} adding={props.adding} removing={props.removing} removeImage={props.removeImage} updateFeedState={updateFeedState}/></>)}
            </ColumnContainer>
            <MiddleContainer>
              {columnArrays[1].map(listItem =><><CollectionCard key={listItem.id} picture={listItem} addPicture={addPicture} adding={props.adding} removing={props.removing} removeImage={props.removeImage} updateFeedState={updateFeedState}/></>)}
            </MiddleContainer>
            <ColumnContainer>
              {columnArrays[2].map(listItem =><><CollectionCard key={listItem.id} picture={listItem} addPicture={addPicture} adding={props.adding} removing={props.removing} removeImage={props.removeImage} updateFeedState={updateFeedState}/></>)}
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

  return (
    <>
      {props.adding 
        ?
          <>
            { loading 
              ? 
                <NoContent> [ loading.. ] </NoContent>
              :
                <> { returnColumns(otherPics) } </>
            }
          </>
        :
          <>
            { returnColumns(props.pictures) }
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
