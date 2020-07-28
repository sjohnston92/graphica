import React from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';

class ProfileCollection extends React.Component {
  state = { pictures: [] }

  // get our pictures by collection
  componentDidMount() {
    axios.get(`/api/collections/${this.props.collection.id}/pictures`)
    .then((res) => this.setState({ pictures: res.data }))
    .catch(console.log)
  }




  render() {
    const { pictures } = this.state;
    
    return(
      <Container>
        {this.props.collection.title}
        <Link to={`/collections/${this.props.collection.id}`}>
          <PictureArea>
              <CollectionImage url={pictures[0] ? pictures[0].url : ""} />
            <PictureAreaRight>
              <CollectionImage url={pictures[1] ? pictures[1].url : ""} />
              <CollectionImage url={pictures[2] ? pictures[2].url : ""} />
            </PictureAreaRight>
          </PictureArea>
        </Link>
        {this.props.collection.description}
      </Container>
    )
  }
}

const Container = styled.div`
  margin: 20px;
  `
  
  const PictureArea = styled.div`
  display: flex;
  height: 30rem;
  width: 30rem;
  background-color: lightgrey;
`

const PictureAreaRight = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  height: 100%;
  width: 50%;
`

const CollectionImage = styled.div`
  width: 100%;
  height: 100%;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${props => props.url});
`;


export default ProfileCollection;