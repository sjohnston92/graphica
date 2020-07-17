import React from 'react';
import styled from 'styled-components';
import ProfileNavbar from './ProfileNavbar';
import BottomFeed from './BottomFeed';
import ProfileHero from './ProfileHero';
import CollectionTab from './CollectionTab';
import SettingsTab from './SettingsTab';
import axios from "axios";
import { AuthConsumer } from "../../providers/AuthProvider";


class Profile extends React.Component {
  state = { currentTab: "recent", user: null, isCurrentUser: false }
  
  componentDidMount() {
    this.props.toggleCatbar(false)
    axios.get(`/api/users/${this.props.match.params.id}`)
      .then((res) => {
        const { user: { id } } = this.props.auth;
        const isCurrentUser = res.data.id === id;
        this.setState({ user: res.data, isCurrentUser });
      })
      .catch(console.log);
  } 

  setUser = (user) => {
    this.setState({ user });
  }

  changeTab = (currentTab) => {
    this.setState({ currentTab });
  }

  renderBottom = () => {
    switch(this.state.currentTab) {
      case "recent":
        return this.state.user ? <BottomFeed user={this.state.user} isCurrentUser={this.state.isCurrentUser} /> : null
          // collections modal needs to go next to showModal below (it's the second button)
      case "collections":
        return this.state.user ? <CollectionTab user={this.state.user} /> : null
      case "favorites":
        return <p>Favorites go here</p>
      case "settings":
        return this.state.user ? <SettingsTab setUser={this.setUser} user={this.state.user} /> : null
      default:
        return null
    }
  }

  render() { 
    return (
      <Wrapper>
        { this.state.user && <ProfileHero user={this.state.user} /> }
        <ProfileNavbar changeTab={this.changeTab} isCurrentUser={this.state.isCurrentUser}/>
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

const ConnectedProfile = (props) => (
  <AuthConsumer>
    { (auth) => <Profile {...props} auth={auth} /> }
  </AuthConsumer>
)

export default ConnectedProfile;