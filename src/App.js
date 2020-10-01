import React, {useState, useEffect} from 'react';
import './App.scss';
import {Route, HashRouter, Switch} from 'react-router-dom';
import Nav from './components/Nav';
import Converter from './components/Converter';
import CurrencyList from './components/CurrencyList';

function App() {
  const BASE_URL = `https://api.exchangeratesapi.io/latest`;
  const [data, setData] = useState([]);
  const [baseCurrency, setBaseCurrency] = useState();
  const [countries, setCountries] = useState([])
  const [toCurrency, setToCurrency] = useState();
  const [favCurrency, setFavCurrency] = useState(['EUR', 'USD']);

  useEffect(()=>{
  
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        setData(data);
        setBaseCurrency(data.base);
        setCountries([data.base, ...Object.keys(data.rates).sort()]);
        setToCurrency('USD')
      })   
  }, []);

  return (
    <div className="App">
      <HashRouter>
      <Nav favCurrency={favCurrency} setBaseCurrency={setBaseCurrency} baseCurrency={baseCurrency} />
        <Switch>
          <Route
            path="/" exact
            component={() => (
              data !== 0 ?
              <Converter
                data={data}
                url={BASE_URL} 
                baseCurrency={baseCurrency}
                setBaseCurrency={setBaseCurrency}
                countries={countries}
                toCurrency={toCurrency}
                setToCurrency={setToCurrency}
              /> : 'loading'
            )} 
          />
          <Route
            path="/currencies"
            exact component={() => (
              <CurrencyList
                baseCurrency={baseCurrency}
                setBaseCurrency={setBaseCurrency}
                setFavCurrency={setFavCurrency}
                favCurrency={favCurrency}
                url={BASE_URL}
                countries={countries}
              />
            )}
          />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
