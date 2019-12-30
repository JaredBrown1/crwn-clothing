import React from "react";
import { Switch, Route } from "react-router-dom";

import HomePage from "./components/pages/homepage/homepage.component";
import ShopPage from "./components/pages/shop/shop.component";
import SignInAndSignUpPage from "./components/pages/sign-in-and-sign-up/sign-up-and-sign-in.component";
import Header from "./components/header/header.component";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Header />
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
