import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './pages/home';
import Shop from './pages/shop';

export default function App() {
  return (
    <Fragment>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route exact path="/shops">
          <Shop />
        </Route>
      </Switch>
    </Fragment>
  );
}
