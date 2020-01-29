import React from 'react';
import UserPageTemplate from 'templates/UserPageTemplate';
import Card from 'components/molecules/Card/Card';

const All = () => (
  <UserPageTemplate>
    <Card
      id="1"
      name="Louis Stanley"
      email="L.starley@example.com"
      section="social"
    />
    <Card
      id="2"
      name="Louis Stanley"
      email="L.starley@example.com"
      section="social"
    />
    <Card
      id="3"
      name="Louis Stanley"
      email="L.starley@example.com"
      section="social"
    />
  </UserPageTemplate>
);

export default All;
