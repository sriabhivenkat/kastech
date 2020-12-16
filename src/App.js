import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Party from './components/pages/Party';
import Contact from './components/pages/Contact';
import Kasweb from './components/pages/Kasweb';
import ScrollToTop from './ScrollToTop';

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <ScrollToTop />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/contact' component={Contact} />
          <Route path='/aboutus' component={About} />
          <Route path='/kasweb' component={Kasweb} />
          <Route path='/biteparty' component={Party} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
