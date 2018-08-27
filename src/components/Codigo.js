import React, { Component} from 'react';
import PropTypes from 'prop-types'; // ES6



class Codigo extends Component {
  constructor(props) {
    super(props);   
  }


   render() {
     //console.log("XXXXXXXXXXXXXXX   " + this.props.code)
     return (
      <div className="container	 bg-dark text-white" >
          <h4>Codigo</h4> 
          <code>{this.props.code}</code>
      </div>
      
     );
   }
 }

export default Codigo;