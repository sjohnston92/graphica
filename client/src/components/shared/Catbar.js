import React, { useState, useEffect } from 'react'
import { AuthConsumer, } from "../../providers/AuthProvider";
import { Menu, } from 'semantic-ui-react'
import { Link, withRouter, } from 'react-router-dom'
import ShowModal from '../modal/ShowModal'
import axios from 'axios';
import styled from 'styled-components'

const Catbar = () => {
  
  const [cats, setCats] = useState([])
  useEffect(() => {
    axios.get("/api/categories")
      .then( res => {
        console.log(res.data)
        setCats(res.data)
      })
      .catch( err => {
        console.log(err)
      })
  }, [])
  
  return (
    <div>
        <Menu pointing secondary>
      {cats.map((cat, index) => (
          <Link to='/'>
            <Menu.Item
              name={cat.title}
              id={cat.title}
              // active={this.props.location.pathname === '/'}
            />
          </Link>
      ))}
        </Menu>
    </div>
  )  
}

export default Catbar
