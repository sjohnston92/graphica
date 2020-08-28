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
            <LogoLinkSm to='/'>G</LogoLinkSm>
          <AuthDiv>
            <LinkDiv onClick={ () => props.auth.handleLogout(props.history) }>Logout {props.auth.user.first_name}</LinkDiv> 
          </AuthDiv>
          <AuthDivMobile>
            <LinkDiv onClick={ () => props.auth.handleLogout(props.history) }>Logout</LinkDiv>
          </AuthDivMobile>
        </Flex>
        <Right>
            <SearchDiv onClick={()=>props.history.push(`/`)}>  
              <NavSearchBar />
              <svg width="11" height="11" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.71 11H12.5L17.49 16L16 17.49L11 12.5V11.71L10.73 11.43C9.59 12.41 8.11 13 6.5 13C2.91 13 0 10.09 0 6.5C0 2.91 2.91 0 6.5 0C10.09 0 13 2.91 13 6.5C13 8.11 12.41 9.59 11.43 10.73L11.71 11ZM2 6.5C2 8.99 4.01 11 6.5 11C8.99 11 11 8.99 11 6.5C11 4.01 8.99 2 6.5 2C4.01 2 2 4.01 2 6.5Z" fill="black"/>
                </svg>
            </SearchDiv>
              <LinkDiv>
                {/* <Link to='/users'> Admin </Link> */}
              </LinkDiv>
              <LinkDiv>
                <Link to={`/Profile/${props.auth.user.id}`}>
                <Flex>
                  <div>
                    Profile&nbsp;&nbsp; 
                  </div>
                  <svg width="11" height="11" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M6 0H18C19.1 0 20 0.9 20 2V14C20 15.1 19.1 16 18 16H6C4.9 16 4 15.1 4 14V2C4 0.9 4.9 0 6 0ZM18 14V2H6V14H18ZM9.5 9.67L11.19 11.93L13.67 8.83L17 13H7L9.5 9.67ZM0 18V4H2V18H16V20H2C0.9 20 0 19.1 0 18Z" fill="black"/>
                  </svg>
                </Flex>
                </Link>
              </LinkDiv>
              <LinkDiv onClick={()=>toggle()}>
                <Flex>
                  <div>
                    Post&nbsp;&nbsp;
                  </div>
                  <svg width="11" height="11" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M10 0C4.48 0 0 4.48 0 10C0 15.52 4.48 20 10 20C15.52 20 20 15.52 20 10C20 4.48 15.52 0 10 0ZM9 5V9H5V11H9V15H11V11H15V9H11V5H9ZM2 10C2 14.41 5.59 18 10 18C14.41 18 18 14.41 18 10C18 5.59 14.41 2 10 2C5.59 2 2 5.59 2 10Z" fill="black"/>
                  </svg>
                </Flex>
              </LinkDiv>
            <Modal onClose={toggle} open={open}>
              <PictureForm toggleModal={toggle}/>
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
            <AuthDivMobile>
              <div>
                <Link to='/register'> Sign Up </Link> | 
              </div>
              <div>
                <Link to='/login'> &#8239; Login</Link>
              </div>
            </AuthDivMobile>
          </Flex>
          <RightLogout>
              {/* <Link to='/users'> Admin </Link> */}
              <SearchDiv onClick={()=>props.history.push(`/`)}>
                <NavSearchBar />
                <svg width="11" height="11" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M11.71 11H12.5L17.49 16L16 17.49L11 12.5V11.71L10.73 11.43C9.59 12.41 8.11 13 6.5 13C2.91 13 0 10.09 0 6.5C0 2.91 2.91 0 6.5 0C10.09 0 13 2.91 13 6.5C13 8.11 12.41 9.59 11.43 10.73L11.71 11ZM2 6.5C2 8.99 4.01 11 6.5 11C8.99 11 11 8.99 11 6.5C11 4.01 8.99 2 6.5 2C4.01 2 2 4.01 2 6.5Z" fill="black"/>
                </svg>
              </SearchDiv>
          </RightLogout>
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
  width: 300px;
  justify-content: space-between;
`
const RightLogout = styled.div`
  display: flex;
  align-items: center;
  width: 20vw;
  justify-content: space-between;
  min-width: 175px;
`
const SearchDiv = styled.div`
`

const Flex = styled.div `
  display: flex;
  align-items: center;
`
const LogoLink = styled(Link)`
  font-family: 'Elianto' !important;
  font-size: 17px;
  @media only screen and (max-width: 499px) { 
    display: none;
  }
`
const LogoLinkSm = styled(Link)`
  font-family: 'Elianto' !important;
  font-size: 17px;
  @media only screen and (min-width: 500px) { 
    display: none;
  }
`
const AuthDiv = styled.div`
  margin-left: 1vw;
  @media only screen and (max-width: 599px) { 
    display: none;
  }
`
const AuthDivMobile = styled.div`
  display: flex;
  justify-content: left;
  margin-left: 1vw;
  min-width: 25vw;
  @media only screen and (min-width: 600px) { 
    display: none;
  }
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
