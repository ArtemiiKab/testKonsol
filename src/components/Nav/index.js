import React from 'react';
import {NavLink} from 'react-router-dom';
import {useDispatch, useSelector} from 'react-redux';
import {changeBaseCurrency} from '../../actions'
import './nav.scss';

export default function Nav() {
 const dispatch = useDispatch();
 const baseCurrency = useSelector(state => state.baseCurrencyReducer);
 const favCurrency = useSelector(state => state.favCurrencyListReducer);

 function handleChange(val){
   dispatch(changeBaseCurrency(val));
 }

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
          onChange={(e) => handleChange(e.target.value)}
        >
          {favCurrency.map(el => <option key={el}>{el}</option>)}
        </select>
      </div>
    </nav>
  )
}
