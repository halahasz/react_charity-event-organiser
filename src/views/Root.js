import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import All from 'views/All';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path="/" component={All} />
        <Route exact path="/social" component={All} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
