import React, { Component} from 'react';
import ReactDOM from 'react-dom';
import Blockly from 'node-blockly/browser'; 
import  Codigo from './Codigo.js';

import BlocklyDrawer, { Block, Category } from 'react-blockly-drawer';


const INICIAR =  {
    name: 'INICIAR',
    category: 'Agente',
    block: {      
      init: function () {
        this.jsonInit({
          nextStatement: null,
          message0: 'INICIAR %1',
          args0: [
            {
              type: "field_dropdown",
              name: "ROL",
              options: [
                  [ "Caballero", "ITEM1" ],
                  [ "Arquero", "ITEM2" ],
                  [ "Curador", "ITEM3" ],
                  [ "Mago", "ITEM4" ]
            ]
            },
          ],
          //output: 'String',
          colour: 160,
          tooltip: 'Crear un agente',
        });
      },
    },
   generator: (block) => {
      const message = `'${block.getFieldValue('ROL')}'` || '\'\'';
      const code = `get edimbrujo.fi.uncoma.edu.ar/iniciar/ ${message}')`;
      return [code, Blockly.JavaScript.ORDER_MEMBER];
    },
  }

const MOVER =  {
    name: 'MOVER',
    category: 'Agente',
    block: {      
      init: function () {
        this.jsonInit({
          previousStatement: null,
          nextStatement: null,
          message0: 'MOVER %1',
          args0: [
            {
              type: "field_dropdown",
              name: "DIRECCION",
              options: [
                  [ "Arriba", "ITEM1" ],
                  [ "ArribaDerecha", "ITEM2" ],
                  [ "Derecha", "ITEM3" ],
                  [ "DerechaAbajo", "ITEM4" ],
                  [ "Abajo", "ITEM5" ],
                  [ "AbajoIzquierda", "ITEM6" ],
                  [ "Izquierda", "ITEM7" ],
                  [ "IzquierdaArriba", "ITEM8" ]
            ]
            },
          ],
          //output: 'String',
          colour: 160,
          tooltip: 'Movimientos del agente',
        });
      },
    },
    generator: (block) => {
      const message = `${block.getFieldValue('DIRECCION')}` ;
      const code = `get edimbrujo.fi.uncoma.edu.ar/iniciar/ ${message})`;
      return [code, Blockly.JavaScript.ORDER_MEMBER];
    },
  }


  const ATACAR =  {
    name: 'ATACAR',
    category: 'Agente',
    block: {      
      init: function () {
        this.jsonInit({
          previousStatement: null,
          nextStatement: null,
          message0: 'ATACAR',

          //output: 'String',
          colour: 160,
          tooltip: 'Atacar',
        });
      },
    },
    generator: (block) => {      
      const code = `console.log('Hello')`;
      return code;
    },
  }


  const helloWorld =  {
    name: 'HelloWorld',
    category: 'Demo',
    block: {
      init: function () {
        this.jsonInit({
            nextStatement: null,
         // previousStatement: null,
          message0: 'Hello %1',
          args0: [
            {
              type: 'field_input',
              name: 'NAME',
              check: 'String',
            },
          ],
        //  output: 'String',
          colour: 160,
          tooltip: 'Says Hello',
        });
      },
    },
    generator: (block) => {
      const message = `'${block.getFieldValue('NAME')}'` || '\'\'';
      const code = `console.log('Hello ${message}')`;
      return [code, Blockly.JavaScript.ORDER_MEMBER];
    },
  };


  


class Bloques extends Component {

   constructor(props) {
    super(props);
    this.state = {
      code : "Esperando Instrucciones",
      work: ""
    }; 
    this.handleCodex = this.handleCodex.bind(this);
  }

handleCodex(codex, workspace){
  //console.log(this.state)
  this.setState({ code: codex, work: workspace});
  this.props.notificar(codex);

}
  
shallowEqual(objA: mixed, objB: mixed) {
  if (objA === objB) {
    return true;
  }
  else return false;
}

shallowCompare(instance, nextProps, nextState) {
  return (    
    !this.shallowEqual(instance.state, nextState)
  );
}


  shouldComponentUpdate(nextProps, nextState) {
     return !(this.state.code == nextState.code)
}

  render() {
    return(

<div className="row">          
  <div className="col-8">
    
    <BlocklyDrawer
      tools={[INICIAR, MOVER, ATACAR]}
      language = {Blockly.Javascript}
      onChange={(code, workspace) => {
        this.handleCodex(code,workspace)
      }}
      workspaceXML = {this.state.work}
      appearance={
        {
          categories: {
            Agente: {
              colour: '160'
            },
          },
        }
      }
    >
   

   <Category name="Control" colour="%{BKY_LOGIC_HUE}">
      
        <Block type="controls_if"></Block>
        <Block type="controls_if">
          <mutation else="1"></mutation>
        </Block>
        <Block type="controls_if">
          <mutation elseif="1" else="1"></mutation>
        </Block>
      </Category>
      
     <Category name="Loops" colour="%{BKY_LOOPS_HUE}">
      <Block type="controls_repeat_ext">
        <value name="TIMES">
          <Block type="math_number">
            <field name="NUM">10</field>
          </Block>
        </value>
      </Block>
      <Block type="controls_whileUntil"></Block>
      <Block type="controls_for">
        <field name="VAR">i</field>
        <value name="FROM">
          <Block type="math_number">
            <field name="NUM">1</field>
          </Block>
        </value>
        <value name="TO">
          <Block type="math_number">
            <field name="NUM">10</field>
          </Block>
        </value>
        <value name="BY">
          <Block type="math_number">
            <field name="NUM">1</field>
          </Block>
        </value>
      </Block>
      <Block type="controls_forEach"></Block>
      <Block type="controls_flow_statements"></Block>
    </Category>
 <Category name="Boolean" colour="%{BKY_LOGIC_HUE}">
        <Block type="logic_compare"></Block>
        <Block type="logic_operation"></Block>
        <Block type="logic_negate"></Block>
        <Block type="logic_boolean"></Block>
        <Block type="logic_null"></Block>
        <Block type="logic_ternary"></Block>
      </Category>


 <Category name="Variables" colour="330" custom="VARIABLE"></Category>
  <Category name="Functions" colour="290" custom="PROCEDURE"></Category>




    </BlocklyDrawer>
</div> 
    <div className="col-4">
        <Codigo code={this.state.code}></Codigo>
    </div> 
    
    </div> 
)
}
}

export default Bloques;