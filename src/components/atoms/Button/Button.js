import styled from 'styled-components';

const Button = styled.button`
  color: #155724;
  font-size: 14px;
  background-color: ${({ theme }) => theme.primary};
  border-color: #c3e6cb;
  width: 180px;
  height: 40px;
  border-radius: 20px;
  cursor: pointer;
  text-transform: uppercase;
  padding: 0;
`;

export default Button;
