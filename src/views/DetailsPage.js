import React from 'react';
import ContainerTemplate from 'templates/ContainerTemplate';
import { routes } from 'components/routes';
import PropTypes from 'prop-types';

const DetailsPage = ({ match }) => {
  return (
    <>
      <ContainerTemplate>
        <p>{`is social: ${match.path === routes.socialId}`}</p>
        <p>bjki</p>
      </ContainerTemplate>
    </>
  );
};

DetailsPage.propTypes = {
  match: PropTypes.element.isRequired,
};

export default DetailsPage;
