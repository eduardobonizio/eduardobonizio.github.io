import React from 'react';

import { UPGRADES } from '../kakeleData';

export default function UpgradeSelector(props) {
  const { elementId, labelText, onChange } = props;
  return (
    <div className="input-group mb-2">
      <label className="input-group-text" htmlFor={elementId}>
        {labelText}
      </label>
      <select
        className="form-select"
        id={elementId}
        onChange={e => onChange(Number(e.target.value))}
      >
        {UPGRADES.map((upgradeValue, i) => (
          <option key={i} value={upgradeValue}>
            {upgradeValue}
          </option>
        ))}
      </select>
    </div>
  );
}
