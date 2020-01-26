import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import ContainerTemplate from 'templates/ContainerTemplate';
import plusIcon from 'assets/icons/plus.svg';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import { theme } from 'theme/mainTheme';

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

const UserPageTemplate = ({ children }) => {
  return (
    <>
      <ContainerTemplate>
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
        <StyledButtonIcon plus color={theme.plus} icon={plusIcon} />
      </ContainerTemplate>
    </>
  );
};

UserPageTemplate.propTypes = {
  children: PropTypes.element.isRequired,
};

export default UserPageTemplate;
