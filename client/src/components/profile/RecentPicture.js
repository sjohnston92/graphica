import React from 'react';
import styled from 'styled-components';
import Modal from '../modal/Modal';
import PictureShow from '../picture/PictureShow';
import { ImageConsumer } from '../../providers/ImageProvider';


class RecentPicture extends React.Component {
  state = { open: false }

  toggle = () => this.setState({ open: !this.state.open });

  toggleAndSetId = () => {
    this.props.setImageId(this.props.picture.id)
    this.toggle()
  }

  render() {
    const { picture } = this.props;
    
    return(
      <Container>
        <Modal onClose={this.toggle} open={this.state.open}>     
          <PictureShow />   
        </Modal>  
        { picture.title }
        <ProfileCard url={picture.url} onClick={this.toggleAndSetId} />
        { picture.description }
      </Container>
    )
  }
}

const Container = styled.div`
  margin: 20px;
`

const ProfileCard = styled.div`
  width: 30rem;
  height: 30rem;
  flex-shrink: 0;
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  background-image: url(${props => props.url});
`;

const ConnectedRecentPicture = (props) => (
  <ImageConsumer>
    {(value) => <RecentPicture {...props} {...value} />}
  </ImageConsumer>
);

export default ConnectedRecentPicture;