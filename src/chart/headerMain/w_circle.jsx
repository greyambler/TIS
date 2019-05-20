import React, { Component, PropTypes } from 'react';
import { Stage, Layer, Text, Circle } from 'react-konva';


export default class w_circle extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      let W_Stage = 120;
      let H_Stage = 50;

      let _N_text = 0;
      let _Length = 0;
      if (this.props.N_text != null) {
         _N_text = this.props.N_text;
         _Length = _N_text.toString().length;
      }

      if (this.props.proc == null) {
         return (
            <Stage width={W_Stage} height={H_Stage} >
               <Layer>
                  {(_Length < 7) &&
                     <Circle x={W_Stage / 2} y={H_Stage / 2} radius={24} fill='white' stroke='black' />
                  }
                  <Text width={W_Stage - 2} wrap="char" align="center"
                     text={_N_text}
                     x={0} y={H_Stage / 2.5} fontSize='12' fill='black'
                  />
               </Layer>
            </Stage>
         );
      } else {
         return (
            <Stage width={W_Stage} height={H_Stage + 20}>
               <Layer>
                  <Circle x={W_Stage / 2} y={H_Stage / 1.4}
                     radius={20} fill='white'
                     stroke='yellow' strokeWidth='15' />
                  <Text width={W_Stage} wrap="char" align="center"
                     text="50%" x={5} y={H_Stage / 1.7} fontSize='12' fill='red' />
               </Layer>
            </Stage>
         );
      }
   }
}
