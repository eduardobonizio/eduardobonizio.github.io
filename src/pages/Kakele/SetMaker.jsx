/* eslint-disable immutable/no-let */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-param-reassign */
import React, { useState } from 'react';

import { equipments, weapons } from './kakeleData';

export default function SetMaker() {
  const [classe, setClasse] = useState('Alchemist');
  const [elemento, setElemento] = useState('Light');
  const [level, setLevel] = useState(1);
  const [statusPrincipal, setStatusPrincipal] = useState('Armor');

  const filtraMelhoresEquipamentos = (itemList, status, slot) => {
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
    const onlySlotItens = itemList.filter(item => item.Slot === slot);
    const somenteElmentoRequisitado = onlySlotItens.filter(
      item => item.Energy === elemento,
    );
    somenteElmentoRequisitado.forEach(item => {
      if (item[status] > bestItem[status]) {
        bestItem = item;
      }
    });
    if (bestItem.Level === 0) {
      let usarOutroStatus;
      if (slot === 'Weapon') {
        usarOutroStatus = 'Attack';
      } else if (slot === 'Necklace') {
        usarOutroStatus = 'Magic';
      } else {
        usarOutroStatus = 'Armor';
      }
      somenteElmentoRequisitado.forEach(item => {
        if (item[usarOutroStatus] > bestItem[usarOutroStatus]) {
          bestItem = item;
        }
      });
    }
    if (bestItem.Level === 0) {
      let usarOutroStatus;
      if (slot === 'Weapon') {
        usarOutroStatus = 'Attack';
      } else if (slot === 'Necklace') {
        usarOutroStatus = 'Magic';
      } else {
        usarOutroStatus = 'Armor';
      }
      onlySlotItens.forEach(item => {
        if (item[usarOutroStatus] > bestItem[usarOutroStatus]) {
          bestItem = item;
        }
      });
    }
    return bestItem;
  };

  const gerarSetParaClasse = (listaDeArmas, listaDeEquipamentos) => {
    const allSlots = [
      'Necklace',
      'Helmet',
      'Ring',
      'Weapon',
      'Armor',
      'Shield',
      'Book',
      'Accessorie',
      'Leg',
      'Shoe',
    ];
    const bestItens = allSlots.map(slot => {
      if (slot === 'Weapon') {
        return filtraMelhoresEquipamentos(
          listaDeArmas,
          statusPrincipal,
          'Weapon',
        );
      }
      return filtraMelhoresEquipamentos(
        listaDeEquipamentos,
        statusPrincipal,
        slot,
      );
    });
    console.log(bestItens);
  };

  const filtrarItens = listaDeItens => {
    const itensPermitios = listaDeItens.filter(
      item =>
        level >= Number(item.Level) &&
        (item.Vocation === classe || item.Vocation === 'All'),
    );
    return itensPermitios;
  };

  const gerarSet = () => {
    const listaDeArmas = filtrarItens(weapons);
    const listaDeEquipamentos = filtrarItens(equipments);
    const set = gerarSetParaClasse(listaDeArmas, listaDeEquipamentos);
  };

  return (
    <div className="container d-flex justify-content-center">
      <div className="d-flex flex-column">
        <h3 className="">Gerador de set</h3>
        <div className="input-group mb-2">
          <span className="input-group-text" id="nivel-do-personagem">
            Nivel do personagem
          </span>
          <input
            type="number"
            className="form-control"
            placeholder="Nivel do Personagem"
            aria-label="Nivel do Personagem"
            aria-describedby="nivel-do-personagem"
            value={level}
            onChange={e => setLevel(Number(e.target.value))}
          />
        </div>
        <div className="input-group mb-2">
          <label className="input-group-text" htmlFor="classe-do-personagem">
            Classe do personagem
          </label>
          <select
            className="form-select"
            id="classe-do-personagem"
            onChange={e => setClasse(e.target.value)}
          >
            <option defaultValue value="Alchemist">
              Alquemista
            </option>
            <option value="Hunter">Caçador</option>
            <option value="Berserker">Furioso</option>
            <option value="Warrior">Guerreiro</option>
            <option value="Mage">Mago</option>
          </select>
        </div>
        <div className="input-group mb-2">
          <label className="input-group-text" htmlFor="elemento-do-set">
            Elemento
          </label>
          <select
            className="form-select"
            id="elemento-do-set"
            onChange={e => setElemento(e.target.value)}
          >
            <option defaultValue value="Light">
              Luz
            </option>
            <option value="Dark">Trevas</option>
            <option value="Nature">Natureza</option>
          </select>
        </div>
        <div className="input-group mb-2">
          <label className="input-group-text" htmlFor="status-principal">
            Status principal
          </label>
          <select
            className="form-select"
            id="status-principal"
            onChange={e => setStatusPrincipal(e.target.value)}
          >
            <option defaultValue value="Armor">
              Amadura
            </option>
            <option value="Magic">Magia</option>
            <option value="Attack">Ataque</option>
          </select>
        </div>
        <button type="button" className="btn btn-light mb-2" onClick={gerarSet}>
          Gerar set
        </button>
      </div>
    </div>
  );
}
