import React from 'react';
import { Route } from 'react-router-dom';
import Homepage from './Component/HomePage-component/homepage-component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route exact path ='/' component={HomePage}/>
      
    </div>
  );
}

export default App;
