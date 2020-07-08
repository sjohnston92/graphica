import React from 'react';
import styled from 'styled-components';
import ProfileNavbar from './ProfileNavbar';
import Feed from '../home/Feed';
import AboutMe from './AboutMe';
import Feed2 from '../home/Feed';


const Profile = () => (
  <Wrapper>

    <BannerImage>
      <UserAvatar />
      <AboutMe />
      {/* <Name /> */}
    </BannerImage>
    <ProfileNavbar />
    <Line />
    <FeedDiv>
      <Feed />
    </FeedDiv>
  </Wrapper>
)



const Wrapper = styled.div`
`
// styled components
const BannerImage = styled.div`
  width: 100%;
  height: 33vh;
  display: flex;
  align-items: center;
  min-height: 429px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: linear-gradient(89.41deg, #FFFFFF 37.43%, rgba(255, 255, 255, 0) 90.74%), url(https://s3-alpha-sig.figma.com/img/34a0/e334/638e4dd54c4306833b2b8b556c87c435?Expires=1594598400&Signature=NWt0gd0ujbEZ~O~hQENKmxhGqCrj4auB857xLffYzx2rWILJHWZ2dVTLJjOJbdF-~EvYn2YQTkzo--a3MQB19P5T3DA-aPWjK1E6CgbY-mi8vTN840PrAvKFdIVw1vDn~I3CI8iK99Ky9OFzP~Eq7tsxPhneZEN0TGyUp9pVwobW42i6AGfSq6JQZOTGsLdGxhfBimq7AjQ9XIX0LCOF3C3MkHNUPs9qbk6bk1NEc1gAy~Yxr0laWRDsnqfXjYQxB7PiR4q5PDIJdJCpJnLSg9adBrF-CLj6XylWV8iHJvT1wQLjaG~4QUMEOkCVRLfplSkXtSMiPJwPkC5fdUTNmA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA);
`;
// css calc function for accurate vh for the image
const UserAvatar = styled.div`
  width: 186px;
  height: 186px;
  border-radius: 100%;
  margin-left: 5rem;
  margin-top: -10rem;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(https://s3-alpha-sig.figma.com/img/ec66/6407/9e9f7a7ff4ae4cd1ece6422aab9a5377?Expires=1594598400&Signature=V-PNeXDpn62x6xlJcsTX1hYnIEbnfWD8Y1lApqwAb0SKUUE6eAmUjEW8QPrI7cRZJ10N8LJYtw-01vD~fIgPyEKMoigjrliLDsTEour3oA6oJRay0OvT00r3ez9m5s2ka1GgwOKdBcIe5qBHzPHkiJ1NzF~p262Tfzn4OZFSHXyMxvebTyJRXHsQhM2LiFTTrDCPttv8SROOKmKDkz7Yth05vYAE9NaUUqdHJydk9p1NDXLSaBA0dnqQDrsuETVzqFf0~4LSjV5xme4TbYbwpOfEtNtcPWdY7pov6ww1pZ7gZyGk0xWIXEhcXjS0kcfhpzD-jXIFHt3hgF5RMrMojA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA);
`;

// line underneath
const Line = styled.div`
border: 1px solid rgba(39, 39, 53, 0.75);
`;

const FeedDiv = styled.div`
padding-top: 5%
  
`
export default Profile;