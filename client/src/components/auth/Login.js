import React from 'react';
import { AuthConsumer, } from "../../providers/AuthProvider";
import { Button, Form, Segment, Header, } from 'semantic-ui-react';
import {Link, withRouter } from 'react-router-dom';
import logoFont from '../../fonts/Elianto-Regular.otf';
import store from '../../img/login_page.jpg'
import styled from "styled-components";

class Login extends React.Component {
  state = { email: '', password: '' }
  
  componentDidMount() { this.props.toggleCatbar(false) }

  handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, } = this.state;
    this.props.auth.handleLogin({ email, password, }, this.props.history);
  }
  
  handleChange = (e) => {
    const { name, value, } = e.target;
    this.setState({ [name]: value, });
  }
  
  render() {
    const { email, password, } = this.state;
    
    return (
  <Wrapper>
    <Row>
    <PictureGroup>
      <LoginImage>
            <ImageContents>
              <h2>Free Forever</h2>
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
      <GraphicaLogo>
        GRAPHICA
      </GraphicaLogo>
      <GraphicaParagraph>
        Graphica is a novel photo-sharing app that allows users to share their collections. Create an account to start sharing and connecting with other photographers!
      </GraphicaParagraph>
      <SegmentWrapper>
      <Segment basic>
        <Header as='h1' style={{fontSize: '36px'}}>Login  <Link to ='Register' style={{fontSize: '14px'}}>or Sign Up</Link>

        </Header>
        
        <Form onSubmit={this.handleSubmit}>
          <Form.Input
            label="Email"
            autoFocus
            required         
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
          <Segment basic>
            <Button primary type='submit'>Submit</Button>
          </Segment>
            </Form>
          </Segment>
        </SegmentWrapper>
        <AboutUs>
            <Link to={'../about_us'}>Learn about our developers</Link>
        </AboutUs>
        <Home>
          <Link to={'/'}>Back to Search</Link>
        </Home>
      </LoginGroup>
      </Row>
    </Wrapper>
    )
  }
}

class ConnectedLogin extends React.Component {
  render() {
    return (
      <AuthConsumer>
        { auth => <Login {...this.props} auth={auth} />}
      </AuthConsumer>
    )
  }
}

const Wrapper = styled.div`
width: 100%
height: 100%
`

const LoginGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: left;
  align-items: flex-start;
  margin-top: 3rem;
  margin-left: 10rem;
  flex: 1;

  @media (max-width: 812px;) {
    max-width: 400px;
  }
`
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
  height: 100%;
  flex: 1;

  @media (max-width: 812px;) {
    max-width: 400px;
  }
`

const GraphicaParagraph = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: left;
  padding-left: 1rem;
  padding-bottom: 5rem;
  width: 60%;
  justify;
`

const SegmentWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 50px;
`

const GraphicaLogo = styled.div`
  display: flex;
  padding-left: 1rem;
  padding-bottom: 4rem;
  font-family: 'Elianto-Regular';
  font-size: 42px;
  @font-face {
    font-family: 'Elianto-Regular';
    src: url(${logoFont}) format("opentype");
  }
  color: #000000
`

const LoginImage = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  justify-content: flex-start;
  align-items: stretch;
  min-height: 725px;
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
  background-image: url(https://res.cloudinary.com/graphica/image/upload/v1593188743/white-mountain_eschby.jpg);
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

// const Header = styled.div`
// position: absolute;
// width: 105px;
// height: 44px;
// left: 798px;
// top: 405px;

// font-family: Montserrat;
// font-style: normal;
// font-weight: 600;
// font-size: 36px;
// line-height: 44px;
// `

const Home = styled.div`
a:link {
  color: black;
}
a:visited {
  color: black;
}
a:hover {
  color: lightgrey;
}
a:active {
  color: black;
}

position: absolute;
bottom: 0px;
margin-left: 1rem;
padding-left: 1rem;

//  display: flex;
//   flex-direction: column;
//   justify-content: left;
//   align-items: flex-start;
//   margin-top: 10rem;
//   margin-left: 1rem;
//   flex: 1;

//   @media (max-width: 812px;) {
//     max-width: 400px;
//   }

cursor: pointer;

`

const AboutUs = styled.div`

  a:link {
    color: black;
  }
  a:visited {
    color: black;
  }
  a:hover {
    color: lightgrey;
  }
  a:active {
    color: black;
  }

  position: absolute;
  bottom: 0px;
  right: 20px;
  padding-left: 1rem;

  // display: flex;
  // flex-direction: column;
  // justify-content: left;
  // align-items: flex-end;
  // margin-top: 10rem;
  // margin-left: 10rem;
  // flex: 1;



  cursor: pointer;

`

export default withRouter(ConnectedLogin)