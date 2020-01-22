import styled from 'styled-components';

const ButtonIcon = styled.button`
  display: block;
  width: ${({ edit }) => (edit ? '24px' : '30px')};
  height: ${({ edit }) => (edit ? '24px' : '30px')};
  border-radius: ${({ plus, edit }) => (plus || edit ? '50%' : '10px')};
  background-image: url(${({ icon }) => icon});
  background-repeat: no-repeat;
  background-position: center center;
  margin: 0 5px;
  background-size: ${({ plus }) => (plus ? '30%' : '60%')};
  border: none;
  box-shadow: ${({ plus }) => (plus ? '0 3px 10px rgba(0,0,0,.3)' : 'none')};
  background-color: ${({ active, color }) => (active ? 'transparent' : color)};

  &.active {
    background-color: transparent;
  }
`;

export default ButtonIcon;
