import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AuthConsumer } from '../providers/AuthProvider'

const FavContext = React.createContext();

export const FavConsumer = FavContext.Consumer;

const FavProvider = (props) => {

  const [ favorites, setFavorites ] = useState([]);

  useEffect(() => {
    console.log(props.authenticated)
    if (props.authenticated){checkFavorites()}
  }, [])
  useEffect(() => {
    if (props.authenticated){checkFavorites()}
  }, [props.user])

  const checkFavorites = () => {
    axios.get(`/api/users/${props.user.id}/favorites`)
      .then( res => {
        setFavorites(res.data)
      })
      .catch(console.log)
  }

  return(
    <FavContext.Provider value={{
      favorites
      
    }}> 
      { props.children }
    </FavContext.Provider>     
  )
}

export const AuthFavProvider = (props) => (
  <AuthConsumer>
    {(value) => <FavProvider {...props} {...value} />}
  </AuthConsumer>
);


export default AuthFavProvider;