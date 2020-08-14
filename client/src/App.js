import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/shared/Navbar';
import Catbar from './components/shared/Catbar';
import NoMatch from './components/shared/NoMatch';
import FetchUser from './components/auth/FetchUser';
import Users from './components/users/Users';
import Profile from './components/profile/Profile';
import Collection from './components/collection/CollectionShow';
import AboutUs from './components/home/AboutUs';

export const ConfigContext = React.createContext();

const App = () => {
  const [showCatbar, setShowCatbar] = useState(false)
  
  const configValue = {
    showCatbar,
    setShowCatbar,
  }

  return(                                           //Did Nick say to render Catbar inside of NavBar??
    <ConfigContext.Provider value={configValue}>
      <Navbar />
      <Catbar />
      <FetchUser>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about_us' component={AboutUs} />
          <Route exact path='/profile/:id' component={Profile} />
          <Route exact path='/collections/:id' component={Collection} />
          <Route exact path='/users' component={Users} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </FetchUser>
    </ConfigContext.Provider>
  )
}
export default App;
