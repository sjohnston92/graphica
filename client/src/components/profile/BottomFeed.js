import React from 'react';
import Feed from '../home/Feed';
import ShowModal from '../modal/ShowModal';
import styled from 'styled-components';
import axios from "axios";

class BottomFeed extends React.Component {
  state = { pictures: [] }

  componentDidMount() {
    axios.get(`/api/users/${this.props.user.id}/pictures`)
      .then((res) => this.setState({ pictures: res.data }))
      .catch(console)
  }

  renderPictures = () => this.state.pictures.map((pic) => (
    <ProfileCard url={pic.url} />
  ))

  render() {
    return (
      <>
        <ShowModal /> 
        <FeedDiv>
          { this.renderPictures() }
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
  background-image: url(${props => props.url});
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

export default BottomFeed;