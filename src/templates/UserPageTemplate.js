import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Header from 'components/organisms/Header/Header';
import PropTypes from 'prop-types';
import GlobalStyle from 'theme/GlobalStyle';
import { theme } from 'theme/mainTheme';
import plusIcon from 'assets/icons/plus.svg';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';

const CardWrapper = styled.div`
  max-width: 950px;
  margin: 0 auto;
  margin-top: 40px;
`;
const CardsHead = styled.div`
  max-width: 950px;
  margin: 0 auto;
  margin-top: 20px;
  display: flex;
  align-items: center;
`;

const H1 = styled.h1`
  text-align: center;
  font-size: 20px;
  margin: 0;
`;

const StyledButtonIcon = styled(ButtonIcon)`
  position: absolute;
  right: 12%;
  top: 120px;
  width: 35px;
  height: 35px;
`;

const UserPageTemplate = ({ children, sectionType }) => {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <>
          <Header sectionType={sectionType} />
          <StyledButtonIcon plus color={theme.plus} icon={plusIcon} />
          <CardWrapper>
            <H1 as="h1">All Volunteers</H1>
            <CardsHead>
              <p style={{ margin: '0 40px', color: '#5F5F5F' }}>photo</p>
              <p
                style={{
                  marginLeft: '45px',
                  width: '20%',
                  color: '#5F5F5F',
                }}
              >
                name
              </p>
              <p
                style={{
                  marginLeft: '41px',
                  width: '35%',
                  color: '#5F5F5F',
                }}
              >
                e-mail
              </p>
              <p style={{ marginLeft: '10px', color: '#5F5F5F' }}>section</p>
            </CardsHead>
            {children}
          </CardWrapper>
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
