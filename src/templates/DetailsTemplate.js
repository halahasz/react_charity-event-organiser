import React from 'react';
import { Link } from 'react-router-dom';

const DetailsTemplate = () => {
  return (
    <>
      <h1>Louis Stanley</h1>
      <p>L.starley@example.com</p>
      <p>social</p>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, impedit
        sed fuga delectus eos soluta iure beatae quas excepturi dignissimos ex
        consequatur est pariatur, quidem ratione rerum? Provident, repellendus
        voluptate.
      </p>
      <Link to="/">Go back</Link>
    </>
  );
};

export default DetailsTemplate;
