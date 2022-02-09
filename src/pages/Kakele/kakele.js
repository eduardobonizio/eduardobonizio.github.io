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

const addDotToKks = number =>
  number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

const filterItensBySlot = (itensList, slot, ignoreItensList) =>
  itensList.filter(
    item =>
      item.Slot === slot &&
      !(
        ignoreItensList.includes(item.Equipment) ||
        ignoreItensList.includes(item.Weapon)
      ),
  );

const findBestItem = (itensList, status) => {
  const bestItem = itensList.reduce((previous, next) => {
    if (next[status] >= previous[status] && next[status] > 0) {
      return next;
    }
    return previous;
  });

  return bestItem;
};

const filterItensByElement = (itensList, element) =>
  itensList.filter(item => item.Energy === element);

const getAlternativeStatus = slot => {
  let alternativeStatus;
  if (slot === 'Weapon') {
    alternativeStatus = 'Attack';
  } else if (slot === 'Necklace') {
    alternativeStatus = 'Magic';
  } else {
    alternativeStatus = 'Armor';
  }

  return alternativeStatus;
};

const filtraMelhoresEquipamentos = (
  itensList,
  status,
  slot,
  classe,
  ignoreItensList,
  ignorarElemento,
  slotsComElementoIgnorado,
  element,
) => {
  let bestItem = {
    Equipment: '',
    Level: 0,
    Vocation: 'All',
    Energy: 'None',
    Armor: 0,
    Value: 0,
    Sources: '',
    Slot: '',
    Attack: 0,
    Magic: 0,
    Haste: 0,
  };

  if (classe === 'Berserker' && (slot === 'Shield' || slot === 'Book')) {
    return bestItem;
  }

  if ((classe === 'Mage' || classe === 'Alchemist') && slot === 'Shield') {
    return bestItem;
  }

  // Pega somente os itens desse slot
  const onlyRequestedSlotItensList = filterItensBySlot(
    itensList,
    slot,
    ignoreItensList,
  );

  // Se um dos filtros de elemento estiver ativo
  if (ignorarElemento || slotsComElementoIgnorado.includes(slot)) {
    bestItem = findBestItem(onlyRequestedSlotItensList, status);
  } else {
    // Se não, procura um item com elemento específicado
    const itensListByRequestedElement = filterItensByElement(
      onlyRequestedSlotItensList,
      element,
    );

    bestItem = findBestItem(itensListByRequestedElement, status);

    if (bestItem.Level === 0) {
      const alternativeStatus = getAlternativeStatus(slot);
      bestItem = findBestItem(itensListByRequestedElement, alternativeStatus);
    }
  }

  // Se não encontrou nem um item na opção anterior
  if (bestItem.Level === 0) {
    const alternativeStatus = getAlternativeStatus(slot);
    bestItem = findBestItem(onlyRequestedSlotItensList, alternativeStatus);
  }

  return bestItem;
};

const filterItensByLevenAndClass = (listaDeItens, level, classe) =>
  listaDeItens.filter(
    item =>
      level >= Number(item.Level) &&
      (item.Vocation === classe || item.Vocation === 'All'),
  );

export {
  urlParamsToObject,
  activateAlert,
  calculateOreQuantityAndPrice,
  calculateUpgradePriceWithOresPrice,
  addDotToKks,
  filtraMelhoresEquipamentos,
  filterItensByLevenAndClass,
};
