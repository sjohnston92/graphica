import React from 'react';
// import { Header } from 'semantic-ui-react';
import styled from 'styled-components';
import Card from '../home/Card';
// import Feed from '../home/Feed';
import Feed2 from '../home/Feed';


const Collection = () => (
  <Wrapper>

    <Title>
    </Title>
    <FeedDiv>
      <Feed2 />
    </FeedDiv>
  </Wrapper>
)
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
const FeedDiv = styled.div`
padding-top: 5%
  
`

export default Collection;