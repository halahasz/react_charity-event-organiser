import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import All from 'views/All';

const Root = () => (
  <MainTemplate>
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={All} />
      </Switch>
    </BrowserRouter>
  </MainTemplate>
);

export default Root;
