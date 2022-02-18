import React from 'react';

export default function KakeleRedirect() {
  const link = window.location.href;
  const newLink = link.replace(
    'http://localhost:3000/kakele',
    'https://eduardobonizio.github.io/kakele-db',
  );

  return (
    <div>
      <a href={newLink}>
        <span>
          Este link foi movido permamentemente, clique para ser redirecionado
        </span>
      </a>
    </div>
  );
}
