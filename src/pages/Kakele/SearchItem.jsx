import React from 'react';
import { Link } from 'react-router-dom';

export default function SearchItem() {
  return (
    <div className="container d-flex justify-content-center flex-column">
      <Link to="/kakele/set-maker">Criador de set</Link>
      <Link to="/kakele/ore-calculator">Calculadora de minérios</Link>
    </div>
  );
}
