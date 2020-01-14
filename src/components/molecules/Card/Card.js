import React from 'react';
import styled from 'styled-components';
import ButtonIcon from 'components/atoms/ButtonIcon/ButtonIcon';
import Avatar1 from 'assets/avatars/1.jpg';

const StyledWrapper = styled.div`
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.3);
  display: flex;
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
  margin-top: 13px;
`;

const Card = () => (
  <StyledWrapper>
    <Avatar />
    <BreakLine />
    <ButtonIcon />
  </StyledWrapper>
);

export default Card;
