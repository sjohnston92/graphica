import React from 'react';
import { AuthConsumer, } from "../../providers/AuthProvider";
import { Button, Form, Segment, Header, } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';
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
        <ImageLeft>
          <ImageLeftTop>
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
          </ImageLeftTop>
        </ImageLeft>
      </LoginImage>
    </PictureGroup>
    <LoginGroup>
      <GraphicaLogo>
        GRAPHICA
      </GraphicaLogo>
      <GraphicaParagraph>
        Graphica is a novel photo-sharing app that allows users to share their collections. 
      </GraphicaParagraph>
      <SegmentWrapper>
      <Segment basic>
        <Header as='h1' textAlign='right'>Login</Header>
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
          <Segment textAlign='right' basic>
            <Button primary type='submit'>Submit</Button>
          </Segment>
            </Form>
          </Segment>
        </SegmentWrapper>
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
`
const LoginGroup = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex: 1;
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
flex: 1;
`

const GraphicaParagraph = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 50px;
`

const SegmentWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  margin-right: 50px;
`

const GraphicaLogo = styled.div`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  padding-top: 2rem;
  padding-bottom: 2rem;
  padding-right: 2rem;
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
  height: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: left;
  min-height: 950px;
  background-size: cover;
  background-position: left;
  background-repeat: no-repeat;
  background-image: url(https://res.cloudinary.com/graphica/image/upload/v1593188743/white-mountain_eschby.jpg);
`

const ImageLeft = styled.div`
  display: flex;
  flex-direction: column;
  flex-shrink: 0;
  margin-left: 5rem;
`

const ImageLeftTop = styled.div`
  display: flex;
`

const ImageContents = styled.div`
  padding-top: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: left;
  margin-left: 2rem;
`;

export default withRouter(ConnectedLogin)