import React, { useState } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import CollectionForm from '../new/CollectionForm'
import AddCollectionToPicture from '../new/AddCollectionToPicture';
import axios from 'axios';
import addImg from '../../img/add.png';
import styled from 'styled-components';
const AddCollectionButton = (props) => {
  const [ toggleForm, setToggleForm ] = useState(false)
  const [ toggleNew, setToggleNew ] = useState(false)

  const handleClick = () => {
    setToggleForm(!toggleForm)
  }

  const handleCollectionId = (incomingId) => {
    axios.post(`/api/collection_pictures`, {picture_id: props.image.id, collection_id: incomingId})
    .then(res => {
      props.refreshCollectionState(res.data)
    })
    .catch(console.log)
  }

  return (
    <>  
      { props.authenticated && 
        <> 
          { 
            (props.user.id === props.userId) &&
              <Wrapper>
                <AddToCollection onClick={handleClick} >
                  <AddDiv image={addImg} />
                  { toggleForm ? <> Close </> : <> Add to a collection </> }
                </AddToCollection>

                { toggleForm && 
                  <>
                    { !toggleNew &&  <AddCollectionToPicture handleCollectionId={handleCollectionId}/> }  
                    <button onClick={()=>setToggleNew(!toggleNew)}>
                      { toggleNew ? <> Choose Existing </> : <> Create New </>}                    
                    </button>
                    { toggleNew && <CollectionForm /> }
                  </>
                }
              </Wrapper>
          }
        </>
      }
    </>
  )
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`


const AddToCollection = styled.div`
  align-items: center;
  display: flex;
  cursor: pointer;
`

const AddDiv = styled.div`

  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 100%;
  height: 30px;
  width: 30px;  
  cursor: pointer;


`

const ConnectedAddCollectionButton = (props) => (
  <AuthConsumer>
    {(value) => <AddCollectionButton {...props} {...value} />}
  </AuthConsumer>
);

export default ConnectedAddCollectionButton