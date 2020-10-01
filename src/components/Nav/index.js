import React from 'react';
import {NavLink} from 'react-router-dom';
import './nav.scss';

export default function Nav({favCurrency, setBaseCurrency, baseCurrency}) {

  return (
    <nav className="nav">
      <ul>
        <li><NavLink to="/">Converter</NavLink></li>
        <li><NavLink to="/currencies">Currencies</NavLink></li>
      </ul>
      <div>
        <p>Favorites: </p>
        <select
          value={baseCurrency?baseCurrency:favCurrency[0]}
          onChange={(e)=>setBaseCurrency(e.target.value)}
        >
          {favCurrency.map(el => <option key={el}>{el}</option>)}
        </select>
      </div>
    </nav>
  )
}