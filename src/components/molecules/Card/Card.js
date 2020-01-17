import React from 'react';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Avatar1 from 'assets/avatars/1.jpg';
import editIcon from 'assets/icons/edit.svg';
import PropTypes from 'prop-types';

const StyledWrapper = styled.div`
  box-shadow: 0 3px 3px rgba(0, 0, 0, 0.2);
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
    <Paragraph>Louis Stanley</Paragraph>
    <BreakLine activeColor={sectionType} />
    <Paragraph>L.starley@example.com</Paragraph>
    <BreakLine activeColor={sectionType} />
    <Paragraph>social</Paragraph>
    <BreakLine activeColor={sectionType} />
    <ButtonIcon edit icon={editIcon} color={({ theme }) => theme.edit} />
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
