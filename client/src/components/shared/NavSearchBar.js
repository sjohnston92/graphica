import React, { useState, useEffect } from 'react';
import { Form } from 'semantic-ui-react';
import styled from 'styled-components';
import axios from 'axios';
import { FeedConsumer } from '../../providers/FeedProvider'
import useTrigger from '../../hooks/useTrigger'

//Can be made into 1 component with other search bar, and styles are props

const NavSearchBar = (props) => {
  
  useTrigger(props.query, 500, () => {
    if (props.categoryId) return;
    props.resetAndSearchPictures();
    props.setNoMorePictures(false)
    props.setQuerySearch(props.query)
  });

  return (
    <StyledInput
      type="text"
      name="formName"
      value={props.query}
      placeholder="Find something new..."
      onChange={(e) => {
        props.setQuery(e.target.value)
        props.setCategoryId(null)
      }}
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