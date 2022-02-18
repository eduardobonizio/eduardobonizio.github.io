import React from 'react';

export default function KakeleRedirect() {
  const link = window.location.href;
  const newLink = link.replace(
    'https://eduardobonizio.github.io/kakele',
    'https://eduardobonizio.github.io/kakele-db',
  );

  return (
    <div className="container d-flex justify-content-center">
      <span>
        Este link foi movido, <a href={newLink}>clique aqui</a> para ser
        redirecionado
      </span>
    </div>
  );
}
