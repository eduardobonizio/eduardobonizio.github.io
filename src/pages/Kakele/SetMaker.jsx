/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-param-reassign */
import React, { useState } from 'react';

import { equipments, weapons } from './kakeleData';

export default function SetMaker() {
  const [classe, setClasse] = useState('Alchemist');
  const [elemento, setElemento] = useState('Light');
  const [level, setLevel] = useState(1);

  const selecionarMelhorArmadura = listaDeArmaduras => {
    console.log(listaDeArmaduras);
  };

  const selecionarMelhorArma = listaDeArmas => {
    console.log(listaDeArmas);
  };

  const setParaGuerreiro = () => {};
  const setParaMago = () => {};
  const setParaArqueiro = () => {};
  const setParaFurioso = () => {};
  const setParaAlquemista = () => {};

  const gerarSetParaClasse = (listaDeArmas, listaDeEquipamentos) => {
    if (classe === 'Alchemist') {
      return 'Alchemist';
    }
    if (classe === 'Berserker') {
      return 'Berserker';
    }
    if (classe === 'Warrior') {
      return 'Warrior';
    }
    if (classe === 'Hunter') {
      return 'Hunter';
    }
    if (classe === 'Mage') {
      return 'Mage';
    }
    return 'Classe não encontrada';
  };

  const filtrarItens = listDeItens => {
    const itensPermitios = listDeItens.filter(
      item =>
        level >= Number(item.Level) &&
        (item.Energy === elemento || item.Energy === 'None') &&
        (item.Vocation === classe || item.Vocation === 'All'),
    );
    return itensPermitios;
  };

  const gerarSet = () => {
    const listaDeArmas = filtrarItens(weapons);
    const listaDeEquipamentos = filtrarItens(equipments);
    const set = gerarSetParaClasse(listaDeArmas, listaDeEquipamentos);
    console.log(set);
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
            Classe do personagem
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
        <button type="button" className="btn btn-light mb-2" onClick={gerarSet}>
          Gerar set
        </button>
      </div>
    </div>
  );
}
