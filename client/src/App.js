import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './components/home/Home';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/shared/Navbar';
import NoMatch from './components/shared/NoMatch';
import FetchUser from './components/auth/FetchUser';
import Dash from './components/shared/Dash';
import ProtectedRoute from './components/auth/ProtectedRoute';
import Feed from './components/home/Feed'
import Profile from './components/profile/Profile';
import Collection from './components/collection/Collection';
import Testing from './components/picture/Testing'


const App = () => (
  <>
    <Navbar />
    <FetchUser>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/Feed' component={Feed} />
        <ProtectedRoute exact path='/profile' component={Profile} />
        <ProtectedRoute exact path='/collection' component={Collection} />
        <ProtectedRoute exact path='/dash' component={Dash} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/testing' component={Testing} />
        <Route component={NoMatch} />
      </Switch>
    </FetchUser>
  </>
)
export default App;
