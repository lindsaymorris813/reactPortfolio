import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/Contact";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route exact path ="/" component={About} />
          <Route exact path ="/about" component={About} />
          <Route exact path ="/projects" component={Projects} />
          <Route exact path ="/contact" component={Contact} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
