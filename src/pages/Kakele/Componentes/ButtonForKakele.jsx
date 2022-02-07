import React from 'react';

export default function ButtonForKakele(props) {
  const { onClick, text } = props;
  return (
    <button
      type="button"
      className="btn btn-light mb-2"
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
}
