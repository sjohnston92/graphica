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
    <>
      <Wrapper>
        <Flex>
            <LogoLink to='/'>GRAPHICA</LogoLink>
          <AuthDiv>
            <LinkDiv onClick={ () => props.auth.handleLogout(props.history) }>Logout {props.auth.user.first_name}</LinkDiv> 
          </AuthDiv>
        </Flex>
        <Right>
            <SearchDiv onClick={()=>props.history.push(`/`)}>  
              <NavSearchBar />
            </SearchDiv>
              <LinkDiv><Link to={`/Profile/${props.auth.user.id}`}>Profile </Link>|&nbsp;</LinkDiv><LinkDiv onClick={()=>toggle()}>Post</LinkDiv>
            <Modal onClose={toggle} open={open}>
              <PictureForm toggle={toggle}/>
            </Modal>
        </Right>
      </Wrapper>
      <ClearFix />
    </>
  )
  } else { 
    return(   
      <>
        <Wrapper>
          <Flex>
              <LogoLink to='/'>GRAPHICA</LogoLink>
            <AuthDiv>
              <Link to='/register'>  Sign Up</Link> | <Link to='/login'>Login</Link>
            </AuthDiv>
          </Flex>
          <Right>
              <SearchDiv onClick={()=>props.history.push(`/`)}>
                <NavSearchBar />
              </SearchDiv>
                <Link to='/login'>Profile </Link>&nbsp;|&nbsp; <Link to='/login'>Post</Link>
          </Right>
        </Wrapper>
        <ClearFix />
      </>
    )
  }
}

const Wrapper = styled.div`
  position: fixed;
  z-index:1;
  align-items: center;
  display: flex;
  width: 100%;
  height: 3rem;
  padding: 0 3rem;
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

const ClearFix = styled.div`
  width: 100%;
  height: 3rem;
`
const Right = styled.div`
  display: flex;
  align-items: center;
`
const SearchDiv = styled.div`
  
`
const Flex = styled.div `
  display: flex;
`
const LogoLink = styled(Link)`
  font-family: 'Elianto' !important;
  font-size: 17px;
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
