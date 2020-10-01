import React, {useState, useEffect} from 'react';
import './CurrencyList.scss';
import cn from 'classnames';

export default function CurrencyList({baseCurrency, url, setFavCurrency, favCurrency}) {
  const [allRates, setAllRates] = useState([])

  useEffect(()=> {
    if (baseCurrency) {
      fetch(`${url}?base=${baseCurrency}`)
        .then(res=>res.json())
        .then(data => setAllRates(data.rates))
    }

  },[baseCurrency]);

  function toggleFav(e){
    const currency = e.currentTarget.children[0].innerHTML;
    favCurrency.includes(currency)
      ? setFavCurrency(prev=>prev.filter(c => c !== currency))
      : setFavCurrency(prev => [currency, ...prev])
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