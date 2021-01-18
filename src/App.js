import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="container">
        <Switch>
          <Route exact path ="/" component={About} />
          <Route exact path ="/about" component={About} />
          <Route exact path ="/portfolio" component={Portfolio} />
          <Route exact path ="/contact" component={Contact} />
        </Switch>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
