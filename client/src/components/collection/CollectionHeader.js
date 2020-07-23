import React, {useState, useEffect}  from 'react';
import styled from 'styled-components';


//get collection / user id / user tagline 

const CollectionHeader = (props) => {

  console.log(props.user)

  return(
      <Wrapper>
          <HeaderDiv>
            <HeaderTitle>{props.collection.title}</HeaderTitle>
          <HeaderName><BySpan>by:</BySpan> {props.user.first_name + " " + props.user.last_name}</HeaderName>
        </HeaderDiv>
        <UserImage user={props.user} />
        <DescriptionDiv>
              <HeaderDescription>{props.collection.description}</HeaderDescription>
        </DescriptionDiv>
      </Wrapper>
  )
}


const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 429px;
  flex-wrap: wrap;
`

const HeaderDiv = styled.div`
  display: flex;
  flex-shrink: 0;
  margin-left: 5rem;
  justify-content: flex-start;
`

const HeaderTitle = styled.h1`
  width: 200px;
  height: 16.64px;
  font-weight: 900;
  font-size: 24px;
  line-height: 17px;
  color: black;
`

const BySpan = styled.span`
  color: #57aba9;
`

const HeaderName = styled.p`
`
const DescriptionDiv = styled.div`
  flex: 0 0 100%;
`

const HeaderDescription = styled.p`
  
 
`

const UserImage = styled.div`
  background-image: url(${props => props.user.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 20rem;
  height: 20rem;
  border-radius: 100%;
  float: right;
  align-content: flex-end;
  margin-left: 50%;

`

export default CollectionHeader;