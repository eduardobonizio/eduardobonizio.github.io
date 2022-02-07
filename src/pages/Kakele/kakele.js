import { upgrades } from './kakeleData';

const FIVE_SECONDS = 5000;

const urlParamsToObject = paramsText => {
  // Ex.: /Item=Sowrd-of-Fire Item2=Shield-of-Darkness
  const formatedText = `{"${paramsText['*']
    .replaceAll('=', '":"')
    .replaceAll(' ', '","')
    .replaceAll('-', ' ')}"}`;
  const object = JSON.parse(formatedText);
  return object;
};

const activateAlert = setShowAlert => {
  setShowAlert(true);
  setTimeout(() => {
    setShowAlert(false);
  }, FIVE_SECONDS);
};

const calculateUpgradePriceWithOresPrice = (totalOres, oresPrice) => {
  const { cobre, estanho, prata, ferro, ouro, kks } = totalOres;
  const { copperPrice, tinPrice, silverPrice, ironPrice, goldPrice } =
    oresPrice;

  const totalCopperPrice = copperPrice * cobre;
  const totalTinPrice = tinPrice * estanho;
  const totalSilverPrice = silverPrice * prata;
  const totalIronPrice = ironPrice * ferro;
  const totalGoldPrice = goldPrice * ouro;

  const totalPrice =
    kks +
    totalCopperPrice +
    totalTinPrice +
    totalSilverPrice +
    totalIronPrice +
    totalGoldPrice;

  return totalPrice;
};

const calculateOreQuantityAndPrice = (startUpgradeLvl, finishUpgradeLvl) => {
  const totalOres = {
    cobre: 0,
    estanho: 0,
    prata: 0,
    ferro: 0,
    ouro: 0,
    kks: 0,
  };
  for (let i = startUpgradeLvl + 5; i <= finishUpgradeLvl; i += 5) {
    const { cobre, estanho, prata, ferro, ouro, kks } = upgrades[i];
    totalOres.cobre += cobre;
    totalOres.estanho += estanho;
    totalOres.prata += prata;
    totalOres.ferro += ferro;
    totalOres.ouro += ouro;
    totalOres.kks += kks;
  }
  return totalOres;
};

export {
  urlParamsToObject,
  activateAlert,
  calculateOreQuantityAndPrice,
  calculateUpgradePriceWithOresPrice,
};
