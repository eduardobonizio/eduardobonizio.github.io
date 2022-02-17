/* eslint-disable no-unused-vars */
const kakeleJsx = {
  EN: {
    showSet: 'Show Set',
    generateSet: 'Generate Set',
    searchItem: 'Search',
    oreCalculator: 'Upgrades',
  },
  PTBR: {
    showSet: 'Ver Set',
    generateSet: 'Gerar Set',
    searchItem: 'Procurar Item',
    oreCalculator: 'Forja',
  },
};

const itemCardJsx = {
  EN: {
    armor: 'Armor',
    magic: 'Magic',
    attack: 'Attack',
    level: 'Level',
    slot: 'Slot',
    sources: 'Source',
    info: 'Info',
    equiped: 'Equipped',
    element: 'Element',
    ignoreItem: 'ignore item',
    ignoreElement: 'Ignore element',
    equipItem: 'Equip',
    showItem: 'Show Item',
    copy: 'Copy',
  },
  PTBR: {
    armor: 'Armadura',
    magic: 'Magia',
    attack: 'Ataque',
    level: 'Nivel',
    slot: 'Slot',
    sources: 'Fonte',
    info: 'Info',
    equiped: 'Equipado',
    element: 'Elemento',
    ignoreItem: 'Ignorar item',
    ignoreElement: 'Ignora elemento',
    equipItem: 'Equipar',
    showItem: 'Ver Item',
    copy: 'Copiar',
  },
};
const setMakerJsx = {
  EN: {
    title: 'Set generator',
    generateSet: 'Generate set',
    equipAll: 'Equip all',
    searchItens: 'Search itens',
  },
  PTBR: {
    title: 'Gerador de set',
    generateSet: 'Gerar set',
    equipAll: 'Equipar tudo',
    searchItens: 'Procurar itens',
  },
};
const showSetStatusJsx = {
  EN: {
    attributes: 'Set attributes',
    armor: 'Armor',
    magic: 'Magic',
    attack: 'Attack',
    element: 'Element',
  },
  PTBR: {
    attributes: 'Atributos do set',
    armor: 'Armadura',
    magic: 'Magia',
    attack: 'Ataque',
    element: 'Elemento',
  },
};
const searchItemJsx = {
  EN: {
    search: 'Search',
    showSet: 'Show set',
    notFound: 'No item found',
  },
  PTBR: {
    search: 'Procurar',
    showSet: 'Ver set',
    notFound: 'Nem um item encontrado',
  },
};
const kakeleItemsFiltersJsx = {
  EN: {
    itemName: 'Item name',
    characterLevel: 'Level',
    characterClass: 'Class',
    alchemist: 'Alchemist',
    hunter: 'Hunter',
    berserker: 'Berserker',
    warrior: 'Warrior',
    mage: 'Mage',
    mainStat: 'Main stat',
    armor: 'Armor',
    magic: 'Magic',
    attack: 'Attack',
    element: 'Element',
    all: 'All',
    light: 'Light',
    dark: 'Dark',
    nature: 'Nature',
    itemSlot: 'Item slot',
    orderBy: 'Order by',
  },
  PTBR: {
    itemName: 'Nome do item',
    characterLevel: 'Nivel',
    characterClass: 'Classe',
    alchemist: 'Alquemista',
    hunter: 'Caçador',
    berserker: 'Furioso',
    warrior: 'Guerreiro',
    mage: 'Mago',
    mainStat: 'Status principal',
    armor: 'Amadura',
    magic: 'Magia',
    attack: 'Ataque',
    element: 'Elemento',
    all: 'Todos',
    light: 'Luz',
    dark: 'Trevas',
    nature: 'Natureza',
    itemSlot: 'Slot do item',
    orderBy: 'Ordenar por',
  },
};
const oreCalculatorJsx = {
  EN: {
    startUpgrade: 'Current forge',
    finishUpgrade: 'Desired forge',
    buyOres: 'Add ore prices',
    calculate: 'Calculate',
    necessaryItens: 'Necessary itens',
    kks: 'Gold (kks)',
    copperOre: 'Copper ore',
    tinOre: 'Tin ore',
    silverOre: 'Silver ore',
    ironOre: 'Iron ore',
    goldOre: 'Gold ore',
    copperPrice: 'Copper ore price',
    tinPrice: 'Tin ore price',
    silverPrice: 'Silver ore price',
    ironPrice: 'Iron ore price',
    goldPrice: 'Gold ore price',
    alert: 'Current upgrade must be greater then desired upgrade',
  },
  PTBR: {
    startUpgrade: 'Forja atual',
    finishUpgrade: 'Forja desejada',
    buyOres: 'Adicionar preço dos minérios',
    calculate: 'Calcular',
    necessaryItens: 'Itens necessários',
    kks: 'Ouro (kks)',
    copperOre: 'Cobre Bruto',
    tinOre: 'Estanho Bruto',
    silverOre: 'Prata Bruta',
    ironOre: 'Ferro Bruto',
    goldOre: 'Ouro Bruto',
    copperPrice: 'Preço Cobre Bruto',
    tinPrice: 'Preço Estanho Bruto',
    silverPrice: 'Preço Prata Bruta',
    ironPrice: 'Preço Ferro Bruto',
    goldPrice: 'Preço Ouro Bruto',
    alert: 'A forja desejada tem que ser maior que a forja atual',
  },
};

const SLOTS_NAMES = {
  EN: {
    accessorie: 'Accessory',
    ring: 'Ring',
    weapon: 'Weapon',
    armor: 'Armor',
    leg: 'Pants',
    necklace: 'Necklace',
    helmet: 'Helmet',
    shield: 'Shield',
    book: 'Book',
    shoe: 'Shoes',
  },
  PTBR: {
    accessorie: 'Acessório',
    ring: 'Anel',
    weapon: 'Arma',
    armor: 'Armadura',
    leg: 'Calças',
    necklace: 'Colar',
    helmet: 'Elmo',
    shield: 'Escudo',
    book: 'Livro',
    shoe: 'Sapatos',
  },
};

const ITEM_FILTERS_NAME = {
  EN: {
    attack: 'Attack',
    armor: 'Armor',
    level: 'Level',
    magic: 'Magic',
  },
  PTBR: {
    attack: 'Ataque',
    armor: 'Armadura',
    level: 'Level',
    magic: 'Magia',
  },
};

const showSetJsx = {
  EN: {
    searchItems: 'Search items',
    copy: 'Copy link',
  },
  PTBR: {
    searchItems: 'Procurar itens',
    copy: 'Copiar link',
  },
};

export {
  kakeleJsx,
  itemCardJsx,
  setMakerJsx,
  showSetStatusJsx,
  searchItemJsx,
  kakeleItemsFiltersJsx,
  oreCalculatorJsx,
  showSetJsx,
  SLOTS_NAMES,
  ITEM_FILTERS_NAME,
};
