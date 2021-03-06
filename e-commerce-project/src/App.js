import React, { Component }from 'react';
import HomePage from './pages/homepage/home-page';
import { Route, Switch, Redirect } from 'react-router-dom';
import ShopPage from './pages/shop/shop';
import SignInAndSignUpPage from './pages/signin-and-signup/signin-and-signup';
import Header from './components/header/header';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import './App.css';


class App extends Component {
  unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }

      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path='/' component={HomePage} />
          <Route path='/shop' component={ShopPage} />
          <Route 
          exact 
          path='/signin' 
          render={() => this.props.currentUser ? (
            <Redirect to='/' />
          ) : (
            <SignInAndSignUpPage />
          )} />
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = ({ user }) => ({
  currentUser: user.currentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
});


export default connect(mapStateToProps, mapDispatchToProps)(App);
