import React from 'react';
import styled from 'styled-components';
import axios from 'axios';


class ProfileCollectionFeed extends React.Component {
  state = { collections: [], user: null }

  componentDidMount() {
    axios.get(`/api/users/${this.props.user.id}/collections`)
      .then((res) => this.setState({ collections: res.data }))
      .catch(console)
  }

  renderCollections = () => this.state.collections.map((pic) => (
    <ProfileCard />
  ))

  render() {
    return(
      <>
        <FeedDiv>
          { this.renderCollections() }
        </FeedDiv>
      </>
    )
  }
}

const ProfileCard = styled.div`
  width: 30rem;
  height: 30rem;
  flex-shrink: 0;
  margin: 20px;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(https://res.cloudinary.com/graphica/image/upload/v1594948579/ian-keefe-OgcJIKRnRC8-unsplash.jpg.jpg);
`;

const FeedDiv = styled.div`
  width: 75%;
  min-width: 1000px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
  padding-top: 5%;
`



export default ProfileCollectionFeed;