import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/molecules/Card/Card';

const All = () => (
  <UserPageTemplate>
    <Card name="Louis Stanley" email="L.starley@example.com" section="social" />
    <Card name="Louis Stanley" email="L.starley@example.com" section="social" />
    <Card name="Louis Stanley" email="L.starley@example.com" section="social" />
  </UserPageTemplate>
);

export default All;
