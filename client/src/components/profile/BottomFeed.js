import React from 'react';
import Feed from '../home/Feed';
import styled from 'styled-components';
import axios from "axios";
import PictureCollection from '../picture/PictureCollection';
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
        <FeedDiv>
          { this.renderPictures() }
        </FeedDiv> 
      </>
    )
  }
}


const FeedDiv = styled.div`
  width: 75vw;
  min-width: 1000px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: auto;
  margin-top: 5rem;
  align-items: center;
`

export default BottomFeed;