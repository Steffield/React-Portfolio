import React, { useRef } from "react";
// import { HashRouter, Route } from "react-router-dom";
import Header from "./components/Header/Navbar";
import Footer from "./components/Footer/Footer";
//pages
import Home from "./pages/Home/index";
import About from "./pages/About/index";
import Portfolio from "./pages/Portfolio/index";
import Contact from "./pages/Contact/index";
//style
// import "./App.css";

function App() {
  const homeRef = useRef(null);
  const aboutRef = useRef(null);
  const portfolioRef = useRef(null);
  const contactRef = useRef(null);

  console.log(homeRef.current);

  const scrollTo = (ref) => {
    window.scroll({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };

  return (
    <div>
      {/* <HashRouter> */}
      <Header
        homeRef={homeRef}
        aboutRef={aboutRef}
        portfolioRef={portfolioRef}
        contactRef={contactRef}
        scrollTo={scrollTo}
      />
      {/* <Route exact path="/" component={Home} /> */}
      <Home homeRef={homeRef} />
      {/* <Route exact path="/about" component={About} /> */}
      <About aboutRef={aboutRef} />
      {/* <Route exact path="/portfolio" component={Portfolio} /> */}
      <Portfolio portfolioRef={portfolioRef} />
      {/* <Route exact path="/contact" component={Contact} /> */}
      <Contact contactRef={contactRef} />

      <Footer />
      {/* </HashRouter> */}
    </div>
  );
}

export default App;
