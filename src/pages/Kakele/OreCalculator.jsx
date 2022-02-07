import React, { useState } from 'react';

import {
  activateAlert,
  calculateOreQuantityAndPrice,
  calculateUpgradePriceWithOresPrice,
} from './kakele';

export default function OreCalculator() {
  const UPGRADES = [0, 5, 10, 15, 20, 25, 30, 35, 40, 45, 50, 55, 60, 65, 70];
  const [startUpgradeLvl, setStartUpgradeLvl] = useState(0);
  const [finishUpgradeLvl, setFinishUpgradeLvl] = useState(5);
  const [necessaryItens, setNecessaryItens] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const [showOresPricesFiels, setShowOresPricesFiels] = useState(false);
  const [oresPrice, setOresPrice] = useState({
    copperPrice: 0,
    tinPrice: 0,
    silverPrice: 0,
    ironPrice: 0,
    goldPrice: 0,
  });

  const calculateOres = () => {
    if (startUpgradeLvl >= finishUpgradeLvl) {
      if (!showAlert) activateAlert(setShowAlert);
      setNecessaryItens();
      return;
    }

    const totalOres = calculateOreQuantityAndPrice(
      startUpgradeLvl,
      finishUpgradeLvl,
    );

    if (showOresPricesFiels) {
      const newTotalPrice = calculateUpgradePriceWithOresPrice(
        totalOres,
        oresPrice,
      );
      totalOres.kks = newTotalPrice;
    }
    setNecessaryItens(totalOres);
  };

  const generateUpgradeSelectOptions = (
    initialValue,
    elementId,
    labelText,
    functionOnChange,
  ) => (
    <div className="input-group mb-2">
      <label className="input-group-text" htmlFor={elementId}>
        {labelText}
      </label>
      <select
        className="form-select"
        id={elementId}
        onChange={e => functionOnChange(Number(e.target.value))}
      >
        <option defaultValue value={initialValue}>
          {initialValue}
        </option>
        {UPGRADES.map(upgradeValue => {
          if (upgradeValue !== initialValue) {
            return <option value={upgradeValue}>{upgradeValue}</option>;
          }
        })}
      </select>
    </div>
  );

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
        {generateUpgradeSelectOptions(
          0,
          'inputGroupUpgradeInicial',
          'Upgrade atual',
          setStartUpgradeLvl,
        )}
        {generateUpgradeSelectOptions(
          5,
          'inputGroupUpgradeFinal',
          'Upgrade desejado',
          setFinishUpgradeLvl,
        )}
        <div className="input-group mb-2">
          <div className="input-group-text">
            <input
              className="form-check-input"
              type="checkbox"
              id="adicionarPrecoMinerios"
              aria-label="Checkbox for following text input"
              onChange={() => setShowOresPricesFiels(!showOresPricesFiels)}
            />
          </div>
          <label htmlFor="adicionarPrecoMinerios" className="input-group-text">
            Vou comprar os minérios
          </label>
        </div>
        {showOresPricesFiels && (
          <div className="d-flex flex-column">
            <div className="input-group mb-2">
              <span className="input-group-text" id="preco-cobre-bruto">
                Preço Cobre Bruto
              </span>
              <input
                type="number"
                className="form-control"
                placeholder="Preço do Cobre Bruto"
                aria-label="Preço do Cobre Bruto"
                aria-describedby="preco-cobre-bruto"
                value={oresPrice.copperPrice}
                onChange={e =>
                  setOresPrice({
                    ...oresPrice,
                    copperPrice: Number(e.target.value),
                  })
                }
              />
            </div>
            <div className="input-group mb-2">
              <span className="input-group-text" id="preco-estanho-bruto">
                Preço Estanho Bruto
              </span>
              <input
                type="number"
                className="form-control"
                placeholder="Preço do Estanho Bruto"
                aria-label="Preço do Estanho Bruto"
                aria-describedby="preco-estanho-bruto"
                value={oresPrice.tinPrice}
                onChange={e =>
                  setOresPrice({
                    ...oresPrice,
                    tinPrice: Number(e.target.value),
                  })
                }
              />
            </div>
            <div className="input-group mb-2">
              <span className="input-group-text" id="preco-prata-bruta">
                Preço Prata Bruta
              </span>
              <input
                type="number"
                className="form-control"
                placeholder="Preço da Prata Bruta"
                aria-label="Preço da Prata Bruta"
                aria-describedby="preco-prata-bruta"
                value={oresPrice.silverPrice}
                onChange={e =>
                  setOresPrice({
                    ...oresPrice,
                    silverPrice: Number(e.target.value),
                  })
                }
              />
            </div>
            <div className="input-group mb-2">
              <span className="input-group-text" id="preco-ferro-bruto">
                Preço Ferro Bruto
              </span>
              <input
                type="number"
                className="form-control"
                placeholder="Preço do Ferro Bruto"
                aria-label="Preço do Ferro Bruto"
                aria-describedby="preco-ferro-bruto"
                value={oresPrice.ironPrice}
                onChange={e =>
                  setOresPrice({
                    ...oresPrice,
                    ironPrice: Number(e.target.value),
                  })
                }
              />
            </div>
            <div className="input-group mb-2">
              <span className="input-group-text" id="preco-ouro-bruto">
                Preço Ouro Bruto
              </span>
              <input
                type="number"
                className="form-control"
                placeholder="Preço do Ouro Bruto"
                aria-label="Preço do Ouro Bruto"
                aria-describedby="preco-ouro-bruto"
                value={oresPrice.goldPrice}
                onChange={e =>
                  setOresPrice({
                    ...oresPrice,
                    goldPrice: Number(e.target.value),
                  })
                }
              />
            </div>
          </div>
        )}
        <button
          type="button"
          className="btn btn-light mb-2"
          onClick={calculateOres}
        >
          Calcular
        </button>
        {necessaryItens && (
          <div>
            <h3>Itens necessários:</h3>
            <div>
              Ouro (kks):{' '}
              {necessaryItens.kks
                .toString()
                .replace(/\B(?=(\d{3})+(?!\d))/g, '.')}
            </div>
            <div>Cobre Bruto: {necessaryItens.cobre}</div>
            <div>Estanho Bruto: {necessaryItens.estanho}</div>
            <div>Prata Bruta: {necessaryItens.prata}</div>
            <div>Ferro Bruto: {necessaryItens.ferro}</div>
            <div>Ouro Bruto: {necessaryItens.ouro}</div>
          </div>
        )}
      </div>
    </div>
  );
}
