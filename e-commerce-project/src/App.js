import React from 'react';
import HomePage from './pages/homepage/home-page';
import { Route, Switch } from 'react-router-dom';
import ShopPage from './pages/shop/shop';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup';
import Header from './components/header/header';

import './App.css';


function App() {
  return (
    <div>
      <Header />
      <Switch>
         <Route exact path='/' component={HomePage}/>
         <Route path='/shop' component={ShopPage}/>
         <Route path='/signin' component={SignInAndSignUpPage}/>
      </Switch>
    </div>
  );
}

export default App;
