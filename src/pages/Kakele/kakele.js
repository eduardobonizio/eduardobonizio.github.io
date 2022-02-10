import { upgrades } from './kakeleData';

const FIVE_SECONDS = 5000;

const urlParamsToObject = paramsText => {
  // Ex.: /Item=Sowrd-of-Fire Item2=Shield-of-Darkness
  const formatedText = `{"${paramsText['*']
    .replace('_', '')
    .replaceAll('_', '","')
    .replaceAll('=', '":"')
    .replaceAll('-', ' ')}"}`;
  const object = JSON.parse(formatedText);
  return object;
};

const genereateLinkToViewSet = (setList, origin) => {
  if (!setList) return;
  const link = setList.reduce((anterior, proximo) => {
    if (proximo.level > 0) {
      const adicionarTexto = `${proximo.slot}=${proximo.name}`.replaceAll(
        ' ',
        '-',
      );
      return `${anterior}_${adicionarTexto}`;
    }
    return anterior;
  }, '');

  return `${origin}/kakele/set/${link}`;
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
    item => item.slot === slot && !ignoreItensList.includes(item.name),
  );

const findBestItem = (itensList, status) => {
  if (itensList.length === 0) return;
  const bestItem = itensList.reduce((previous, next) => {
    if (next[status] >= previous[status] && next[status] > 0) {
      return next;
    }
    return previous;
  });

  return bestItem;
};

const filterItensByElement = (itensList, element) =>
  itensList.filter(item => item.energy === element || item.energy === 'None');

const getAlternativeStatus = slot => {
  let alternativeStatus;
  if (slot === 'weapon') {
    alternativeStatus = 'attack';
  } else if (slot === 'necklace') {
    alternativeStatus = 'magic';
  } else {
    alternativeStatus = 'armor';
  }

  return alternativeStatus;
};

const findBestSet = (
  itensList,
  status,
  slot,
  classe,
  ignoreItensList,
  ignorarElemento,
  slotsComElementoIgnorado,
  element,
) => {
  let bestItem = false;

  console.log(classe);
  if (
    (classe === 'Berserker' || classe === 'Hunter') &&
    (slot === 'shield' || slot === 'book')
  ) {
    return bestItem;
  }

  if ((classe === 'Mage' || classe === 'Alchemist') && slot === 'shield') {
    return bestItem;
  }

  if (classe === 'Warrior' && slot === 'book') {
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

    if (!bestItem) {
      const alternativeStatus = getAlternativeStatus(slot);
      bestItem = findBestItem(itensListByRequestedElement, alternativeStatus);
    }
  }

  // Se não encontrou nem um item na opção anterior
  if (!bestItem) {
    const alternativeStatus = getAlternativeStatus(slot);
    bestItem = findBestItem(onlyRequestedSlotItensList, alternativeStatus);
  }
  return bestItem || false;
};

const filterItensByLevenAndClass = (listaDeItens, level, classe) =>
  listaDeItens.filter(
    item =>
      level >= Number(item.level) &&
      (item.vocation === classe || item.vocation === 'All'),
  );

const elementQuantityInSet = (itensList, element) =>
  itensList.filter(item => item.energy === element).length;

const checkSetElement = itens => {
  const luz = elementQuantityInSet(itens, 'Light');
  const natureza = elementQuantityInSet(itens, 'Nature');
  const trevas = elementQuantityInSet(itens, 'Dark');
  const neutral = elementQuantityInSet(itens, 'None');

  return `Luz: ${luz}, Natureza: ${natureza}, Trevas: ${trevas}, Neutro: ${neutral}`;
};

const findItemByName = (itemList, itemName) =>
  itemList.filter(item => item.name === itemName);

export {
  urlParamsToObject,
  activateAlert,
  calculateOreQuantityAndPrice,
  calculateUpgradePriceWithOresPrice,
  addDotToKks,
  findBestSet,
  filterItensByLevenAndClass,
  checkSetElement,
  genereateLinkToViewSet,
  findItemByName,
};
