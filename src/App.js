import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Party from './components/pages/Party';
import Contact from './components/pages/Contact';
import Kasweb from './components/pages/Kasweb';
import Zenith from './components/pages/Zenith';
import Our from './components/pages/Our';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/apps' component={Our} />
          <Route path='/contact' component={Contact} />
          <Route path='/aboutus' component={About} />
          <Route path='/kasweb' component={Kasweb} />
          <Route path='/biteparty' component={Party} />
          <Route path='/zenith' component={Zenith} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
