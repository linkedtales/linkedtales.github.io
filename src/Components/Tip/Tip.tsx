import React from 'react';
import './Tip.scss';

const Tip = ({ isAlternative = false, text = "" }) =>
  <div className={`tip ${isAlternative && 'alternative'}`}>
    <div className="tip__image">
      <img src="/assets/light.png" />
    </div>
    <div className="tip__text">
      {text}
    </div>
  </div>

export default Tip;
