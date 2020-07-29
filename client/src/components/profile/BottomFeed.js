import React from 'react';
import styled from 'styled-components';
import axios from "axios";
import RecentPicture from './RecentPicture';

class BottomFeed extends React.Component {
  state = { pictures: [] }

  componentDidMount() {
    this.getPictures()
  }
  
  componentDidUpdate(prevProps) {
    const prevId = prevProps.user.id;
    const currentId = this.props.user.id;
    if(prevId !== currentId) {
      this.getPictures();
    }
  }

  getPictures() {
    axios.get(`/api/users/${this.props.user.id}/pictures`)
    .then((res) => this.setState({ pictures: res.data }))
    .catch(console)
  }
  
  deletePicture = (incomingId) => {
    this.setState({ pictures: this.state.pictures.filter(a => a.id !== incomingId) })
  }

  renderPictures = () => this.state.pictures.map((pic) => (
    <RecentPicture picture={pic} key={pic.id} user={this.props.user} deletePicture={this.deletePicture} />
  ))

  render() {
    return (
      <>
        {(this.state.pictures.length > 0) 
          ? 
            <FeedDiv>
              { this.renderPictures() }
            </FeedDiv> 
          : 
            <NoContent>
              [ there are no pictures here yet ]
            </NoContent>
        }
      </>
    )
  }
}

const NoContent = styled.div`
  display: flex;  
  width: 100vw;
  justify-content: center;
  padding: 2rem;
  font-weight: 600;
  font-size: 16px;
  color: grey;
`

const FeedDiv = styled.div`
  width: 75vw;
  min-width: 1000px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
  padding-top: 5%;
`

export default BottomFeed;