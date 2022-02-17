import React from 'react';

export default function Alert(props) {
  const { message } = props;
  return (
    <div className="alert alert-warning" role="alert">
      {message}
    </div>
  );
}
