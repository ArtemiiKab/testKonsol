import React from 'react';
import {NavLink} from 'react-router-dom';
import './nav.scss';

export default function Nav() {

  return (
    <nav className="nav">
      <ul>
        <li><NavLink to="/">Converter</NavLink></li>
        <li><NavLink to="/currencies">Currencies</NavLink></li>
      </ul>
    </nav>
  )
}