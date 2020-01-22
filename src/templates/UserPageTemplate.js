import React from 'react';
import Header from 'components/organisms/Header/Header';
import PropTypes from 'prop-types';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

const UserPageTemplate = ({ children, sectionType }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <Header sectionType={sectionType} />
          {children}
        </>
      </ThemeProvider>
    </>
  );
};

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
  sectionType: PropTypes.oneOf([
    'social',
    'waitress',
    'logistics',
    'kitchen',
    'cleaning',
  ]),
};

UserPageTemplate.defaultProps = {
  sectionType: 'logistics',
};

export default UserPageTemplate;
