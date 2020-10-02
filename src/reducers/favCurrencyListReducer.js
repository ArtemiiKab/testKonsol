export default function favCurrencyListReducer (state=['EUR', 'USD'], action){
    switch(action.type) {
      case 'newList':
        return action.payload;
      default: 
        return state;
    }
}
