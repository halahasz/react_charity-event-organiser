import styled, { css } from 'styled-components';

const Button = styled.button`
  color: #155724;
  font-size: 14px;
  background-color: #d4edda;
  border-color: #c3e6cb;
  width: 180px;
  height: 40px;
  font-family: 'Open Sans', sans-serif;
  border-radius: 20px;
  cursor: pointer;
  text-transform: uppercase;
  padding: 0;

  ${({ red }) =>
    red &&
    css`
      background-color: #f8d7da;
      border-color: #f5c6cb;
      color: #721c24;
    `}
`;

export default Button;
