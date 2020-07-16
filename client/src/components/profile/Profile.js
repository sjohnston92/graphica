import React from 'react';
import styled from 'styled-components';
import ProfileNavbar from './ProfileNavbar';
import BottomFeed from './BottomFeed';
import ProfileHero from './ProfileHero';
import CollectionTab from './CollectionTab';
import SettingsTab from './SettingsTab';
import axios from "axios";


class Profile extends React.Component {
  state = { currentTab: "recent", user: null }
  
  componentDidMount() {
    this.props.toggleCatbar(false)
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then((res) => this.setState({ user: res.data }))
      .catch(console.log);
  } 

  changeTab = (currentTab) => {
    this.setState({ currentTab });
  }

  renderBottom = () => {
    switch(this.state.currentTab) {
      case "recent":
        return this.state.user ? <BottomFeed user={this.state.user} /> : null
          // collections modal needs to go next to showModal below (it's the second button)
      case "collections":
        return this.state.user ? <CollectionTab user={this.state.user} /> : null
      case "favorites":
        return <p>Favorites go here</p>
      case "settings":
        return this.state.user ? <SettingsTab user={this.state.user} /> : null
      default:
        return null
    }
  }

  render() { 
    return (
      <Wrapper>
        { this.state.user && <ProfileHero user={this.state.user} /> }
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