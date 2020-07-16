import React from 'react'
import { AuthConsumer, } from "../../providers/AuthProvider";
import { Menu, } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'
import NewPictureModal from '../modal/NewPictureModal'

class Navbar extends React.Component {
  state = { open: false }

  toggle = () => this.setState({ open: !this.state.open })

  rightNavItems = () => {
    const { auth: { user, handleLogout, }, location, } = this.props;
    
    if (user) {
      return (
        <Menu.Menu position='right'>
          <Menu.Item
            name='logout'
            onClick={ () => handleLogout(this.props.history) }
          />
          <Menu.Item onClick={this.toggle} >
            Add Post
          </Menu.Item>
        </Menu.Menu>
      )
    } else {
      return (
        <Menu.Menu position='right'>
          <Link to='/login'>
            <Menu.Item
              id='login'
              name='login'
              active={location.pathname === '/login'}
            />
          </Link>
          <Link to='/register'>
            <Menu.Item
              id='register'
              name='register'
              active={location.pathname === '/register'}
            />
          </Link>
          
        </Menu.Menu>
      )
    }
  }
  
  render() {
    const { auth: { user } } = this.props;
    
    return (
      <div>
        <Menu pointing secondary>
          <Link to='/'>
            <Menu.Item
              name='home'
              id='home'
              active={this.props.location.pathname === '/'}
            />
          </Link>
          { user && 
            <Link to={`/profile/${user.id}`}>
              <Menu.Item
                name='profile'
                id='profile'
                active={this.props.location.pathname === '/profile'}
              />
            </Link>
          }
          <Link to='/collection'>
            <Menu.Item
              name='collection'
              id='collection'
              active={this.props.location.pathname === '/collection'}
            />
          </Link>
            { this.rightNavItems() }
        </Menu>
        <NewPictureModal open={this.state.open} toggle={this.toggle} />
      </div>
    )
  }
}

export class ConnectedNavbar extends React.Component {
  render() {
    return (
      <AuthConsumer> 
        { auth => 
          <Navbar { ...this.props } auth={auth} />
        }
      </AuthConsumer>
    )
  }
}

export default withRouter(ConnectedNavbar);
