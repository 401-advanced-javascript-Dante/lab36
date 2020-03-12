import {combineReducers , createStore} from 'redux' ;
import {composeWithDevTools} from 'redux-devtools-extension';


import selector from './categories-store.js';
import list from './products-store.js';



let reducers = combineReducers({selector , list});

const store = ()=> {
  return createStore(reducers, composeWithDevTools);
};

export default store() ;