import React, {useState, useEffect}  from 'react';
import styled from 'styled-components';
import { AuthConsumer } from '../../providers/AuthProvider';
import { Redirect } from 'react-router-dom';
import axios from "axios";

//get collection / user id / user tagline 

const CollectionHeader = (props) => {

  console.log(props.user)

  return(
    <Wrapper>
      <p>{props.collection.title}</p>
      <p>{props.collection.description}</p>
      <p>{props.user.first_name + " " + props.user.last_name}</p>
      <UserImage user={props.user} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  width: 100%;
  border: solid black 3px;
`

const UserImage = styled.div`
  background-image: url(${props => props.user.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 20rem;
  height: 20rem;
  border-radius: 100%;
`

export default CollectionHeader;