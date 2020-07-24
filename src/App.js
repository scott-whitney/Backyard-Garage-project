import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Homepage from './Pages/HomePage-component/homepage-component';
import Header from './Component/header/header.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>

      <Route exact path ='/' component={Homepage}/>
      </Switch>
      
      
    </div>
  );
}

export default App;
