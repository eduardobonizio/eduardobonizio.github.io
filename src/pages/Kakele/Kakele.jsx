import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Kakele() {
  return (
    <div className="container d-flex justify-content-center flex-column">
      <div className="container d-flex justify-content-around mb-2">
        <Link to="/kakele/set">Ver Set</Link>
        <Link to="/kakele/set-maker">Gerar set</Link>
        <Link to="/kakele/search-item">Procurar Item</Link>
        <Link to="/kakele/ore-calculator">Minérios</Link>
      </div>
      <Outlet />
    </div>
  );
}
