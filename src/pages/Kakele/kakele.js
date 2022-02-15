import { UPGRADES_DATA } from './kakeleData';

const FIVE_SECONDS = 5000;

const urlParamsToObject = paramsText => {
  // Ex.: /Item=Sowrd-of-Fire Item2=Shield-of-Darkness
  if (paramsText['*'] === '') return false;
  const formatedText = `{"${paramsText['*']
    .replace('_', '')
    .replaceAll('_', '","')
    .replaceAll('=', '":"')
    .replaceAll('-', ' ')}"}`;

  return JSON.parse(formatedText);
};

const genereateLinkToViewSet = setList => {
  if (!setList) return false;
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
  const upgradeXTimes = finishUpgradeLvl / 5;

  const result = UPGRADES_DATA.reduce(
    (current, next, index) => {
      const currentUpgradeIndex = upgradeXTimes - index;
      const { cobre, estanho, prata, ferro, ouro, kks } =
        UPGRADES_DATA[currentUpgradeIndex];
      return {
        cobre: current.cobre + cobre,
        estanho: current.estanho + estanho,
        prata: current.prata + prata,
        ferro: current.ferro + ferro,
        ouro: current.ouro + ouro,
        kks: current.kks + kks,
      };
    },
    {
      cobre: 0,
      estanho: 0,
      prata: 0,
      ferro: 0,
      ouro: 0,
      kks: 0,
    },
  );
  return result;
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
  if (itensList.length === 0) return false;
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

  if (bestItem[status] > 0) return bestItem;

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
  ignoreSlotElementList,
  element,
) => {
  if (skipItemSlot(characterClass, slot)) return false;

  const ignoreElement = ignoreSlotElementList.includes(slot);

  const { itensFilteredBySlot, itensFilteredBySlotAndElement } = filterItens(
    itensList,
    slot,
    ignoredItens,
    element,
    ignoreElement,
  );

  const alternativeStatus = getAlternativeStatus(slot);

  const bestItem = findBestItem(itensFilteredBySlotAndElement, mainStat);
  if (bestItem) return bestItem;

  const bestItemWithAlternativeStatus = findBestItem(
    itensFilteredBySlotAndElement,
    alternativeStatus,
  );
  if (bestItemWithAlternativeStatus) return bestItem;

  const bestItemWithAlternativeElement = findBestItem(
    itensFilteredBySlot,
    mainStat,
  );
  if (bestItemWithAlternativeElement) return bestItem;

  const bestItemWithAlternativeStatusAndElement = findBestItem(
    itensFilteredBySlot,
    alternativeStatus,
  );
  if (bestItemWithAlternativeStatusAndElement) return bestItem;

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
  const elements = {
    light: {
      name: 'Light',
      quantity: elementQuantityInSet(itens, 'Light'),
    },
    nature: {
      name: 'Nature',
      quantity: elementQuantityInSet(itens, 'Nature'),
    },
    dark: {
      name: 'Dark',
      quantity: elementQuantityInSet(itens, 'Dark'),
    },
  };

  const element = Object.values(elements).sort(
    (a, b) => b.quantity - a.quantity,
  )[0].name;

  const text = `Luz: ${elements.light.quantity}, Natureza: ${elements.nature.quantity}, Trevas: ${elements.dark.quantity}`;

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
