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

const genereateLinkToViewSet = setList => {
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

const filterItensByElement = (itensList, element, ignoreElement) =>
  itensList.filter(
    item => item.energy === element || element === 'All' || ignoreElement,
  );

const filterItens = (
  itensList,
  slot,
  ignoreItensList,
  element,
  ignoreElement,
) => {
  const itensFilteredBySlot = filterItensBySlot(
    itensList,
    slot,
    ignoreItensList,
  );
  const itensFilteredBySlotAndElement = filterItensByElement(
    itensFilteredBySlot,
    element,
    ignoreElement,
  );

  return { itensFilteredBySlot, itensFilteredBySlotAndElement };
};

const getAlternativeStatus = slot => {
  if (slot === 'weapon') return 'attack';
  if (slot === 'necklace') return 'magic';

  return 'armor';
};

const findBestItem = (itensList, status) => {
  if (itensList.length === 0) return;
  const bestItem = itensList
    .sort((a, b) => a.level - b.level)
    .sort((a, b) => a.status - b.status)
    .reduce(
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

const skipItemSlot = (characterClass, slot) => {
  if (
    (characterClass === 'Berserker' || characterClass === 'Hunter') &&
    (slot === 'shield' || slot === 'book')
  ) {
    return true;
  }

  if (
    (characterClass === 'Mage' || characterClass === 'Alchemist') &&
    slot === 'shield'
  ) {
    return true;
  }

  if (characterClass === 'Warrior' && slot === 'book') {
    return true;
  }
  return false;
};

const findBestSet = (
  itensList,
  mainStat,
  slot,
  characterClass,
  ignoredItens,
  ignoreThisSlotsElement,
  element,
) => {
  if (skipItemSlot(characterClass, slot)) return false;
  let bestItem = false;

  const ignoreThisSlotElement = ignoreThisSlotsElement.includes(slot);

  const { itensFilteredBySlot, itensFilteredBySlotAndElement } = filterItens(
    itensList,
    slot,
    ignoredItens,
    element,
    ignoreThisSlotElement,
  );

  // Tenta encontrar o melhor item com o status e elemento selecionado
  bestItem = findBestItem(itensFilteredBySlotAndElement, mainStat);
  if (bestItem && bestItem[mainStat] > 0) return bestItem;

  const alternativeStatus = getAlternativeStatus(slot);

  // Se não retornar o item ou o valor status selecionado for zero, ele faz outra busca com um status alternativo
  bestItem = findBestItem(itensFilteredBySlotAndElement, alternativeStatus);
  if (bestItem && bestItem[alternativeStatus] > 0) return bestItem;

  // Se mesmo com o status alternativo ele não encontarar um item do elemento correto, ele vai tentar encontrar um item de qualquer elemento, mas com o status selecionado
  bestItem = findBestItem(itensFilteredBySlot, mainStat);
  if (bestItem && bestItem[mainStat] > 0) return bestItem;

  // Por ultimo se não encontrar um item, ele vai procurar o melhor item com o status alternativo
  bestItem = findBestItem(itensFilteredBySlot, alternativeStatus);
  if (bestItem && bestItem[alternativeStatus] > 0) return bestItem;

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
  itemList.filter(
    item =>
      item.name.toLowerCase().includes(itemName.toLowerCase()) ||
      item.namePtBr.toLowerCase().includes(itemName.toLowerCase()),
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
