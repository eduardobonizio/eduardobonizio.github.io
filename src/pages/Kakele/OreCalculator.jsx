import React, { useState } from 'react';

import Alert from './Componentes/Alert';
import ButtonForKakele from './Componentes/ButtonForKakele';
import InputCheckBox from './Componentes/InputCheckBox';
import OrePriceUpdater from './Componentes/OrePriceUpdater';
import UpgradeSelector from './Componentes/UpgradeSelector';
import {
  activateAlert,
  calculateOreQuantityAndPrice,
  calculateUpgradePriceWithOresPrice,
} from './kakele';

export default function OreCalculator() {
  const [startUpgradeLvl, setStartUpgradeLvl] = useState(0);
  const [finishUpgradeLvl, setFinishUpgradeLvl] = useState(0);
  const [necessaryItens, setNecessaryItens] = useState();
  const [showAlert, setShowAlert] = useState(false);
  const [addOrePriceToTotal, setAddOrePriceToTotal] = useState(false);
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

    if (addOrePriceToTotal) {
      const newTotalPrice = calculateUpgradePriceWithOresPrice(
        totalOres,
        oresPrice,
      );
      totalOres.kks = newTotalPrice;
    }
    setNecessaryItens(totalOres);
  };

  return (
    <div className="container d-flex justify-content-center">
      {showAlert && (
        <Alert message="O upgrade desejado tem que ser maior que o upgrade atual" />
      )}
      <div className="d-flex flex-column">
        <span className="mb-2">
          Selecione o upgrade atual e o upgrade desejado
        </span>
        <UpgradeSelector
          elementId="upgrade-inicial"
          labelText="Upgrade atual"
          onChange={setStartUpgradeLvl}
        />
        <UpgradeSelector
          elementId="upgrade-final"
          labelText="Upgrade desejado"
          onChange={setFinishUpgradeLvl}
        />
        <InputCheckBox
          labelText="Vou comprar os minérios"
          id="adicionarPrecoMinerios"
          onChangeFunc={setAddOrePriceToTotal}
          changeOnCheck={addOrePriceToTotal}
        />
        {addOrePriceToTotal && (
          <OrePriceUpdater oresPrice={oresPrice} setOresPrice={setOresPrice} />
        )}
        <ButtonForKakele onClick={calculateOres} text="Calcular" />
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
