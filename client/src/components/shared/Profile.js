import React from 'react';
import { Header } from 'semantic-ui-react';
import styled from 'styled-components';

const Profile = () => (
  <Container>
    <Title>
      <Header as="h3" textAlign="center"></Header>
    </Title>
  </Container>
)





// styled components
const Title = styled.h1`
position: absolute;
width: 1440px;
height: 429px;
left: 0px;
top: 48px;

background: linear-gradient(89.41deg, #FFFFFF 37.43%, rgba(255, 255, 255, 0) 90.74%), url(https://s3-alpha-sig.figma.com/img/34a0/e334/638e4dd54c4306833b2b8b556c87c435?Expires=1594598400&Signature=NWt0gd0ujbEZ~O~hQENKmxhGqCrj4auB857xLffYzx2rWILJHWZ2dVTLJjOJbdF-~EvYn2YQTkzo--a3MQB19P5T3DA-aPWjK1E6CgbY-mi8vTN840PrAvKFdIVw1vDn~I3CI8iK99Ky9OFzP~Eq7tsxPhneZEN0TGyUp9pVwobW42i6AGfSq6JQZOTGsLdGxhfBimq7AjQ9XIX0LCOF3C3MkHNUPs9qbk6bk1NEc1gAy~Yxr0laWRDsnqfXjYQxB7PiR4q5PDIJdJCpJnLSg9adBrF-CLj6XylWV8iHJvT1wQLjaG~4QUMEOkCVRLfplSkXtSMiPJwPkC5fdUTNmA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA);
`;

const Container = styled.section`
  padding: 8em;
  background: ;
`;

// this is the line under the secondary nav bar for recent collection settings
// const Line = styled.seciton`
// position: absolute;
// width: 1352px;
// height: 0px;
// left: 44px;
// top: 549px;

// // border: 1px solid rgba(39, 39, 53, 0.75)`;

// const profileImage = styled.section`
// position: absolute;
// width: 186px;
// height: 186px;
// left: 46px;
// top: 115px;

// background: url(guy-making-strange-face.jpg)`;

export default Profile;