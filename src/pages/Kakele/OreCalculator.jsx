/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable immutable/no-let */
import React, { useState } from 'react';

const minerios = {
  5: { cobre: 5, estanho: 0, prata: 0, ferro: 0, ouro: 0, kks: 10000 },
  10: { cobre: 10, estanho: 5, prata: 0, ferro: 0, ouro: 0, kks: 20000 },
  15: { cobre: 15, estanho: 10, prata: 5, ferro: 0, ouro: 0, kks: 40000 },
  20: { cobre: 20, estanho: 15, prata: 10, ferro: 5, ouro: 0, kks: 80000 },
  25: { cobre: 25, estanho: 20, prata: 15, ferro: 10, ouro: 5, kks: 160000 },
  30: { cobre: 30, estanho: 25, prata: 20, ferro: 15, ouro: 10, kks: 320000 },
  35: { cobre: 35, estanho: 30, prata: 25, ferro: 20, ouro: 15, kks: 640000 },
  40: { cobre: 40, estanho: 35, prata: 30, ferro: 25, ouro: 20, kks: 1280000 },
  45: { cobre: 45, estanho: 40, prata: 35, ferro: 30, ouro: 25, kks: 2560000 },
  50: { cobre: 50, estanho: 45, prata: 40, ferro: 35, ouro: 30, kks: 5120000 },
  55: { cobre: 55, estanho: 50, prata: 45, ferro: 40, ouro: 35, kks: 10240000 },
  60: { cobre: 60, estanho: 55, prata: 50, ferro: 45, ouro: 40, kks: 20480000 },
  65: { cobre: 65, estanho: 60, prata: 55, ferro: 50, ouro: 45, kks: 40960000 },
  70: { cobre: 70, estanho: 65, prata: 60, ferro: 55, ouro: 50, kks: 81920000 },
};

export default function OreCalculator() {
  const [startUpgradeLvl, setStartUpgradeLvl] = useState(0);
  const [finishUpgradeLvl, setFinishUpgradeLvl] = useState(5);
  const [itensNecessarios, setItensNecessarios] = useState();
  const [showAlert, setShowAlert] = useState(false);

  const calculateOreQuantityAndPrice = () => {
    if (startUpgradeLvl >= finishUpgradeLvl) {
      const FIVE_SECONDS = 5000;
      if (!showAlert) {
        setShowAlert(true);
        setTimeout(() => {
          setShowAlert(false);
        }, FIVE_SECONDS);
      }
      return;
    }
    const total = {
      cobre: 0,
      estanho: 0,
      prata: 0,
      ferro: 0,
      ouro: 0,
      kks: 0,
    };
    for (let i = startUpgradeLvl + 5; i <= finishUpgradeLvl; i += 5) {
      total.cobre += minerios[i].cobre;
      total.estanho += minerios[i].estanho;
      total.prata += minerios[i].prata;
      total.ferro += minerios[i].ferro;
      total.ouro += minerios[i].ouro;
      total.kks += minerios[i].kks;
    }
    setItensNecessarios(total);
  };

  return (
    <div className="container d-flex justify-content-center">
      {showAlert && (
        <div
          className="alert alert-warning position-absolute start-50 translate-middle alert-fixed"
          role="alert"
        >
          O upgrade desejado tem que ser maior que o upgrade atual
        </div>
      )}
      <div className="d-flex flex-column">
        <span className="mb-2">
          Selecione o upgrade atual e o upgrade desejado
        </span>
        <div className="input-group mb-2">
          <label
            className="input-group-text"
            htmlFor="inputGroupUpgradeInicial"
          >
            Upgrade atual
          </label>
          <select
            className="form-select"
            id="inputGroupUpgradeInicial"
            onChange={e => setStartUpgradeLvl(Number(e.target.value))}
          >
            <option defaultValue value="0">
              0
            </option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
            <option value="35">35</option>
            <option value="40">40</option>
            <option value="45">45</option>
            <option value="50">50</option>
            <option value="55">55</option>
            <option value="60">60</option>
            <option value="65">65</option>
            <option value="70">70</option>
          </select>
        </div>
        <div className="input-group mb-2">
          <label className="input-group-text" htmlFor="inputGroupUpgradeFinal">
            Upgrade desejado
          </label>
          <select
            className="form-select"
            id="inputGroupUpgradeFinal"
            onChange={e => setFinishUpgradeLvl(Number(e.target.value))}
          >
            <option defaultValue value="5">
              5
            </option>
            <option value="10">10</option>
            <option value="15">15</option>
            <option value="20">20</option>
            <option value="25">25</option>
            <option value="30">30</option>
            <option value="35">35</option>
            <option value="40">40</option>
            <option value="45">45</option>
            <option value="50">50</option>
            <option value="55">55</option>
            <option value="60">60</option>
            <option value="65">65</option>
            <option value="70">70</option>
          </select>
        </div>
        <button
          type="button"
          className="btn btn-light mb-2"
          onClick={calculateOreQuantityAndPrice}
        >
          Calcular
        </button>
        {itensNecessarios && (
          <div>
            <h3>Itens necessários:</h3>
            <div>
              Ouro (kks):{' '}
              {itensNecessarios.kks
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
            </div>
            <div>Cobre Bruto: {itensNecessarios.cobre}</div>
            <div>Estanho Bruto: {itensNecessarios.estanho}</div>
            <div>Prata Bruta: {itensNecessarios.prata}</div>
            <div>Ferro Bruto: {itensNecessarios.ferro}</div>
            <div>Ouro Bruto: {itensNecessarios.ouro}</div>
          </div>
        )}
      </div>
    </div>
  );
}
