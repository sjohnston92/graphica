import React from 'react';
import styled from 'styled-components';
import ProfileNavbar from './ProfileNavbar';
import Feed from '../home/Feed';
// import UserName, { BioSubText } from './AboutMe';
// import UserEmail from './AboutMe';
import ContactModal from '../modal/ContactModal';
import ShowModal from '../modal/ShowModal';
import NewPictureModal from '../modal/NewPictureModal';


class Profile extends React.Component {
  state = { currentTab: "recent" }
  
  changeTab = (currentTab) => {
    this.setState({ currentTab });
  }

  renderBottom = () => {
    switch(this.state.currentTab) {
      case "recent":
        return (
          <>
            <NewPictureModal /> <ShowModal />
            <FeedDiv>
              <Feed />
            </FeedDiv> 
          </>
        )
      case "collections":
        return (
          <p>Collections go here</p>
        )
      case "favorites":
        return (
          <p>Favorites go here</p>
        )
      case "settings":
        return (
          <p>Settings go here</p>
        )
      default:
        return null
    }
  }

  render() {
    return (
      <Wrapper>
        <BannerImage>
          <BannerLeft>
            <BannerLeftTop>
              <UserAvatar />
              <BannerContents>
                <UserName>
                  Anthony Castanza
                </UserName>
                <UserEmail>
                  castanza@gmail.com
                </UserEmail>
                <ContactModal>
                  Contact Info
                </ContactModal>
              </BannerContents>
            </BannerLeftTop>
            <BioSubText>
              I’m a kickass part-time nature photographer that frequently takes helicopter flights for work. Check out my Oceanography collection. I’m open to working together. 
            </BioSubText>
          </BannerLeft>
        </BannerImage>
        <ProfileNavbar changeTab={this.changeTab} />
        <Line />
        <br></br>
        <ProfileBottom>
          { this.renderBottom() }
        </ProfileBottom>
      </Wrapper>
    )
  }
}



const Wrapper = styled.div`
`
// styled components
const BannerImage = styled.div`
  width: 100%;
  height: 33vh;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  min-height: 429px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: linear-gradient(89.41deg, #FFFFFF 37.43%, rgba(255, 255, 255, 0) 90.74%), url(https://s3-alpha-sig.figma.com/img/34a0/e334/638e4dd54c4306833b2b8b556c87c435?Expires=1594598400&Signature=NWt0gd0ujbEZ~O~hQENKmxhGqCrj4auB857xLffYzx2rWILJHWZ2dVTLJjOJbdF-~EvYn2YQTkzo--a3MQB19P5T3DA-aPWjK1E6CgbY-mi8vTN840PrAvKFdIVw1vDn~I3CI8iK99Ky9OFzP~Eq7tsxPhneZEN0TGyUp9pVwobW42i6AGfSq6JQZOTGsLdGxhfBimq7AjQ9XIX0LCOF3C3MkHNUPs9qbk6bk1NEc1gAy~Yxr0laWRDsnqfXjYQxB7PiR4q5PDIJdJCpJnLSg9adBrF-CLj6XylWV8iHJvT1wQLjaG~4QUMEOkCVRLfplSkXtSMiPJwPkC5fdUTNmA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA);
`;

const BannerLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin-left: 5rem;
`

const BannerLeftTop = styled.div`
  display: flex;
`

const BannerContents = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  margin-left: 2rem;
`

// css calc function for accurate vh for the image
const UserAvatar = styled.div`
  width: 186px;
  height: 186px;
  flex-shrink: 0;
  border-radius: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(https://s3-alpha-sig.figma.com/img/ec66/6407/9e9f7a7ff4ae4cd1ece6422aab9a5377?Expires=1594598400&Signature=V-PNeXDpn62x6xlJcsTX1hYnIEbnfWD8Y1lApqwAb0SKUUE6eAmUjEW8QPrI7cRZJ10N8LJYtw-01vD~fIgPyEKMoigjrliLDsTEour3oA6oJRay0OvT00r3ez9m5s2ka1GgwOKdBcIe5qBHzPHkiJ1NzF~p262Tfzn4OZFSHXyMxvebTyJRXHsQhM2LiFTTrDCPttv8SROOKmKDkz7Yth05vYAE9NaUUqdHJydk9p1NDXLSaBA0dnqQDrsuETVzqFf0~4LSjV5xme4TbYbwpOfEtNtcPWdY7pov6ww1pZ7gZyGk0xWIXEhcXjS0kcfhpzD-jXIFHt3hgF5RMrMojA__&Key-Pair-Id=APKAINTVSUGEWH5XD5UA);
`;

const UserName = styled.p`
  width: 425px;
  height: 16.64px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 24px;
  line-height: 17px;
  color: black;
`

//users email
const UserEmail = styled.p`
  width: 130px;
  height: 15px;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 12px;
  line-height: 15px;
  color: black;

`

  // about me under profile picture
const BioSubText = styled.p`
  width: 425px;
  height: 16.64px;
  margin-top:2rem;
  font-family: Montserrat;
  font-style: normal;
  font-weight: normal;
  font-size: 14px;
  line-height: 17px;
  color: black;
`


// line underneath
const Line = styled.div`
border: 1px solid rgba(39, 39, 53, 0.75);
`;

const ProfileBottom = styled.div`
  width: 100%;
`

const FeedDiv = styled.div`
padding-top: 5%
  
`
export default Profile;