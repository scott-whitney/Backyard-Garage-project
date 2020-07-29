import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Articles from './Pages/Articles/Articles';
import Header from './Component/header/header.component';
import Homepage from './Pages/Homepage/Homepage';
import ShopSpace from './Pages/Article-pages/shop-space-article/article-shop-space.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path='/Home' component={Homepage}/>
      <Route exact path ='/Articles' component={Articles}/>
      <Route exact path='/Articles/shop-space' component={ShopSpace}/>
      </Switch>
      
      
    </div>
  );
}

export default App;
