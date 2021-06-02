import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

import Navigation from './components/Navigation';
import Home from './pages/Home';
import UserHome from './pages/UserHome'; // Will be deleted
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Main from './pages/Main';

function App() {
  return (
    <Router>
      <Container>
        <Navigation />
        <Route exact path='/' component={Main} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/about' component={About} />
        {/* to remove and combine with Home */}
        <Route exact path='/myhome' component={UserHome} />
      </Container>
    </Router>
  );
}

export default App;
