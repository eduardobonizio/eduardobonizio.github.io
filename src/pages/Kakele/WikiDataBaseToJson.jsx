/* eslint-disable prefer-const */
/* eslint-disable no-unused-vars */
import React, { useEffect } from 'react';

import ButtonForKakele from './Componentes/ButtonForKakele';

export default function WikiDataBaseToJson() {
  const getItens = () => {
    const allTdElements = [...document.getElementsByTagName('tr')];
    let slots = [
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

    const itensList = allTdElements.map((item, index) => {
      if (index === 0) return;
      const level = Number(
        item.getElementsByTagName('td')[1].innerText.replaceAll(',', ''),
      );
      const slplitArmorStatus = item
        .getElementsByTagName('td')[4]
        .innerText.split('(');
      const def = slplitArmorStatus[0];
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
        armor: def,
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

    console.log(itensList);
  };

  async function loadWiki(wiki) {
    fetch(
      `https://raw.githubusercontent.com/contact-kakele/kakele-data/main/wiki/${wiki}.html`,
    )
      .then(response => response.text())
      .then(html => {
        const content = document.createElement('div');
        content.innerHTML = html;
        document.getElementById('holdWiki').appendChild(content);
      })
      .then(() => getItens());
  }

  useEffect(() => {
    loadWiki('equipments');
  }, []);

  const tryGetPtBr = () => {
    getItens();
  };

  return (
    <div className="container">
      <ButtonForKakele
        onClick={tryGetPtBr}
        text="Gerar Objeto com nome Pt-BR"
      />
      <div
        className="container d-flex justify-content-center flex-column"
        id="holdWiki"
      />
    </div>
  );
}
