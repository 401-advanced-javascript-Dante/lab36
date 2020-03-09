/* eslint-disable no-unused-vars */
import React from 'react' ;
import {connect} from 'react-redux' ;
import {chooseList} from '../../store/products-store.js';

const Status = props => {
  console.log('products props' , props);

  return(
    <>
      {/* {props.selector.current !== '' && props.chooseList(props.selector.current)} */}
      <h2>{props.selector.current} List</h2>
      {props.list.output.map((val , idx) => {
        return  <li key={idx}>{val}</li>;
      }) }
    </>
  );
};

const mapStateToProps = state => {
  return state ;
};

const mapDispatchToProps = {chooseList};



export default connect(mapStateToProps, mapDispatchToProps)(Status);