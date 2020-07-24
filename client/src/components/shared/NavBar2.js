import React from 'react'
import { AuthConsumer, } from "../../providers/AuthProvider";
import { Link, withRouter, } from 'react-router-dom'
import styled from 'styled-components'
import logoFont from '../../fonts/Elianto-Regular.otf';
import NavSearchBar from './NavSearchBar';
import useModal from '../../hooks/useModal';
import Modal from '../modal/Modal'
import PictureForm from '../new/PictureForm'

const NavBar = (props) => {
  const {toggle, open} = useModal()

  if(props.auth.authenticated) {
  return(
    <Wrapper>
      <Left>
        <LogoDiv>
          <Link to='/'>GRAPHICA</Link>
        </LogoDiv>
        <AuthDiv>
          <LinkDiv onClick={ () => props.auth.handleLogout(props.history) }>Logout {props.auth.user.first_name}</LinkDiv> 
        </AuthDiv>
      </Left>
      <Right>
        <SearchDiv>
          <NavSearchBar />
        </SearchDiv>
        <Left>
          <LinkDiv><Link to={`/Profile/${props.auth.user.id}`}>Profile </Link>|&nbsp;</LinkDiv><LinkDiv onClick={()=>toggle()}>Post</LinkDiv>
        </Left>
        <Modal onClose={toggle} open={open}>
          <PictureForm toggle={toggle}/>
        </Modal>
      </Right>
    </Wrapper>
  )
  } else { 
    return(   
      <Wrapper>
        <Left>
          <LogoDiv>
            <Link to='/'>GRAPHICA</Link>
          </LogoDiv>
          <AuthDiv>
            <Link to='/register'>  Sign Up</Link> | <Link to='/login'>Login</Link>
          </AuthDiv>
        </Left>
        <Right>
          <SearchDiv onClick={()=>props.history.push(`/`)}>
            <NavSearchBar />
          </SearchDiv>
          <div>
            <Link to='/login'>Profile</Link> | <Link to='/login'>Post</Link>
          </div>
        </Right>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  display: flex;
  height: 2rem;
  margin-left: 2vw;
  padding: 1rem;
  margin-bottom: 1rem;
  justify-content: space-between;
  font-family: 'Montserrat', sans-serif;
  font-style: normal;
  font-size: 11px;
  a:link {
    color: black;
  }
  a:visited {
    color: black;
  }
  a:hover {
    color: black;
  }
  a:active {
    color: black;
  }
`
const Right = styled.div`
  display: flex;
  justify: right;

`
const SearchDiv = styled.div`
  margin-top: -10px;

`
const Left = styled.div `
  display: flex;
`
const LogoDiv = styled.div`
  font-family: 'Elianto-Regular';
  font-size: 17px;
  @font-face {
    font-family: 'Elianto-Regular';
    src: url(${logoFont}) format("opentype");
  }
`
const AuthDiv = styled.div`
  margin-left: 1vw;

`
const LinkDiv = styled.div`
  cursor: pointer;
`

const ConnectedNavBar = (props) => (
  <AuthConsumer> 
    { auth => <NavBar { ...props } auth={auth} />}
  </AuthConsumer>
)

export default withRouter(ConnectedNavBar);
