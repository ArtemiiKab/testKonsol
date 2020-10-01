import React, {useState, useEffect} from 'react';
import './converter.scss';

export default function Converter({data, url}) {
  const rates = data.rates;
  const countries = [data.base, ...Object.keys(rates).sort()];
 

  const [baseCurrency, setBaseCurrency] = useState(data.base);
  const [toCurrency, setToCurrency] = useState(countries[1]);

  const [inputVal, setInputVal] = useState(1);
  const [result, setResult] = useState(0)

  useEffect(()=> {
    if (baseCurrency, toCurrency){
      fetch(`${url}?base=${baseCurrency}&symbols=${toCurrency}`)
        .then(res=>res.json())
        .then(data => setResult(data.rates[toCurrency]*inputVal))
    }

  },[baseCurrency, toCurrency, inputVal])

  function handleInput(e){
    setInputVal(e);
  }

  function handleSwap() {
    const base = baseCurrency;
    setBaseCurrency(toCurrency);
    setToCurrency(base);
  }

  return (
    <section className="converter">
      <h1>Converter</h1>
      <div className="converter__container">
        <div className="converter__inputBox">
          <label></label>
          <input
            type="number"
            value={inputVal}
            onChange={(e)=>handleInput(e.target.value)}
          />
        </div>
        <div className="converter__operations">
          <div>
            <div>
              <label htmlFor="currencyFrom" >From</label>
              <select
                id="currencyFrom"
                className="converter__select"
                value={baseCurrency}
                onChange={(e)=>setBaseCurrency(e.target.value)}
              >
                {countries.map(el => <option key={el} value={el}>{el}</option>)}
              </select>
            </div>
          
            <div>
              <label htmlFor="currencyTo">To</label>
              <select
                id="currencyTo"
                className="converter__select"
                value={toCurrency}
                onChange={(e)=>setToCurrency(e.target.value)}
              >
                {countries.map(el => <option key={el} value={el}>{el}</option>)}
              </select>
            </div>
          </div>
          <div className="converter__btn">
            <button
              type="submit"
              className="converter__submit"
              onClick={handleSwap}
            >
              SWAP
            </button>
          </div>
        </div>
        <div className="converter__resultbox">
        <h2>TOTAL : {result} {toCurrency}</h2>
        </div>
      </div> 
    </section>
  )
}