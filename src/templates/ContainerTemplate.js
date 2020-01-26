import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from 'components/organisms/Header/Header';
import PropTypes from 'prop-types';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';

const CardWrapper = styled.div`
  max-width: 950px;
  margin: 0 auto;
  margin-top: 40px;
`;

const UserPageTemplate = ({ children, sectionType }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <Header sectionType={sectionType} />
          <CardWrapper>{children}</CardWrapper>
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
