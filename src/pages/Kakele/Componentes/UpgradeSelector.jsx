import React from 'react';

import { UPGRADES_STAGES } from '../Data/kakeleData';

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
        {UPGRADES_STAGES.map(upgradeValue => (
          <option key={upgradeValue} value={upgradeValue}>
            {upgradeValue}
          </option>
        ))}
      </select>
    </div>
  );
}
