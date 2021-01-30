import React from 'react';
import propTypes from 'prop-types'
import styled from 'styled-components'
import db from '../../../db.json'

export default function Input({setValue, ...props}){
  return(
    <InputBase
    onChange={(ev) => setValue(ev.target.value)}
    
    {...props}
    />
  );
}

const {borderRadius} = db.theme;
const {primary, contrastText, mainDark} = db.theme.colors;

const InputBase = styled.input`
  width: 90%;
  padding: 15px;
  font-size: 14px;
  border: 1px solid ${primary};
  color: ${contrastText};
  background-color: ${mainDark};
  border-radius: ${borderRadius};
  outline: 0;
  margin-bottom: 25px;

  ::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */
    color: ${contrastText}DD;
    opacity: 1; /* Firefox */
  }
`;

Input.defaultProps = {
  value: '',
};

Input.propTypes = {
  value: propTypes.string,
  onChange: propTypes.func.isRequired,
  placeholder: propTypes.func.isRequired,
  name: propTypes.string.isRequired,
};
