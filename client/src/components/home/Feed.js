import React from 'react';
import styled from 'styled-components';
const Feed = () => (
  
  
  
  <Wrapper>
    <FeedCardOne>

    </FeedCardOne>
    <FeedCardTwo>

    </FeedCardTwo>
    <FeedCardThree>

    </FeedCardThree>
  
  </Wrapper>
)

const Wrapper = styled.div`


`
const FeedCardOne = styled.div`
background: url('https://res.cloudinary.com/graphica/image/upload/v1593188740/space-station_zzsqub');
width: 30%;
float: left;
margin: 1.66%;
height: 400px !important;
object-fit: cover;
`

const FeedCardTwo = styled.div`
background: url('https://res.cloudinary.com/graphica/image/upload/v1593188739/camera_s9aj6g.jpg');
width: 30%;
float: left;
margin: 1.66%;
height: 400px !important;
object-fit: cover;
`

const FeedCardThree = styled.div`
background: url('https://res.cloudinary.com/graphica/image/upload/v1593472350/mountains2_erpk3m.jpg');
width: 30%;
float: left;
margin: 1.66%;
height: 400px !important;
object-fit: cover;

`

export default Feed