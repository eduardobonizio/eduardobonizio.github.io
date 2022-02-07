import React from 'react';

export default function Alert(props) {
  const { message } = props;
  return (
    <div
      className="alert alert-warning position-absolute start-50 translate-middle alert-fixed"
      role="alert"
    >
      {message}
    </div>
  );
}
