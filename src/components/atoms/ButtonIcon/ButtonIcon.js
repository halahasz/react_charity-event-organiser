import styled from 'styled-components';

const ButtonIcon = styled.button`
  width: ${({ edit }) => (edit ? '24px' : '40px')};
  height: ${({ edit }) => (edit ? '24px' : '40px')};
  border-radius: ${({ plus, edit }) => (plus || edit ? '50%' : '10px')};
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: center center;
  margin: 0 40px;
  background-size: ${({ plus }) => (plus ? '30%' : '55%')};
  border: none;
  box-shadow: ${({ plus }) => (plus ? '0 3px 10px rgba(0,0,0,.3)' : 'none')};
  background-color: ${({ active, color }) => (active ? 'transparent' : color)};
`;

export default ButtonIcon;
