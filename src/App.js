import React, { useEffect } from 'react';
import { Route, Switch, Redirect } from "react-router-dom";
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.css';

import HomePage from './pages/homepage/homepage.component';
import ShopPage from './pages/shop/shop.component';
import SignInAndSignUpPage from './pages/sign-in-and-sign-up/sign-in-and-sign-up.component';
import CheckoutPage from './pages/checkout/checkout.component';

import Header from './components/header/header.component';

import { selectCurrentUser } from './redux/user/user.selectors';
import { checkUserSession } from './redux/user/user.actions';

/** 
 * @createdOn 4-Aug-2021 
 * @modifiedOn 15-Sep-2021 (saga, hooks)
 */
const App = ({ checkUserSession, currentUser }) => {

  useEffect(() => checkUserSession(), [checkUserSession]);  //mimics componentDidMount

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/shop" component={ShopPage} />
        <Route path="/checkout" component={CheckoutPage} />
        <Route exact path="/signin" render={() =>
          currentUser ? <Redirect to='/' />
            : <SignInAndSignUpPage />
        } />
      </Switch>
    </div>
  );
}

/** @createdOn 11-Aug-2021 */
const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
});

/** @createdOn 14-Sep-2021 */
const mapDispatchToProps = dispatch => ({
  checkUserSession: () => dispatch(checkUserSession())
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
