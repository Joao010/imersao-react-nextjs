import propTypes from 'prop-types';
import styled from 'styled-components';
import db from '../../../db.json';

const {borderRadius} = db.theme
const {secondary, contrastText, disabled1} = db.theme.colors;

const Button = styled.button`
  background-color: ${secondary};
  color: ${contrastText};
  border-radius: ${borderRadius};
  border: 0;
  width: 100%;
  padding: 10px 16px;
  font-weight: bold;
  font-size: 14px;
  line-height: 1;
  text-transform: uppercase;
  outline: 0;
  transition: .3s;
  cursor: pointer;
  &:hover, &:focus {
    opacity: .5;
  }
  &:disabled {
    background-color: ${disabled1};
    cursor: not-allowed;
  }
`;

Button.propTypes = {
  type: propTypes.oneOf(['submit', 'type', 'button']).isRequired,
  children: propTypes.node.isRequired,
};

export default Button;