import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Articles from './Pages/Articles/Articles';
import Header from './Component/header/header.component';
import Homepage from './Pages/Homepage/Homepage';
import ContactPage from './Pages/Contact/Contact.page'
import ShopSpace from './Pages/Article-pages/shop-space-article/article-shop-space.component';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
      <Route exact path='/' component={Homepage}/>
      <Route exact path='/Contact' component={ContactPage}/>
      <Route path='/Articles/shop-space/:id' component={ShopSpace}/>
      <Route exact path ='/Articles' component={Articles}/>

      </Switch>
      
      
    </div>
  );
}

export default App;
