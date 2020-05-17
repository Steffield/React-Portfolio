import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from './components/Header/Navbar';
import Home from './pages/Home/index';
import About from './pages/About/index';
import Portfolio from './pages/Portfolio/index';
import Contact from './pages/Contact/index';
import Footer from './components/Footer/Footer'
import './App.css';

function App() {

  return (

    <Router>
      <div>
        <Header />
          <Route exact path="/React-Portfolio" component={Home} />
          {/* <Route exact path="/React-Portfolio" component={Home} /> */}
          {/* <Home /> */}
          <Route exact path="/React-Portfolio/about" component={About} />
          {/* <About /> */}
          <Route path="/React-Portfolio/portfolio" component={Portfolio} />
          {/* <Portfolio /> */}
          <Route exact path="/React-Portfolio/contact" component={Contact} />
          {/* <Contact /> */}
        <Footer/>
      </div>
     </Router>
   

  );
}

export default App;
