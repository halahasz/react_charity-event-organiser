import React from 'react';
import Button from 'components/Button/Button';
import GlobalStyle from 'theme/GlobalStyle';

const Root = () => (
  <div>
    <GlobalStyle />
    <h1>Hello Halina</h1>
    <Button>Save</Button>
    <Button red>Remove</Button>
  </div>
);

export default Root;
