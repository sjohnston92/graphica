import React, { useState } from 'react';
import CollectionForm from './CollectionForm';
import { AuthConsumer } from '../../providers/AuthProvider';
import styled from 'styled-components';

const EditCollection = (props) => {
  const [ editing, setEditing ] = useState()
  
  const handleRes = (res) => {
    setEditing(false)
    props.handleRes(res)
  }

  const deleteCollection = () => {
    props.deleteCollection(props.collection.id)
  }

  return (
    <>
      {props.authenticated && props.user.id === (props.collection.user_id || 1) &&
        <>
          { editing 
            ? <CollectionForm handleRes={handleRes} collection={props.collection} />
            : 
              <ButtonWrapper>
                <EditButton onClick={()=>setEditing(true)}>Edit Collection</EditButton> 
                <DeleteButton onClick={deleteCollection}>Delete Collection</DeleteButton>
              </ButtonWrapper>
          }      
        </>
      }
    </>
  )
}

  const ButtonWrapper = styled.div `
    width: 75vw;
    display: flex;
    align-items: center;
    margin: 0 auto 0 auto;
    margin-bottom: 20px;
  `

  const EditButton = styled.button`
    width: 148px;
    height: 38px;
    
    background: #0099BA;
    box-shadow: 0px 2px 10px rgba(0, 153, 186, 0.5);
    border-radius: 4px;
    border: none;
    color: white;
  `

  const DeleteButton = styled.button`
    width: 148px;
    height: 38px;

    background: #0099BA;
    box-shadow: 0px 2px 10px rgba(0, 153, 186, 0.5);
    border-radius: 4px;
    color: white;
    margin-left: 20px;
    border: none;
    font-family: 'Montserrat',  sans-serif;
  `


  const ConnectedEditCollection = (props) => (
    <AuthConsumer>
        {(value) => <EditCollection {...props} {...value} />}
    </AuthConsumer>
  );
export default ConnectedEditCollection
