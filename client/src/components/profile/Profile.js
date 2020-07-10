import React from 'react';
import styled from 'styled-components';
import ProfileNavbar from './ProfileNavbar';
import BottomFeed from './BottomFeed';
import ProfileHero from './ProfileHero';
import CollectionTab from './CollectionTab';
import SettingsTab from './SettingsTab';



class Profile extends React.Component {
  state = { currentTab: "recent" }
  
  changeTab = (currentTab) => {
    this.setState({ currentTab });
  }

  renderBottom = () => {
    switch(this.state.currentTab) {
      case "recent":
        return (
          // collections modal needs to go next to showModal below (it's the second button)
          <>
            <BottomFeed />
          </>
        )
      case "collections":
        return (
          <CollectionTab />
        )
      case "favorites":
        return (
          <p>Favorites go here</p>
        )
      case "settings":
        return (
          <SettingsTab />
        )
      default:
        return null
    }
  }

  render() {
    return (
      <Wrapper>
        <ProfileHero />
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

// line underneath
const Line = styled.div`
border: 1px solid rgba(39, 39, 53, 0.75);
`;

const ProfileBottom = styled.div`
  width: 100%;
`

export default Profile;