import React from 'react';
import styled from 'styled-components';
import { storiesOf } from '@storybook/react';
import peopleIcon from 'assets/icons/people.png';
import waitressIcon from 'assets/icons/waitress.png';
import kitchenIcon from 'assets/icons/kitchen.png';
import logisticsIcon from 'assets/icons/logistics.png';
import cleaningIcon from 'assets/icons/cleaning.png';
import settingsIcon from 'assets/icons/settings.svg';
import logoutIcon from 'assets/icons/logout.svg';
import plusIcon from 'assets/icons/plus.svg';
import editIcon from 'assets/icons/edit.svg';
import ButtonIcon from './ButtonIcon';

const YellowBackground = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 500px;
  height: 500px;
  background: ${({ theme }) => theme.primary};
`;

storiesOf('ButtonIcon', module)
  .addDecorator(story => <YellowBackground>{story()}</YellowBackground>)
  .add('Social', () => (
    <ButtonIcon color={({ theme }) => theme.social} icon={peopleIcon} />
  ))
  .add('Weitress', () => (
    <ButtonIcon color={({ theme }) => theme.waitress} icon={waitressIcon} />
  ))
  .add('Logistics', () => (
    <ButtonIcon color={({ theme }) => theme.logistics} icon={logisticsIcon} />
  ))
  .add('Cleaning', () => (
    <ButtonIcon color={({ theme }) => theme.cleaning} icon={cleaningIcon} />
  ))
  .add('Kitchen', () => (
    <ButtonIcon color={({ theme }) => theme.kitchen} icon={kitchenIcon} />
  ))
  .add('Edit', () => (
    <ButtonIcon edit color={({ theme }) => theme.edit} icon={editIcon} />
  ))
  .add('Settings', () => <ButtonIcon active icon={settingsIcon} />)
  .add('Logout', () => <ButtonIcon active icon={logoutIcon} />)
  .add('Plus', () => (
    <ButtonIcon plus color={({ theme }) => theme.plus} icon={plusIcon} />
  ));
