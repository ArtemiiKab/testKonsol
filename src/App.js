import React, {useState, useEffect} from 'react';
import './App.scss';
import {Route, HashRouter, Switch} from 'react-router-dom';
import Nav from './components/Nav';
import Converter from './components/Converter';

function App() {
  const BASE_URL = `https://api.exchangeratesapi.io/latest`;
  const [data, setData] = useState({rates:{}});
  const [rates, setRates] = useState();


  useEffect(()=>{
    fetch(BASE_URL)
      .then(res => res.json())
      .then(data => {
        setData(data);

      
      })
      
  }, []);

  return (
    <div className="App">
      <HashRouter>
      <Nav />
        <Switch>
          <Route path="/" exact component={() => <Converter data={data} url={BASE_URL} />} />
          <Route path="/currencies" exact to={<div>Currencies</div>} />
        </Switch>
      </HashRouter>
    </div>
  );
}

export default App;
