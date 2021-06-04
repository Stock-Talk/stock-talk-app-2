import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Container } from 'semantic-ui-react';
import 'semantic-ui-css/semantic.min.css';
import './App.css';

import Home from './pages/Home';
import Profile from './pages/Profile';
import Login from './pages/Login';
import Register from './pages/Register';
import About from './pages/About';
import Main from './pages/Main';
import Search from './pages/Stock';


import Test from './pages/Test';
import SearchCapture from './pages/Search';

function App() {
  return (
    <Router>
      <Container>
        <Route exact path='/' component={Main} />
        {/* delete the following route after testing */}
        <Route exact path='/test' component={Test} />
        <Route exact path='/search' component={SearchCapture} />
        <Route exact path='/home' component={Home} />
        <Route exact path='/profile' component={Profile} />
        <Route exact path='/login' component={Login} />
        <Route exact path='/register' component={Register} />
        <Route exact path='/about' component={About} />
        <Route exact path='/stock' component={Search} />
      </Container>
    </Router>
  );
}

export default App;
