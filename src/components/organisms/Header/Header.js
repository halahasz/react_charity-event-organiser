import React from 'react';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Heading from 'components/atoms/Heading/Heading';
import settingsIcon from 'assets/icons/settings.svg';
import logoutIcon from 'assets/icons/logout.svg';
import usersIcon from 'assets/icons/users.svg';
import peopleIcon from 'assets/icons/people.png';
import waitressIcon from 'assets/icons/waitress.png';
import kitchenIcon from 'assets/icons/kitchen.png';
import logisticsIcon from 'assets/icons/logistics.png';
import cleaningIcon from 'assets/icons/cleaning.png';

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
  font-size: 18px;
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
          <IconsContainer>
            <UsersIcon active icon={usersIcon} />
            <Heading>68</Heading>
            <p style={{ marginLeft: '10px' }}>volunteers</p>
          </IconsContainer>
          <IconsContainer>
            <ButtonIcon color={({ theme }) => theme.social} icon={peopleIcon} />
            <ButtonIcon
              color={({ theme }) => theme.waitress}
              icon={waitressIcon}
            />
            <ButtonIcon
              color={({ theme }) => theme.kitchen}
              icon={kitchenIcon}
            />
            <ButtonIcon
              color={({ theme }) => theme.logistics}
              icon={logisticsIcon}
            />
            <ButtonIcon
              color={({ theme }) => theme.cleaning}
              icon={cleaningIcon}
            />
          </IconsContainer>
        </HeaderContainer>
      </BottomHeader>
    </>
  );
};

export default Header;
