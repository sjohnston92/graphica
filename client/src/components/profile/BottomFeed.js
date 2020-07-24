import React from 'react';
import Feed from '../home/Feed';
import styled from 'styled-components';
import axios from "axios";
import PictureCollection from '../picture/PictureCollection';
import RecentPicture from './RecentPicture';



class BottomFeed extends React.Component {
  state = { pictures: [] }

  componentDidMount() {
    axios.get(`/api/users/${this.props.user.id}/pictures`)
      .then((res) => this.setState({ pictures: res.data }))
      .catch(console)
  }

  renderPictures = () => this.state.pictures.map((pic) => (
    <RecentPicture picture={pic} key={pic.id} user={this.props.user} />
  ))

  render() {
    return (
      <>
        <FeedDiv>
          { this.renderPictures() }
        </FeedDiv> 
      </>
    )
  }
}


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