/* eslint-disable no-case-declarations */
let initialState = {
  inCart: [],
};


//reducer aka switch

export default (state = initialState , action) =>{
  let {type , payload} = action;

  switch(type){
  case 'add':
    let inCart =  [...state.inCart , payload];
    return {inCart};  

  default:
    return state ;  
  }
};


// action creator 
export const addItem = (item) => {
  return {type:'add' , payload: item};
};

