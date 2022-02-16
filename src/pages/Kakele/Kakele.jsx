import React from 'react';
import { Link, Outlet, useOutletContext } from 'react-router-dom';

export default function Kakele() {
  const language = useOutletContext();
  console.log(language);
  return (
    <div className="container d-flex justify-content-center flex-column">
      <div className="container d-flex justify-content-around mb-2">
        <Link to="set">Ver Set</Link>
        <Link to="set-maker">Gerar set</Link>
        <Link to="search-item">Procurar Item</Link>
        <Link to="ore-calculator">Minérios</Link>
      </div>
      <Outlet />
    </div>
  );
}
