/* eslint-disable prefer-const */
/* eslint-disable array-callback-return */
/* eslint-disable consistent-return */
/* eslint-disable react/no-array-index-key */
/* eslint-disable immutable/no-let */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-param-reassign */
import React, { useState } from 'react';

import copy from 'copy-to-clipboard';

import { equipments, weapons } from './kakeleData';

export default function SetMaker() {
  const [classe, setClasse] = useState('Alchemist');
  const [elemento, setElemento] = useState('Light');
  const [level, setLevel] = useState(1);
  const [statusPrincipal, setStatusPrincipal] = useState('Armor');
  const [ignorarElemento, setIgnorarElemento] = useState(false);
  const [exibirSet, setExibirSet] = useState(false);
  const [itensIgnorados, setItensIgnorados] = useState([]);
  const [slotsComElementoIgnorado, setSlotsComElementoIgnorado] = useState([]);

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

    if (classe === 'Berserker' && (slot === 'Shield' || slot === 'Book')) {
      return bestItem;
    }

    if ((classe === 'Mage' || classe === 'Alchemist') && slot === 'Shield') {
      return bestItem;
    }

    const onlySlotItens = itemList.filter(
      item =>
        item.Slot === slot &&
        !(
          itensIgnorados.includes(item.Equipment) ||
          itensIgnorados.includes(item.Weapon)
        ),
    );

    if (!ignorarElemento && !slotsComElementoIgnorado.includes(slot)) {
      const somenteElmentoRequisitado = onlySlotItens.filter(
        item => item.Energy === elemento,
      );

      somenteElmentoRequisitado.forEach(item => {
        if (item[status] >= bestItem[status] && item[status] > 0) {
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
          if (
            item[usarOutroStatus] >= bestItem[usarOutroStatus] &&
            item[usarOutroStatus] > 0
          ) {
            bestItem = item;
          }
        });
      }
    }

    if (ignorarElemento || slotsComElementoIgnorado.includes(slot)) {
      onlySlotItens.forEach(item => {
        if (item[status] >= bestItem[status] && item[status] > 0) {
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
        if (
          item[usarOutroStatus] > bestItem[usarOutroStatus] &&
          item[usarOutroStatus] > 0
        ) {
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

    setExibirSet(bestItens);
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
    gerarSetParaClasse(listaDeArmas, listaDeEquipamentos);
  };

  const verificarElemento = itens => {
    let luz = 0;
    let natureza = 0;
    let trevas = 0;
    itens.forEach(item => {
      if (item.Energy === 'Light') luz += 1;
      if (item.Energy === 'Nature') natureza += 1;
      if (item.Energy === 'Dark') trevas += 1;
    });
    if (luz >= 5 && luz > natureza)
      return `Luz [Luz ${luz}, Natureza ${natureza}, Trevas ${trevas}]`;
    if (natureza >= 5 && natureza > trevas)
      return `Natureza [Luz ${luz}, Natureza ${natureza}, Trevas ${trevas}]`;
    if (trevas >= 5 && trevas > luz)
      return `Trevas [Luz ${luz}, Natureza ${natureza}, Trevas ${trevas}]`;
    return `Neutro [Luz ${luz}, Natureza ${natureza}, Trevas ${trevas}]`;
  };

  const ignorarItem = (nomeDoItem, ignorar) => {
    if (ignorar) {
      const novosItensIgnorados = [...itensIgnorados, nomeDoItem];
      setItensIgnorados(novosItensIgnorados);
      return;
    }
    const itemNaoMaisIgnorado = itensIgnorados.filter(
      item => item !== nomeDoItem,
    );
    setItensIgnorados(itemNaoMaisIgnorado);
  };

  const ignorarSlot = (slot, ignorar) => {
    if (ignorar) {
      const novosSlotsIgnorados = [...slotsComElementoIgnorado, slot];
      setSlotsComElementoIgnorado(novosSlotsIgnorados);
      return;
    }
    const slotNaoMaisIgnorado = slotsComElementoIgnorado.filter(
      item => item !== slot,
    );
    setSlotsComElementoIgnorado(slotNaoMaisIgnorado);
  };

  const gerarLink = () => {
    const link = exibirSet.reduce((anterior, proximo) => {
      if (proximo.Level > 0) {
        const adicionarTexto = `${proximo.Slot}=${
          proximo.Equipment || proximo.Weapon
        }`.replaceAll(' ', '-');
        anterior += `${adicionarTexto} `;
      }
      return anterior;
    }, '');

    const linkFinal = `http://localhost:3000/kakele/set/${link}`;
    copy(linkFinal);
  };

  return (
    <div className="container d-flex flex-column justify-content-center align-items-center">
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

        {!ignorarElemento && (
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
        )}

        <div className="input-group mb-2">
          <div className="input-group-text">
            <input
              className="form-check-input"
              type="checkbox"
              id="ignorar-elemento"
              aria-label="Checkbox for following text input"
              onChange={() => setIgnorarElemento(!ignorarElemento)}
            />
          </div>
          <label htmlFor="ignorar-elemento" className="input-group-text">
            Ignorar Elemento
          </label>
        </div>
        <button type="button" className="btn btn-light mb-2" onClick={gerarSet}>
          Gerar set
        </button>
        <button
          type="button"
          className="btn btn-light mb-2"
          onClick={gerarLink}
        >
          Copiar link
        </button>
        <div>
          <h3>Atributos do set</h3>
          <p>
            Armadura:{' '}
            {exibirSet &&
              exibirSet.reduce(
                (anterior, proximo) => anterior + proximo.Armor,
                0,
              )}
          </p>
          <p>
            Magia:{' '}
            {exibirSet &&
              exibirSet.reduce(
                (anterior, proximo) => anterior + proximo.Magic,
                0,
              )}
          </p>
          <p>
            Ataque:{' '}
            {exibirSet &&
              exibirSet.reduce(
                (anterior, proximo) => anterior + proximo.Attack,
                0,
              )}
          </p>
          <p>Elemento: {exibirSet && verificarElemento(exibirSet)}</p>
        </div>
      </div>
      <div className="row">
        {exibirSet &&
          exibirSet.map((item, i) => {
            if (item.Equipment !== '') {
              return (
                <div className="col" key={i}>
                  <div className="card mb-2">
                    {/* <img src="..." className="card-img-top" alt="..." /> */}
                    <div
                      className="card-body pb-0"
                      style={{ minWidth: '200px' }}
                    >
                      <h6 className="card-title">
                        {item.Equipment || item.Weapon}
                      </h6>
                      <div className="d-flex flex-column mb-1">
                        <span className="card-text">
                          Elemento: {item.Energy}
                        </span>
                        <span className="card-text">
                          Armadura: {item.Armor}
                        </span>
                        <span className="card-text">Magia: {item.Magic}</span>
                        <span className="card-text">Ataque: {item.Attack}</span>
                        <span className="card-text">Nivel: {item.Level}</span>
                      </div>
                      <div className="input-group mb-2">
                        <div className="input-group-text">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name={item.Equipment || item.Weapon}
                            id={`exclude-item-${i}`}
                            checked={
                              itensIgnorados.includes(item.Equipment) ||
                              itensIgnorados.includes(item.Weapon)
                            }
                            aria-label="Checkbox for following text input"
                            onChange={e =>
                              ignorarItem(e.target.name, e.target.checked)
                            }
                          />
                        </div>
                        <label
                          htmlFor={`exclude-item-${i}`}
                          className="input-group-text"
                        >
                          Não incluir
                        </label>
                      </div>
                      <div className="input-group mb-2">
                        <div className="input-group-text">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            name={item.Slot}
                            id={`ignore-slot-element-${i}`}
                            checked={slotsComElementoIgnorado.includes(
                              item.Slot,
                            )}
                            aria-label="Checkbox for following text input"
                            onChange={e =>
                              ignorarSlot(e.target.name, e.target.checked)
                            }
                          />
                        </div>
                        <label
                          htmlFor={`ignore-slot-element-${i}`}
                          className="input-group-text"
                        >
                          Ignora elemento dessa peça
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
              );
            }
          })}
      </div>
    </div>
  );
}
