import React, {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {changeFavCurrencyList} from '../../actions';
import './CurrencyList.scss';
import cn from 'classnames';

export default function CurrencyList({ url, setCountries,}) {
  const [allRates, setAllRates] = useState([])
  const baseCurrency = useSelector(state => state.baseCurrencyReducer);
  const favCurrency = useSelector(state => state.favCurrencyListReducer);
  const dispatch = useDispatch();

  useEffect(()=> {
    if (baseCurrency && url) {
      fetch(`${url}?base=${baseCurrency}`)
        .then(res => res.json())
        .then(data => setAllRates(data.rates))
    }
  },[baseCurrency, url]);

  function toggleFav(e){
    const currency = e.currentTarget.children[0].innerHTML;

    if (favCurrency.includes(currency)) {
      dispatch(changeFavCurrencyList(favCurrency.filter(c => c !== currency)));
    } else {
      dispatch(changeFavCurrencyList([currency, ...favCurrency]));
    }

    setCountries(prev => [...new Set([...favCurrency, ...prev])])
  }

  return (
    <section className="container">
      <h1>Choose favorite currencies</h1>
      <ul className="List">
        {[...new Set([...favCurrency, ...Object.keys(allRates)])].map(el => (
          <li
            key={el}
            onClick={(e)=>toggleFav(e)}
            className={cn({
              List__favorite:favCurrency.includes(el)
            })}
          >
            <h4 >{el}</h4>
            <div>
              1 {baseCurrency} = {allRates[el]?allRates[el]:1} {el}
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}
