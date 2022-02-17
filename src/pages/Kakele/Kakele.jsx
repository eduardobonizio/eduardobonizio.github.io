import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

import { updateItensFilter } from '../../store/actions/KakeleFilters.actions';
import ButtonForKakele from './Componentes/ButtonForKakele';

export default function Kakele() {
  const dispatch = useDispatch();
  const { language } = useSelector(state => state.currentKakeleFilters);

  useEffect(() => {
    const selectedLanguage = localStorage.getItem('language') || false;
    dispatch(updateItensFilter('CHANGE_LANGUAGE', selectedLanguage));
  }, []);

  const changeLanguage = newLanguage =>
    dispatch(updateItensFilter('CHANGE_LANGUAGE', newLanguage));

  if (!language)
    return (
      <div className="container d-flex flex-column align-items-center">
        <ButtonForKakele onClick={() => changeLanguage('En')} text="English" />
        <ButtonForKakele
          onClick={() => changeLanguage('PtBr')}
          text="Português"
        />
      </div>
    );

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
