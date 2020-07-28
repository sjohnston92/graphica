import React from 'react';
import { AuthConsumer, } from "../../providers/AuthProvider";
import { Button, Form, Segment, Header, Grid, } from 'semantic-ui-react';
import Dropzone from 'react-dropzone';
import logoFont from '../../fonts/Elianto-Regular.otf';
import store from '../../img/login_page.jpg'
import styled from "styled-components";

class Register extends React.Component {
  state = { email: '', password: '', passwordConfirmation: '', first_name: '', last_name: '', tagline: '', file: '' };
  
  componentDidMount() { this.props.toggleCatbar(false) }

  onDrop = (files) => {
    const blob = new Blob([files[0]], { type: 'image/png' });
    const url = URL.createObjectURL(blob);
    this.setState({ 
      formValues: { ...this.state.formValues, file: files[0] },
      url,
    }) 
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, passwordConfirmation, file } = this.state;
    const { auth: { handleRegister, }, history, } = this.props;

    if (password === passwordConfirmation)
      handleRegister( this.state , history);
    else
      alert('Passwords Do Not Match!')
  }
  
  handleChange = (e) => {
    const { name, value, file} = e.target;
    this.setState({ [name]: value, });
  }
  
  render() {
    const { email, password, passwordConfirmation, first_name, last_name, tagline, file } = this.state;
    
    return (
      <Row>
        <PictureGroup>
          <LoginImage>
            <ImageContents>
              <h2>Welcome to Graphica!</h2>
              <p>
                Discover
              </p>
              <p>
                Experience
              </p>
              <p>
                Learn
              </p>
              <br></br>
            </ImageContents>
      </LoginImage>
    </PictureGroup>
    <LoginGroup>
      <Segment basic>
        <Header as='h1' textAlign='left'>Sign Up</Header>
        <Form onSubmit={this.handleSubmit}>
        <Grid.Column width={4}>
          {/* <Dropzone
            onDrop={this.onDrop}
            multiple={false}
          >
            {({ getRootProps, getInputProps, isDragActive}) => {
              return (
                <div
                  {...getRootProps()}
                  style={styles.dropzone}
                >
                  <input {...getInputProps()} />
                  {
                    isDragActive ?
                      <p>Already loaded</p> :
                      <p>Your picture here!</p>
                  }
                </div>
              )
            }}
          </Dropzone> */}
        </Grid.Column>
        <br></br>
        <Form.Input
            label="First Name"
            required
            min-width="22%"
            name='first_name'
            value={first_name}
            placeholder='First Name'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Last Name"
            required
            name='last_name'
            value={last_name}
            placeholder='Last Name'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Email"
            required
            autoFocus
            name='email'
            value={email}
            placeholder='Email'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Password"
            required
            name='password'
            value={password}
            placeholder='Password'
            type='password'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Password Confirmation"
            required
            name='passwordConfirmation'
            value={passwordConfirmation}
            placeholder='Password Confirmation'
            type='password'
            onChange={this.handleChange}
          />
          <Form.Input
            label="Bio"
            required
            name='tagline'
            value={tagline}
            placeholder='Tell us a little about yourself'
            type='tagline'
            onChange={this.handleChange}
          />
          <Segment textAlign='center' basic>
            <Button primary type='submit'>Submit</Button>
          </Segment>
        </Form>            
      </Segment>
      </LoginGroup>
    </Row>
    )
  }
}
const styles = {
  dropzone: {
    height: "150px",
    width: "250px",
    border: "1px dashed black",
    borderRadius: "5px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    padding: "10px",
  },
}

const Row = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  width: 100%;
`

const PictureGroup = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
flex: 1;

@media (max-width: 812px;) {
  max-width: 400px;
}
`

const LoginImage = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  min-height: 725px;
  color: white;
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
  background-image: url(https://res.cloudinary.com/graphica/image/upload/v1593188740/droplet_hv3anl.jpg
    );
`

const LoginGroup = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  margin-top: 1rem;
  margin-left: 10rem;
  flex: 1;
`

const ImageContents = styled.div`
  font-family: Montserrat;
  padding-top: 2rem;
  padding-left: -35rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  margin-left: 2rem;
`;

export default class ConnectedRegister extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Register { ...this.props } auth={auth} /> }
      </AuthConsumer>
    )
  }
}


