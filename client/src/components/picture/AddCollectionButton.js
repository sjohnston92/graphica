import React, { useState } from 'react';
import { AuthConsumer } from '../../providers/AuthProvider';
import CollectionForm from '../new/CollectionForm'
import AddCollectionToPicture from '../new/AddCollectionToPicture';
import axios from 'axios';
import addImg from '../../img/add.png';
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
              <Wrapper>
                <AddToCollection onClick={()=>toggle()} >
                  <AddDiv image={addImg} />
                  add to a collection 
                </AddToCollection>
                <Modal onClose={toggle} open={open}>               
                  <AddOrCreateCollection toggleModal={toggle}/>
                </Modal>
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