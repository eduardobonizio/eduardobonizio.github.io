import { upgrades } from './kakeleData';

const FIVE_SECONDS = 5000;

const urlParamsToObject = paramsText => {
  // Ex.: /Item=Sowrd-of-Fire Item2=Shield-of-Darkness
  if (paramsText['*'] === '') return;
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

  if (origin) return `${origin}/kakele/set/${link}`;
  return `/kakele/set/${link}`;
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
      (item.slot === slot &&
        !ignoreItensList.includes(item.name) &&
        !ignoreItensList.includes(item.namePtBr)) ||
      slot === 'All',
  );

const findBestItem = (itensList, status) => {
  if (itensList.length === 0) return;
  const bestItem = itensList.reduce(
    (previous, next) => {
      if (next[status] >= previous[status]) {
        return next;
      }
      return previous;
    },
    { [status]: 0 },
  );
  if (bestItem.name) return bestItem;
  return false;
};

const filterItensByElement = (itensList, element) =>
  itensList.filter(item => item.energy === element || element === 'All');

const getAlternativeStatus = slot => {
  if (slot === 'weapon') return 'attack';
  if (slot === 'necklace') return 'magic';

  return 'armor';
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
  }

  // Se não encontrou nem um item na opção anterior
  if (!bestItem) {
    const alternativeStatus = getAlternativeStatus(slot);
    bestItem = findBestItem(onlyRequestedSlotItensList, alternativeStatus);
  }
  return bestItem || false;
};

const filterItensByLevelAndClass = (listaDeItens, level, classe) =>
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
  let element = 'Neutral';
  if (luz >= 5) element = 'Light';
  if (natureza >= 5) element = 'Nature';
  if (trevas >= 5) element = 'Dark';
  const text = `Luz: ${luz}, Natureza: ${natureza}, Trevas: ${trevas}`;

  return { text, element };
};

const findItemByName = (itemList, itemName) =>
  itemList.filter(item =>
    item.name.toLowerCase().includes(itemName.toLowerCase()),
  );

export {
  urlParamsToObject,
  activateAlert,
  calculateOreQuantityAndPrice,
  calculateUpgradePriceWithOresPrice,
  addDotToKks,
  findBestSet,
  filterItensByLevelAndClass,
  checkSetElement,
  genereateLinkToViewSet,
  findItemByName,
  filterItensBySlot,
  filterItensByElement,
};
