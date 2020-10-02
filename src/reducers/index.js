import baseCurrencyReducer from './baseCurrencyReducer';
import favCurrencyListReducer from './favCurrencyListReducer';
import {combineReducers} from 'redux';

const allReducers = combineReducers({
  baseCurrencyReducer,
  favCurrencyListReducer,
});

export default allReducers;
