/* eslint-disable no-case-declarations */
/* eslint-disable no-unused-vars */
let API = 'https://swapi.co/api/people' ;

let initialState = {
  category:{
    ACTION : ['Red Dead 2' , 'God Of War' , 'Devil May Cry' ,'Call Of Duty'],
    ADVENTURE : ['Fire Watch', 'The Walking Dead', 'Tomb Rider'],
    SURVIVE : ['Left For Dead', 'Rust' , 'Day Z'],
    STARWARS: []},
  output:[], 
};

export default (state = initialState , action) => {
  let {type , payload} = action ;
  console.log('action', action);
  let category = state.category ;
  let output; 
  switch(type){

  case 'update':

    category.STARWARS = payload ;
    return {category , output};
      
  case 'choose':
    category = state.category ;
    output = state.category[payload];
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

export const updateData = (data) => {
  console.log('update data', data);
  return {type: 'update' , payload: data}; 
};

export const getData = () => async dispatch => {

  let response = await fetch(API);
  console.log(response , '<===');

  let toJson = await response.json();
  console.log('getDAta ' , toJson.results);

  let arrOfName = [];
  toJson.results.map(val => {
    arrOfName.push(val.name);
  });
  
  dispatch(updateData(arrOfName));

};