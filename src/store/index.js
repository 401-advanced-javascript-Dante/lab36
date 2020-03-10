import {combineReducers , createStore} from 'redux' ;
import {composeWithDevTools} from 'redux-devtools-extension';


import selector from './categories-store.js';
import list from './products-store.js';
import cart from './cart-store.js';




let reducers = combineReducers({selector , list, cart});

const store = ()=> {
  return createStore(reducers, composeWithDevTools);
};

export default store() ;