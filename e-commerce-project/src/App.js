import React from 'react';
import HomePage from './pages/homepage/home-page';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop';
import Header from './components/header/header';

import './App.css';


function App() {
  return (
    <div>
      <Header />
      <Switch>
         <Route exact path='/' component={HomePage}/>
         <Route path='/shop' component={ShopPage}/>
      </Switch>
    </div>
  );
}

export default App;
