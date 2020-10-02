export default function baseCurrencyReducer (state='EUR', action){
  switch(action.type) {
    case 'Change':
      return action.payload;
  
    default: 
      return state;
  }
}