import React, { useState, useEffect } from 'react';
import { Form } from 'semantic-ui-react';
import styled from 'styled-components';
import axios from 'axios';


const SearchBar = (props) => {

  const [query, setQuery ] = useState("")
  const handleSubmit = (e) => {
    e.preventDefault()

    axios.get(`/api/pictures/search/?search=${query}`)
      .then(res => props.searchPics(res.data))
      .catch(console.log)
  }

  const handleChange = (event) => { setQuery(event.target.value) } 

  return (
    <form onSubmit={handleSubmit}>
    <StyledInput onChange={handleChange} type="text" name="formName" value={query} placeholder="Find something new..."/>
    </form>
  )
}

const StyledInput = styled.input`
border: none;

height: 35px;

width: 525px;
box-sizing: border-box;
outline: none
`
export default SearchBar