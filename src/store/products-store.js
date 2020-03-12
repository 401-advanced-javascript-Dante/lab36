/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */

let initialState = {
  category:{
    ACTION : ['Red Dead 2' , 'God Of War' , 'Devil May Cry' ,'Call Of Duty'],
    ADVENTURE : ['Fire Watch', 'The Walking Dead', 'Tomb Rider'],
    SURVIVE : ['Left For Dead', 'Rust' , 'Day Z']},
  output:[], 
};

export default (state = initialState , action) => {
  let {type , payload} = action ;
  console.log('action', action);
  
  switch(type){
  case 'choose':
    let category = state.category ;
    let output = state.category[payload];

    return {category,output} ;

  default :
    let empty = ['You Need To Select A Category!'];
    return state ;
  }
};

export const chooseList = (clicked) => {
  console.log('===>>>', clicked);   
  return {type : 'choose' , payload: clicked};
};