import React from 'react';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Avatar1 from 'assets/avatars/1.jpg';
import editIcon from 'assets/icons/edit.svg';

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
  background-color: ${({ theme }) => theme.social};
`;

const Paragraph = styled.p`
  margin: 0 40px;
  font-size: 14px;
`;

const Card = () => (
  <StyledWrapper>
    <Avatar />
    <BreakLine />
    <Paragraph>Louis Stanley</Paragraph>
    <BreakLine />
    <Paragraph>L.starley@example.com</Paragraph>
    <BreakLine />
    <Paragraph>social</Paragraph>
    <BreakLine />
    <ButtonIcon edit icon={editIcon} color={({ theme }) => theme.edit} />
  </StyledWrapper>
);

export default Card;
