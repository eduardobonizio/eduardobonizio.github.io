import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet } from 'react-router-dom';

import { updateItensFilter } from '../../store/actions/KakeleFilters.actions';
import ButtonForKakele from './Componentes/ButtonForKakele';

const textOptions = {
  EN: {
    showSet: 'Show Set',
    generateSet: 'Generate Set',
    searchItem: 'Search Item',
    oreCalculator: 'Upgrades',
  },
  PTBR: {
    showSet: 'Ver Set',
    generateSet: 'Gerar Set',
    searchItem: 'Procurar Item',
    oreCalculator: 'Forja',
  },
};

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
        <ButtonForKakele onClick={() => changeLanguage('EN')} text="English" />
        <ButtonForKakele
          onClick={() => changeLanguage('PTBR')}
          text="Português"
        />
      </div>
    );

  return (
    <div className="container d-flex justify-content-center flex-column">
      <div className="container d-flex justify-content-around mb-2">
        <Link to="set">{textOptions[language].showSet}</Link>
        <Link to="set-maker">{textOptions[language].generateSet}</Link>
        <Link to="search-item">{textOptions[language].searchItem}</Link>
        <Link to="ore-calculator">{textOptions[language].oreCalculator}</Link>
      </div>
      <Outlet />
    </div>
  );
}
