import React, {useState, useEffect} from 'react';
import './App.scss';
import {Route, HashRouter, Switch} from 'react-router-dom';
import {useDispatch} from 'react-redux';
import {changeBaseCurrency} from './actions';
import Nav from './components/Nav';
import Converter from './components/Converter';
import CurrencyList from './components/CurrencyList';

function App() {
  const BASE_URL = `https://api.exchangeratesapi.io/latest`;
  const dispatch = useDispatch();


  const [data, setData] = useState([]);
  const [countries, setCountries] = useState([])
  const [toCurrency, setToCurrency] = useState();

  useEffect(()=>{
  
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        setData(data);
        dispatch(changeBaseCurrency(data.base));
        setCountries([data.base, ...Object.keys(data.rates).sort()]);
        setToCurrency('USD')
      })   
  }, [BASE_URL]);

  return (
    <div className="App">
      <HashRouter>
      <Nav/>
        <Switch>
          <Route
            path="/" exact
            render={() => (
              data !== 0 ?
              <Converter
                url={BASE_URL} 
                countries={countries}
                toCurrency={toCurrency}
                setToCurrency={setToCurrency}
              /> : 'loading'
            )} 
          />
          <Route
            path="/currencies"
            exact render={() => (
              <CurrencyList
                url={BASE_URL}
                setCountries={setCountries}
              />
            )}
          />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
