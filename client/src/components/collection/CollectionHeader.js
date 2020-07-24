import React, {useState, useEffect}  from 'react';
import styled from 'styled-components';


//get collection / user id / user tagline 

const CollectionHeader = (props) => {

  console.log(props.user)

  return(
      <Wrapper>
        <HeaderColumn>
          <HeaderDiv>
            <HeaderTitle>{props.collection.title}</HeaderTitle>
            <HeaderName><BySpan>by:</BySpan> {props.user.first_name + " " + props.user.last_name}</HeaderName>
          </HeaderDiv>
          <HeaderDescription>{props.collection.description}</HeaderDescription>
        </HeaderColumn>
        <ImageDiv>
         <UserImage user={props.user} />
        </ImageDiv>
      </Wrapper>
  )
}


const Wrapper = styled.div`
  width: 100%;
  min-height: 429px;
  display: flex;
  margin-left: 20rem;
  margin-top: 3rem;
  justify-content: space-between;

`

const HeaderDiv = styled.div`
  display: flex;
  justify-content: ;
  width: 100%;
`

const HeaderTitle = styled.h1`
`
const HeaderColumn = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5rem;
`

const BySpan = styled.span`
  color: #59cade;
`

const HeaderName = styled.p`
 margin-left: 5rem;
 margin-top: 1rem;
`
const ImageDiv = styled.div`
  display-flex;
  justify-content: flex-start;
  width: 45%;
`

const HeaderDescription = styled.p`
 color: black;
`

const UserImage = styled.div`
  background-image: url(${props => props.user.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  width: 20rem;
  height: 20rem;
  border-radius: 100%;
  margin-top: 2%;
`

export default CollectionHeader;