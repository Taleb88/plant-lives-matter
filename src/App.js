import React from 'react';
import {BrowserRouter,Switch,Route} from 'react-router-dom';
import Home from './Components/Home/Home';
import About from './Components/About/About';
import Facts from './Components/Facts/Facts';
import Contact from './Components/Contact/Contact';
import Footer from './Components/Footer/Footer';
import './App.scss';


function App() {
  return (
    <div className="app">
      <BrowserRouter>
          <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/facts" exact component={Facts} />
              <Route path="/contact"  exact component={Contact} />
          </Switch>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
