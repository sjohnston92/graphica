import React from 'react';
import Feed from '../home/Feed';
import styled from 'styled-components';

const BottomFeed = () => (
  <>
    <FeedDiv>
      <Feed />
    </FeedDiv> 
  </>
)

const FeedDiv = styled.div`
padding-top: 5%
  
`

export default BottomFeed;