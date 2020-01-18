import React from 'react';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import settingsIcon from 'assets/icons/settings.svg';
import logoutIcon from 'assets/icons/logout.svg';
import usersIcon from 'assets/icons/users.svg';

const UpperHeader = styled.div`
  height: 40px;
  background-color: #ededed;
`;
const HeaderContainer = styled.div`
  max-width: 1200px;
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  margin: 0 auto;
`;
const Logo = styled.h1`
  font-size: 19px;
  font-weight: bold;
  margin: 0;
`;
const IconsContainer = styled.div`
  display: flex;
  align-items: center;
`;
const Login = styled.p`
  margin-right: 40px;
  font-size: 16px;
  font-weight: 600;
`;
const SettingsIcon = styled(ButtonIcon)`
  margin: 0;
`;
const UsersIcon = styled(ButtonIcon)`
  margin: 0;
  background-position-x: 0;
`;
const BottomHeader = styled.div`
  height: 40px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
`;

const Header = () => {
  return (
    <>
      <UpperHeader>
        <HeaderContainer>
          <Logo>Volunteers Organizer</Logo>
          <IconsContainer>
            <Login>Halina</Login>
            <SettingsIcon active icon={settingsIcon} />
            <SettingsIcon active icon={logoutIcon} />
          </IconsContainer>
        </HeaderContainer>
      </UpperHeader>
      <BottomHeader>
        <HeaderContainer>
          <UsersIcon active icon={usersIcon} />
          <IconsContainer>
            <SettingsIcon active icon={settingsIcon} />
            <SettingsIcon active icon={logoutIcon} />
          </IconsContainer>
        </HeaderContainer>
      </BottomHeader>
    </>
  );
};

export default Header;
