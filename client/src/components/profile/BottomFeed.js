import React from 'react';
import Feed from '../home/Feed';
import ShowModal from '../modal/ShowModal';
import styled from 'styled-components';

const BottomFeed = () => (
  <>
    <ShowModal /> 
    <FeedDiv>
      <Feed />
    </FeedDiv> 
  </>
)

const FeedDiv = styled.div`
padding-top: 5%
  
`

export default BottomFeed;