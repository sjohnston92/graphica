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
import ProtectedRoute from './components/auth/ProtectedRoute';
import Feed from './components/home/Feed'
import Profile from './components/profile/Profile';
import Collection from './components/collection/Collection';
import PictureCollection from './components/picture/PictureCollection'

const App = () => {
  const [showCatbar, setShowCatbar] = useState(false)
    
  const toggleCatbar = (show) => setShowCatbar(show)


  const LoadHome = () => {
    return(
      <Home toggleCatbar={toggleCatbar}/>
    )
  }
  const LoadProfile = () => {
    return(
      <Profile toggleCatbar={toggleCatbar}/>
    )
  }

  return(
    <>
      <Navbar />
      {(showCatbar) ? <Catbar /> : null}
      <FetchUser>
        <Switch>
          <Route exact path='/' render={LoadHome} />
          <Route exact path='/Feed' component={PictureCollection} />
          <Route exact path='/profile' render={LoadProfile} />
          <Route exact path='/collection' component={Collection} />
          <Route exact path='/dash' component={Dash} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
          <Route component={NoMatch} />
        </Switch>
      </FetchUser>
    </>
  )
}
export default App;
