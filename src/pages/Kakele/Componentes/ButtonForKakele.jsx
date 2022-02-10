import React from 'react';

import './ButtonForKakele.css';

export default function ButtonForKakele(props) {
  const { onClick, text } = props;
  return (
    <button
      type="button"
      className="btn btn-light mb-2 button-for-kakele"
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
}
