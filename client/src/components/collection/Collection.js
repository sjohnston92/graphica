import React, { useEffect } from 'react';
import styled from 'styled-components';
import CollectionFeed from '../collection/CollectionFeed';


const Collection = (props) => {

  useEffect(() => { props.toggleCatbar(true)}, []) ;

  return(

    <Wrapper>
      <Title>
      </Title>
      <CollectionFeed />
      
    </Wrapper>
  )
}
// styled components
const Title = styled.div`
  width: 100%;
  height: 429px;
  display: flex;
  align-items: center;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  background-image: linear-gradient(0deg, rgba(39, 39, 53, 0.35), rgba(39, 39, 53, 0.35)), url(https://res.cloudinary.com/graphica/image/upload/v1593188742/beach_zgmqsw.jpg);
`;

const Wrapper = styled.div`
`


export default Collection;