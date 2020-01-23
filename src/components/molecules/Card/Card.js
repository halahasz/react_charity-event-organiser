import React from 'react';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Avatar1 from 'assets/avatars/1.jpg';
import editIcon from 'assets/icons/edit.svg';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  box-shadow: 0 2px 7px rgba(0, 0, 0, 0.2);
  background-color: #fff;
  margin-bottom: 3px;
  display: flex;
  align-items: center;
`;
const Avatar = styled.div`
  height: 45px;
  margin: 13px 40px;
  width: 45px;
  padding: 13px;
  background-image: url(${Avatar1});
  border-radius: 10px;
`;

const BreakLine = styled.div`
  height: 45px;
  width: 4px;
  background-color: ${({ activeColor, theme }) => theme[activeColor]};
`;

const Paragraph = styled.p`
  margin: 0 40px;
  font-size: 14px;
`;

const Card = ({ sectionType }) => (
  <StyledWrapper>
    <Avatar />
    <BreakLine activeColor={sectionType} />
    <Paragraph style={{ width: '20%' }}>Louis Stanley</Paragraph>
    <BreakLine activeColor={sectionType} />
    <Paragraph style={{ width: '35%' }}>L.starley@example.com</Paragraph>
    <BreakLine activeColor={sectionType} />
    <Paragraph style={{ width: '12%' }}>social</Paragraph>
    <BreakLine activeColor={sectionType} />
    <ButtonIcon
      style={{ margin: '0 30px' }}
      edit
      icon={editIcon}
      color={({ theme }) => theme.edit}
    />
  </StyledWrapper>
);

Card.propTypes = {
  sectionType: PropTypes.oneOf([
    'social',
    'waitress',
    'logistics',
    'kitchen',
    'cleaning',
  ]),
};

Card.defaultProps = {
  sectionType: 'logistics',
};

export default Card;
