import React from 'react';
import PropTypes from 'prop-types';
// import styled from "styled-components";
import './Input.css';

// const StyledInput = styled.input`
//   border: 1px solid red;
// `;

export default function Input({ primary, type, backgroundColor, ...props }) {
  return (
    <input
      className="ui-input"
      style={backgroundColor && { backgroundColor }}
      type={type}
      {...props}
    />
  );
}

Input.defaultProps = {
  type: 'text',
  backgroundColor: null,
  primary: false,
};

Input.propTypes = {
  backgroundColor: PropTypes.string,
  primary: PropTypes.bool,
  type: PropTypes.oneOf([
    'button',
    'checkbox',
    'color',
    'date',
    'datetime-local',
    'email',
    'file',
    'hidden',
    'image',
    'month',
    'number',
    'password',
    'radio',
    'range',
    'reset',
    'search',
    'submit',
    'tel',
    'text',
    'time',
    'url',
    'week',
  ]),
};
