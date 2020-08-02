import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/shared/Navbar';
import Catbar from './components/shared/Catbar';
import NoMatch from './components/shared/NoMatch';
import FetchUser from './components/auth/FetchUser';
// import Dash from './components/shared/Dash';
import Users from './components/users/Users';
import Profile from './components/profile/Profile';
import Collection from './components/collection/CollectionShow';
import AboutUs from './components/home/AboutUs';

const App = () => {
  const [showCatbar, setShowCatbar] = useState(false)
  const toggleCatbar = (show) => setShowCatbar(show)

  const LoadHome = (props) => { return <Home {...props} toggleCatbar={toggleCatbar}/>}
  const LoadProfile = (props) => { return <Profile {...props} toggleCatbar={toggleCatbar}/> }
  const LoadCollection = (props) => { return <Collection {...props} toggleCatbar={toggleCatbar}/> }
  const LoadLogin = (props) => { return <Login {...props} toggleCatbar={toggleCatbar}/>}
  const LoadRegister = (props) => { return <Register {...props} toggleCatbar={toggleCatbar}/>}

  return(                                           //Did Nick say to render Catbar inside of NavBar??
    <>
      <Navbar />
      {(showCatbar) ? <Catbar /> : null} 
      <FetchUser>
        <Switch>
          <Route exact path='/' render={LoadHome} />
          <Route exact path='/about_us' component={AboutUs} />
          <Route exact path='/profile/:id' render={LoadProfile} />
          <Route exact path='/collections/:id' render={LoadCollection} />
          <Route exact path='/users' component={Users} />
          {/* <Route exact path='/dash' component={Dash} /> This can go?? */}
          <Route exact path='/login' render={LoadLogin} />
          <Route exact path='/register' render={LoadRegister} />
          <Route component={NoMatch} />
        </Switch>
      </FetchUser>
    </>
  )
}
export default App;
