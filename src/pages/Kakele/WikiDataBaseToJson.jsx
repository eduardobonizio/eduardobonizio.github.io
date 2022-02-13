import React, { useEffect, useState } from 'react';

import copy from 'copy-to-clipboard';

import ButtonForKakele from './Componentes/ButtonForKakele';
import { equipments, weapons } from './kakeleData';

export default function WikiDataBaseToJson() {
  const [wikiType, setWikiType] = useState('equipments');

  const addPtBrToItens = () => {
    // Para funcionar tem que traduzir a página com o google tradutor e rolar até o final da página, depois volta para o inicio e clica no botão
    let newEquipmentData = [];
    if (wikiType === 'equipments') {
      newEquipmentData = [...equipments];
    } else {
      newEquipmentData = [...weapons];
    }
    const allTrElements = [...document.getElementsByTagName('tr')];

    allTrElements.forEach((item, index) => {
      if (index === 0) return;
      newEquipmentData[index - 1].namePtBr =
        item.getElementsByTagName('td')[0].innerText;
    });

    copy(JSON.stringify(newEquipmentData));
  };

  const getWeaponsItens = () => {
    const allTrElements = [...document.getElementsByTagName('tr')];

    const itensList = allTrElements.map((item, index) => {
      if (index === 0) return;
      const level = Number(
        item.getElementsByTagName('td')[1].innerText.replaceAll(',', ''),
      );
      const slplitArmorStatus = item
        .getElementsByTagName('td')[4]
        .innerText.split('(');
      const attack = Number(slplitArmorStatus[0].replaceAll(',', ''));
      let magic = 0;
      let haste = 0;
      let armor = 0;
      let twoHanded = false;
      slplitArmorStatus.forEach(itemStatus => {
        const value = Number(itemStatus.split(' ')[0]);
        if (itemStatus.includes('magic')) magic = value;
        if (itemStatus.includes('haste')) haste = value;
        if (itemStatus.includes('armor')) armor = value;
        if (itemStatus.includes('two-handed')) twoHanded = true;
      });

      const imgLink = item
        .querySelector('.item')
        .style.backgroundImage.replace('url(', '')
        .replace(')', '');
      const itemAtributes = {
        name: item.getElementsByTagName('td')[0].innerText,
        level,
        vocation: item.getElementsByTagName('td')[2].innerText,
        energy: item.getElementsByTagName('td')[3].innerText,
        armor,
        range: Number(item.getElementsByTagName('td')[5].innerText),
        magic,
        haste,
        attack,
        value: Number(
          item.getElementsByTagName('td')[6].innerText.replaceAll(',', ''),
        ),
        sources: item.getElementsByTagName('td')[7].innerText,
        slot: 'weapon',
        imgUrl: imgLink,
        twoHanded,
      };

      return itemAtributes;
    });

    copy(JSON.stringify(itensList));
  };

  const getEquipmentsItens = () => {
    const allTrElements = [...document.getElementsByTagName('tr')];
    const slots = [
      'helmet',
      'armor',
      'shoe',
      'shield',
      'book',
      'necklace',
      'ring',
      'leg',
      'accessorie',
      'weapon',
    ];
    let slotIndex = 0;
    let startLvl = 0;

    const itensList = allTrElements.map((item, index) => {
      if (index === 0) return;
      const level = Number(
        item.getElementsByTagName('td')[1].innerText.replaceAll(',', ''),
      );
      const slplitArmorStatus = item
        .getElementsByTagName('td')[4]
        .innerText.split('(');
      const armor = Number(slplitArmorStatus[0]);
      let magic = 0;
      let haste = 0;
      let attack = 0;
      slplitArmorStatus.forEach(itemStatus => {
        const value = Number(itemStatus.split(' ')[0]);
        if (itemStatus.includes('magic')) magic = value;
        if (itemStatus.includes('haste')) haste = value;
        if (itemStatus.includes('attack')) attack = value;
      });

      const imgLink = item
        .querySelector('.item')
        .style.backgroundImage.replace('url(', '')
        .replace(')', '');
      const itemAtributes = {
        name: item.getElementsByTagName('td')[0].innerText,
        level,
        vocation: item.getElementsByTagName('td')[2].innerText,
        energy: item.getElementsByTagName('td')[3].innerText,
        armor,
        value: Number(
          item.getElementsByTagName('td')[5].innerText.replaceAll(',', ''),
        ),
        magic,
        haste,
        attack,
        sources: item.getElementsByTagName('td')[6].innerText,
        imgUrl: imgLink,
      };

      if (level >= startLvl) {
        itemAtributes.slot = slots[slotIndex];
        startLvl = level;
      } else {
        slotIndex += 1;
        startLvl = 0;
        itemAtributes.slot = slots[slotIndex];
      }

      return itemAtributes;
    });

    copy(JSON.stringify(itensList));
  };

  async function loadWiki(wikiName) {
    document.getElementById('holdWiki').innerHTML = '';
    fetch(
      `https://raw.githubusercontent.com/contact-kakele/kakele-data/main/wiki/${wikiName}.html`,
    )
      .then(response => response.text())
      .then(html => {
        const content = document.createElement('div');
        content.innerHTML = html;
        document.getElementById('holdWiki').appendChild(content);
      });
  }

  useEffect(() => {
    loadWiki('equipments');
  }, []);

  const copyItensToObject = () => {
    if (wikiType === 'equipments') return getEquipmentsItens();
    if (wikiType === 'weapons') return getWeaponsItens();
  };

  return (
    <div className="container">
      <div className="container">
        <ButtonForKakele
          onClick={copyItensToObject}
          text="Copiar como objeto"
        />
        <ButtonForKakele
          onClick={addPtBrToItens}
          text="Adicionar texto Pt-BR"
        />

        <div className="input-group mb-2">
          <label className="input-group-text" htmlFor="elemento-do-set">
            Wiki
          </label>
          <select
            className="form-select"
            id="elemento-do-set"
            onChange={e => {
              setWikiType(e.target.value);
              loadWiki(e.target.value);
            }}
          >
            <option defaultValue value="equipments">
              Equipamentos
            </option>
            <option defaultValue value="weapons">
              Armas
            </option>
          </select>
        </div>
      </div>

      <div
        className="container d-flex justify-content-center flex-column"
        id="holdWiki"
      />
    </div>
  );
}
