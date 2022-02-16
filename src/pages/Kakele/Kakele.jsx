import React from 'react';
import { Link, Outlet } from 'react-router-dom';

export default function Kakele() {
  return (
    <div className="container d-flex justify-content-center flex-column">
      <div>
        <Link to="/kakele/set-maker">Criador de set</Link>
        <Link to="/kakele/ore-calculator">Calculadora de minérios</Link>
      </div>
      <Outlet />
    </div>
  );
}
