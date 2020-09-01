import React, { useContext } from 'react'
import { AuthConsumer, } from "../../providers/AuthProvider";
import { Link, withRouter, } from 'react-router-dom'
import styled from 'styled-components'
import logoFont from '../../fonts/Elianto-Regular.otf';
import NavSearchBar from './NavSearchBar';
import useModal from '../../hooks/useModal';
import Modal from '../modal/Modal'
import PictureForm from '../new/PictureForm'
import { FeedContext } from '../../providers/FeedProvider'
import PostIcon from '../../img/add_circle_outline_24px.svg'
import CollectionIcon from '../../img/photo_library_24px.svg'
import SearchIcon from '../../img/search_24px.svg'

const NavBar = (props) => {
  const {toggle, open} = useModal();
  const context = useContext(FeedContext);
  const login = props.auth.authenticated
  
  const handleClick = () => {
    context.setQuery(""); 
    context.setCategoryId(null);
    context.setQuerySearch("")
    context.resetAndSearchPictures()
      .then( res => {
        props.history.push(`/`);
      })
      .catch(console.log)
  }

  
  return(
    <>
      <Wrapper>
        <Flex>
            <ResetSearch onClick={handleClick}>
              <Logo>GRAPHICA</Logo> 
              <LogoSm>GRAPHICA</LogoSm>
            </ResetSearch>
          <AuthDiv>
            { login 
              ?
                <LinkDiv onClick={ () => props.auth.handleLogout(props.history) }>
                  Logout 
                  <Name>
                    &nbsp;{props.auth.user.first_name}
                  </Name>
                </LinkDiv> 
              :
                <><Link to='/register'>  Sign Up</Link> | <Link to='/login'>Login</Link></>
            }
          </AuthDiv> 
        </Flex>
        { !login && 
          <Right>
              <Flex>
                <SearchDiv onClick={()=>props.history.push(`/`)}>  
                  <NavSearchBar />
                </SearchDiv>
                <Icon src={SearchIcon} />
              </Flex>
          </Right>
        }
        { login &&   
          <RightLogin>    
              <Flex>
                <SearchDiv onClick={()=>props.history.push(`/`)}>  
                  <NavSearchBar />
                </SearchDiv>
                <Icon src={SearchIcon} />&nbsp;&nbsp;&nbsp;
              </Flex>
                <LinkDiv>
                  <Link to={'/collections'}>
                      {/* <Link to={`/Profile/${props.auth.user.id}`}> */}
                  <Flex>
                    <div>
                      Collections&nbsp;&nbsp; 
                    </div>
                    <Icon src={CollectionIcon} />&nbsp;&nbsp;&nbsp;
                  </Flex>
                  </Link>
                </LinkDiv>
                <LinkDiv onClick={()=>toggle()}>
                  <Flex>
                    <PostDiv>
                      Post&nbsp;&nbsp;
                    </PostDiv>
                    <Icon src={PostIcon} />
                  </Flex>
                </LinkDiv>
          </RightLogin>
        }
      </Wrapper>
            <Modal onClose={toggle} open={open}>
              <PictureForm toggleModal={toggle}/>
            </Modal>
      <ClearFix />
    </>
  )
  
}

const PostDiv = styled.div`
  @media(max-width: 400px){
    display: none;
  }
`
const Name = styled.div`
  @media (max-width: 499px){
    display: none;
  }
`
const SpaceDivLg = styled.div`
  width: 15vw;
  @media only screen and (max-width: 499px) { 
    display: none;
  }
  @media (min-width: 800px){
    display: none
  }
  
`
const SpaceDivSm = styled.div`
  width: 5vw;
  @media only screen and (min-width: 500px) { 
    display: none;
  }
`
const Icon = styled.img`
  height: 1rem;
`
const ResetSearch = styled.div`

`
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
  @media (max-width: 549px) {
    padding: 1rem;
  }
`

const ClearFix = styled.div`
  width: 100%;
  height: 3rem;
`
const RightLogin = styled.div`
  display: flex;
  align-items: center;
  width: 300px;
  justify-content: space-between;
  @media(max-width: 646px){
    justify-content: flex-end;
  }
  @media(max-width: 599px){
    width: 272px;

  }
  @media(max-width: 449px){
    width: 244px;
  }
  // width: 154px;
`
const Right = styled.div`
  display: flex;
  align-items: right;
  // width: 20vw;
  justify-content: space-between;
  @media(max-width: 599px){
    width: 126px;
  }
  @media(max-width: 449px){
    width: 98px;
  }
  width: 154px;
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
const Logo = styled.div`
  font-family: 'Elianto' !important;
  font-size: 17px;
  @media only screen and (max-width: 399px) { 
    display: none;
  }
`
const LogoSm = styled.div`
  font-family: 'Elianto' !important;
  font-size: 17px;

  // margin-left: -2rem;
  // padding-right: 4rem;
  @media only screen and (min-width: 400px) { 
    display: none;
  }
`
const AuthDiv = styled.div`
  margin-left: 1vw;
  // @media only screen and (max-width: 599px) { 
  //   display: none;
  // }
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
  display: flex;
`

const ConnectedNavBar = (props) => (
  <AuthConsumer> 
    { auth => <NavBar { ...props } auth={auth} />}
  </AuthConsumer>
)

export default withRouter(ConnectedNavBar);
