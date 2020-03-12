/* eslint-disable no-unused-vars */
import React from 'react' ;
import {connect} from 'react-redux' ;
import {chooseList} from '../../store/products-store.js';
import {addItem} from '../../store/cart-store.js';

const Status = props => {
  console.log('products props' , props);

  return(
    <>
      {/* {props.selector.current !== '' && props.chooseList(props.selector.current)} */}
      <h2>{props.selector.current} List</h2>
      <h3>Click To add </h3>
      {props.list.output.map((val , idx) => {
        return  <li key={idx} onClick={()=> props.addItem(val)}>{val}</li>;
      }) }
    </>
  );
};

const mapStateToProps = state => {
  return state ;
};

const mapDispatchToProps = {chooseList , addItem};



export default connect(mapStateToProps, mapDispatchToProps)(Status);