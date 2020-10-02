export const changeBaseCurrency = newCurrency => {
  return {
    type: 'Change',
    payload: newCurrency,
  }
}

export const changeFavCurrencyList = newList => {
  return {
    type: 'newList',
    payload: newList,
  }
}