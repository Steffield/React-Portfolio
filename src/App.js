import React from 'react';
// import { HashRouter, Route} from "react-router-dom";
import Header from './components/Header/Navbar';
import Footer from './components/Footer/Footer'
//pages
import Home from './pages/Home/index';
import About from './pages/About/index';
import Portfolio from './pages/Portfolio/index';
import Contact from './pages/Contact/index';
//style
import './App.css';

// import { ThemeProvider } from 'styled-components';
// import { lightTheme, darkTheme } from './components/theme';
// import { GlobalStyles } from './components/global';


// import ScrollToTop from "./components/ScrollToTop"


function App() {


  return (
    // <ThemeProvider theme={theme === 'light' ? lightTheme : darkTheme}>
    <div>
    {/* <GlobalStyles /> */}

        <Header />
       
          {/* <Route exact path="/" component={Home} /> */}
          <Home />
          {/* <Route exact path="/about" component={About} /> */}
          <About />
          {/* <Route exact path="/portfolio" component={Portfolio} /> */}
          <Portfolio />
          {/* <Route exact path="/contact" component={Contact} /> */}
          <Contact />
          
        <Footer/>
        {/* <ThemeButton /> */}
      </div>
          
      // </ThemeProvider>   
   

  );
}

export default App;
