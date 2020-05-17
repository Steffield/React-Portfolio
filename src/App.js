import React from 'react';
import { HashRouter, Route} from "react-router-dom";
import Header from './components/Header/Navbar';
import Home from './pages/Home/index';
import About from './pages/About/index';
import Portfolio from './pages/Portfolio/index';
import Contact from './pages/Contact/index';
import Footer from './components/Footer/Footer'
import './App.css';

function App() {

  return (

    <HashRouter basename='/'>
      <div>
        <Header />
          <Route exact path="/" component={Home} />
          {/* <Route exact path="/React-Portfolio" component={Home} /> */}
          {/* <Home /> */}
          <Route exact path="/about" component={About} />
          {/* <About /> */}
          <Route path="/portfolio" component={Portfolio} />
          {/* <Portfolio /> */}
          <Route exact path="/contact" component={Contact} />
          {/* <Contact /> */}
        <Footer/>
      </div>
     </HashRouter>
   

  );
}

export default App;
