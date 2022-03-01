import React from "react"
import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";

class App extends React.Component {
  render() { 
    return(
      <Router>
        <div className="App">
         <Navbar />
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/About'>
              <About />
            </Route>
            <Route path='/Contact'>
             <Contact />
            </Route>
          </Switch>
       </div>
      </Router>
    
    );
  }
}
 
export default App;