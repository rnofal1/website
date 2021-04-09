import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Link, Redirect } from 'react-router-dom';
 
import Home from './pages/home';
import MainPage from './pages/index';
import NotFoundPage from './pages/404';
 
class App extends Component {
  render() {
    return (      
       <BrowserRouter>
            <Switch>
             <Route exact path="/Home" component={Home} />
             <Route exact path="/" component={MainPage} />
             <Route exact path="/404" component={NotFoundPage} />
             <Redirect to="/404"/>
           </Switch>
      </BrowserRouter>
    );
  }
}
 
export default App;