import './App.css';
import React from "react";
import NavBar from "./components/NavBar"
import Home from './contents/Home';
import ReactPage from './contents/ReactPage';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom'


function App() {
  return (
    <div className="App">
      <Router basename={process.env.PUBLIC_URL}>
        <NavBar />
          <Switch>
            <Route exact path="/home" component={Home} />
            <Route exact path="/">
              <Redirect to="/home" />
            </Route>
            <Route exact path="/react-page" component={ReactPage} />
          </Switch>
      </Router> 
      
    </div>
  );
}

export default App;
