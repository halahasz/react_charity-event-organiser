import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MainTemplate from 'templates/MainTemplate';
import All from 'views/All';
import DetailsPage from 'views/DetailsPage';
import { routes } from 'components/routes';

const Root = () => (
  <BrowserRouter>
    <MainTemplate>
      <Switch>
        <Route exact path={routes.home} component={All} />
        <Route path={routes.socialId} component={DetailsPage} />
        <Route path={routes.waitressId} component={DetailsPage} />
        <Route path={routes.social} component={All} />
        <Route path={routes.waitress} component={All} />
      </Switch>
    </MainTemplate>
  </BrowserRouter>
);

export default Root;
