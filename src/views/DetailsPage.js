import React, { Component } from 'react';
import ContainerTemplate from 'templates/ContainerTemplate';
import { routes } from 'components/routes';
import PropTypes from 'prop-types';

class DetailsPage extends Component {
  state = {
    sectionType: 'social',
  };

  componentDidMount() {
    switch (this.props.match.path) {
      case routes.social:
        this.setState({ sectionType: 'social' });
        break;
      case routes.waitress:
        this.setState({ sectionType: 'waitress' });
        break;
      case routes.kitchen:
        this.setState({ sectionType: 'kitchen' });
        break;
      case routes.logistics:
        this.setState({ sectionType: 'logistics' });
        break;
      default:
        this.setState({ sectionType: 'cleaning' });
    }
  }

  render() {
    const { match } = this.props;
    return (
      <ContainerTemplate>
        <p>{`is social: ${match.path === routes.socialId}`}</p>
        <p>bjki</p>
      </ContainerTemplate>
    );
  }
}

DetailsPage.propTypes = {
  match: PropTypes.element.isRequired,
};

export default DetailsPage;
