import React, { Component} from 'react';
import PropTypes from 'prop-types'; // ES6
//import { Glyphicon } from 'react-bootstrap';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  Button,
  Glyphicon } from 'reactstrap';


class Opciones extends Component {


    constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.ejecutar = this.ejecutar.bind(this);
    this.state = {
      isOpen: false
    };
  }

  ejecutar(){
    //alert(this.props.code)
    try {
      eval(this.props.code);
    } catch (e) {
      alert(e);
    }

  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
   render() {
     return (
      <div>
      
       
 <Navbar color="dark" dark expand="md">
          <NavbarBrand href="/">Edimbrujo</NavbarBrand>
          <NavbarToggler  />
          <Collapse navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>                
                 <Button   size="sm" outline color="danger" onClick={this.ejecutar}>O</Button>
              </NavItem>
              
              
            </Nav>
          </Collapse>
        </Navbar>

  </div>
     );
   }
 }

export default Opciones;