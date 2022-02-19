import React from 'react';

export default function KakeleRedirect() {
  const link = window.location.href;
  const newLink = link.replace(
    'https://eduardobonizio.github.io/kakele',
    'https://www.kakeletools.com/',
  );

  return (
    <div className="container d-flex justify-content-center">
      <span>
        Este link foi movido permanentemente
        <br />
        <a href={newLink}>clique aqui</a> para ser redirecionado
      </span>
    </div>
  );
}
