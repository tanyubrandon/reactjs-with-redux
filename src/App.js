import React from "react"
import Navbar from "./components/Navbar";
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom'
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Post from "./components/Post";

class App extends React.Component {
  render() { 
    return(
      <Router>
        <div className="App">
         <Navbar />
          <Switch>
            <Route exact path='/' component={Home}>
              {/* <Home /> */}
            </Route>
            <Route path='/About'>
              <About />
            </Route>
            <Route path='/Contact'>
             <Contact />
            </Route>
            <Route path='/:post_id' component={Post}>
             {/* <Post /> */}
            </Route>
          </Switch>
       </div>
      </Router>
    
    );
  }
}
 
export default App;