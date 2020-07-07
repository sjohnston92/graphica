import React from 'react';

import styled from 'styled-components';

const SearchBar = () => (

<StyledInput type="text" name="formName" placeholder="Find something new..."/>

)

const StyledInput = styled.input`
border: none;

height: 35px;

width: 525px;
box-sizing: border-box;
outline: none
`
export default SearchBar