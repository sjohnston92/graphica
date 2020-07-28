import React, { useState } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import CollectionForm from '../new/CollectionForm'
import AddCollectionToPicture from '../new/AddCollectionToPicture';
import axios from 'axios';
import addImg from '../../img/add_circle_outline_24px.svg';
import styled from 'styled-components';
import AddOrCreateCollection from './AddOrCreateCollection';
import Modal from '../modal/Modal';
import useModal from '../../hooks/useModal';

const AddCollectionButton = (props) => {
  const { open, toggle } = useModal();
  
  return (
    <>  
      { props.authenticated && 
        <> 
          { 
            (props.user.id === props.userId ) &&
              <>
                <AddToCollection onClick={()=>toggle()} >
                  <AddDiv image={addImg} />
                  <TextDiv>
                    &nbsp;add to a collection 
                  </TextDiv>
                </AddToCollection>
                <Modal onClose={toggle} open={open}>               
                  <AddOrCreateCollection toggleModal={toggle}/>
                </Modal>
              </>
          }
        </>
      }
    </>
  )
}


const AddToCollection = styled.div`
  justify-content: left;
  display: flex;
  cursor: pointer;
  width: 200px;
  
`

const TextDiv = styled.div`
  color: #0099BA;

`
const AddDiv = styled.div`

  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  border-radius: 100%;
  height: 20px;
  width: 20px;  
  cursor: pointer;
  padding-top: 1rem;
`

const ConnectedAddCollectionButton = (props) => (
  <AuthConsumer>
    {(value) => <AddCollectionButton {...props} {...value} />}
  </AuthConsumer>
);

export default ConnectedAddCollectionButton