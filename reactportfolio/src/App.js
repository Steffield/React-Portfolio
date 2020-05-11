import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header/Navbar';
import Home from './pages/Home/index';
import About from './pages/About/index';
import Portfolio from './pages/Portfolio/index';
import Contact from './pages/Contact/index';
import Footer from './components/Footer/Footer'
import Wrapper from './components/Wrapper'
import './App.css';

function App() {

  return (

    <Router>
      <div>
        <Header />
        <Wrapper>
          <Route exact path="/" component={Home} />
          {/* <Home /> */}
          <Route exact path="/about" component={About} />
          {/* <About /> */}
          <Route path="/portfolio" component={Portfolio} />
          {/* <Portfolio /> */}
          <Route exact path="/contact" component={Contact} />
          {/* <Contact /> */}
        </Wrapper>
        <Footer/>
      </div>
    </Router>
   

  );
}

export default App;
