/* eslint-disable react/prop-types */
import React from 'react';

const Display = ({ calculation }) => (
  <div className="display-result">

    <input id="result" defaultValue={calculation} placeholder="0" dir="rtl" />

  </div>

);

export default Display;
