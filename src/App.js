import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Articles from './Pages/Articles/Articles';
import Header from './Component/header/header.component';
import Homepage from './Pages/Homepage/Homepage';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path='/Home' component={Homepage}/>
      <Route exact path ='/Articles' component={Articles}/>
      </Switch>
      
      
    </div>
  );
}

export default App;
