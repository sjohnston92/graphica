import React, { useState, useEffect } from 'react';
import { Form } from 'semantic-ui-react';
import styled from 'styled-components';
import axios from 'axios';
import { FeedConsumer } from '../../providers/FeedProvider'
import useTrigger from '../../hooks/useTrigger'

const NavSearchBar = (props) => {
  
  useTrigger(props.query, 500, () => {
    props.setCategoryId(null)
    props.resetAndSearchPictures();
  });

  return (
    <StyledInput
      type="text"
      name="formName"
      value={props.query}
      placeholder="Find something new . . ."
      onChange={(e) => props.setQuery(e.target.value)}
      
    />
  )
}

const StyledInput = styled.input`
  border: none;
  height: 35px;
  width: 10rem;
  box-sizing: border-box;
  outline: none;
  font-family: Montserrat;
  ::placeholder {
    font-family: Montserrat;
    color: black;
  }
`
const ConnectedNavSearchBar = (props) => (
  <FeedConsumer>
    {(value) => <NavSearchBar {...props} {...value} />}
  </FeedConsumer>
);

export default ConnectedNavSearchBar;