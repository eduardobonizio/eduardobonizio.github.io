import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import Alert from './Componentes/Alert';
import ButtonForKakele from './Componentes/ButtonForKakele';
import InputCheckBox from './Componentes/InputCheckBox';
import OrePriceUpdater from './Componentes/OrePriceUpdater';
import UpgradeSelector from './Componentes/UpgradeSelector';
import { oreCalculatorJsx as textOptions } from './Data/dataLanguages';
import {
  activateAlert,
  addDotToKks,
  calculateOreQuantityAndPrice,
  calculateUpgradePriceWithOresPrice,
} from './Data/kakele';

export default function OreCalculator() {
  const { language } = useSelector(state => state.currentKakeleFilters);
  const text = textOptions[language];

  const [startUpgradeLvl, setStartUpgradeLvl] = useState(0);
  const [desiredUpgradeLvl, setDesiredUpgradeLvl] = useState(0);
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
    if (startUpgradeLvl >= desiredUpgradeLvl) {
      if (!showAlert) activateAlert(setShowAlert);
      setNecessaryItens();
      return;
    }

    const totalOres = calculateOreQuantityAndPrice(desiredUpgradeLvl);

    if (addOrePriceToTotal) {
      const newTotalPrice = calculateUpgradePriceWithOresPrice(
        totalOres,
        oresPrice,
      );
      setNecessaryItens(newTotalPrice);
      return;
    }
    setNecessaryItens(totalOres);
  };

  return (
    <div className="container d-flex justify-content-center">
      {showAlert && (
        <Alert message="O upgrade desejado tem que ser maior que o upgrade atual" />
      )}
      <div className="d-flex flex-column">
        <UpgradeSelector
          elementId="upgrade-inicial"
          labelText={text.startUpgrade}
          onChange={setStartUpgradeLvl}
        />
        <UpgradeSelector
          elementId="upgrade-final"
          labelText={text.finishUpgrade}
          onChange={setDesiredUpgradeLvl}
        />
        <InputCheckBox
          labelText={text.buyOres}
          id="adicionarPrecoMinerios"
          onChangeFunc={setAddOrePriceToTotal}
          changeOnCheck={addOrePriceToTotal}
        />
        {addOrePriceToTotal && (
          <OrePriceUpdater
            oresPrice={oresPrice}
            setOresPrice={setOresPrice}
            text={text}
          />
        )}
        <ButtonForKakele onClick={calculateOres} text="Calcular" />
        {necessaryItens && (
          <div>
            <h3>{text.necessaryItens}:</h3>
            <div>
              {text.kks}: {addDotToKks(necessaryItens.kks)}
            </div>
            <div>
              {text.copperOre}: {necessaryItens.cobre}
            </div>
            <div>
              {text.tinOre}: {necessaryItens.estanho}
            </div>
            <div>
              {text.silverOre}: {necessaryItens.prata}
            </div>
            <div>
              {text.ironOre}: {necessaryItens.ferro}
            </div>
            <div>
              {text.goldOre}: {necessaryItens.ouro}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
