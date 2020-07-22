import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/shared/Navbar';
import Catbar from './components/shared/Catbar';
import NoMatch from './components/shared/NoMatch';
import FetchUser from './components/auth/FetchUser';
import Dash from './components/shared/Dash';
import Profile from './components/profile/Profile';
import Collection from './components/collection/CollectionShow';
import PictureCollection from './components/picture/PictureCollection';

const App = () => {
  const [showCatbar, setShowCatbar] = useState(false)
  const toggleCatbar = (show) => setShowCatbar(show)

  const LoadHome = (props) => { return <Home {...props} toggleCatbar={toggleCatbar}/>}
  const LoadProfile = (props) => { return <Profile {...props} toggleCatbar={toggleCatbar}/> }
  const LoadCollection = (props) => { return <Collection {...props} toggleCatbar={toggleCatbar}/> }
  const LoadLogin = (props) => { return <Login {...props} toggleCatbar={toggleCatbar}/>}
  const LoadRegister = (props) => { return <Register {...props} toggleCatbar={toggleCatbar}/>}

  return(
    <>
      <Navbar />
      {(showCatbar) ? <Catbar /> : null}
      <FetchUser>
        <Switch>
          <Route exact path='/' render={LoadHome} />
          <Route exact path='/Feed' component={PictureCollection} />
          <Route exact path='/profile/:id' render={LoadProfile} />
          <Route exact path='/collections/:id' render={LoadCollection} />
          <Route exact path='/dash' component={Dash} />
          <Route exact path='/login' render={LoadLogin} />
          <Route exact path='/register' render={LoadRegister} />
          <Route component={NoMatch} />
        </Switch>
      </FetchUser>
    </>
  )
}
export default App;
