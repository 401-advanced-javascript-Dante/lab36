/* eslint-disable no-case-declarations */


let initialState = {
  categories: ['ACTION' , 'ADVENTURE','SURVIVE','STARWARS'],
  current : '',
};
  
  
// reducer
export default (state = initialState , action) => {
  
  let {type , payload} = action;
  
  switch(type){
  
  case 'change':
    // console.log('case1', type);
    let current = payload; 
    let categories = state.categories;
    return {categories , current};
  
  default:
    // console.log('defult', type);

    return state ;
  }
  
};
  
  
// return action >>> action creator
export const changeSelected = selected  => {
  // console.log(selected , '<===');
  return { type: 'change' , payload: selected}; 
};