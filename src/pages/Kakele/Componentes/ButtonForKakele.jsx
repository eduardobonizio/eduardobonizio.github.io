import React from 'react';

import './css/ButtonForKakele.css';

export default function ButtonForKakele(props) {
  const { onClick, text } = props;
  return (
    <button
      type="button"
      className="button-for-kakele"
      onClick={() => onClick()}
    >
      {text}
    </button>
  );
}
