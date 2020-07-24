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
      <Flex>
        <LogoDiv>
          <Link to='/'>GRAPHICA</Link>
        </LogoDiv>
        <AuthDiv>
          <LinkDiv onClick={ () => props.auth.handleLogout(props.history) }>Logout {props.auth.user.first_name}</LinkDiv> 
        </AuthDiv>
      </Flex>
      <Right>
        <Flex>
          <SearchDiv>
            <NavSearchBar />
          </SearchDiv>
          <Flex>
            <LinkDiv><Link to={`/Profile/${props.auth.user.id}`}>Profile </Link>|&nbsp;</LinkDiv><LinkDiv onClick={()=>toggle()}>Post</LinkDiv>
          </Flex>
          <Modal onClose={toggle} open={open}>
            <PictureForm toggle={toggle}/>
          </Modal>
        </Flex>
      </Right>
    </Wrapper>
  )
  } else { 
    return(   
      <Wrapper>
        <Flex>
          <LogoDiv>
            <Link to='/'>GRAPHICA</Link>
          </LogoDiv>
          <AuthDiv>
            <Link to='/register'>  Sign Up</Link> | <Link to='/login'>Login</Link>
          </AuthDiv>
        </Flex>
        <Right>
          <Flex>
            <SearchDiv onClick={()=>props.history.push(`/`)}>
              <NavSearchBar />
            </SearchDiv>
            <Flex>
              <Link to='/login'>Profile </Link>&nbsp;|&nbsp; <Link to='/login'>Post</Link>
            </Flex>
          </Flex>
        </Right>
      </Wrapper>
    )
  }
}

const Wrapper = styled.div`
  position: fixed;
  z-index:1;
  display: flex;
  width: 100%;
  
  
  padding: 5px;
  
  
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
  .clearfix {
    overflow: auto;
  }
  background-color: white;
`
const Right = styled.div`
  display: block;
  justify: right;

`
const SearchDiv = styled.div`
  display: block;
  margin-top: -5px;

`
const Flex = styled.div `
  display: flex;
  padding-top: 5px;
`
const LogoDiv = styled.div`
  font-family: 'Elianto-Regular';
  font-size: 17px;
  @font-face {
    font-family: 'Elianto-Regular';
    src: url(${logoFont}) format("opentype");
  }
  padding-left: 1rem;
  padding-top: 5px;
`
const AuthDiv = styled.div`
  margin-left: 1vw;
  padding-top: 5px;

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
