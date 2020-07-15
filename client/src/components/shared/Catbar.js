import React, { useState, useEffect } from 'react'
import { Menu, } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'
import axios from 'axios';
import styled from 'styled-components'

const Catbar = () => {
  const [cats, setCats] = useState([])

  useEffect(() => {
    axios.get("/api/categories")
      .then( res => setCats(res.data))
      .catch(console.log)
  }, [])
  
  return (
    <div>
        <Menu pointing secondary>
      {cats.map((cat, index) => (
          <Link to='/'>
            <Menu.Item
              name={cat.title}
              id={cat.title}
              // active={this.props.location.pathname === '/'} //START WORKING HERE
            />
          </Link>
      ))}
        </Menu>
    </div>
  )  
}

export default Catbar
