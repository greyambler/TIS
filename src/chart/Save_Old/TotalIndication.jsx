import React, { Component, PropTypes } from 'react';

import { Stage, Layer, Rect, Text, Circle } from 'react-konva';

class TotalIndication extends Component {
   constructor(props, context) {
      super(props, context);
   }
   render() {
      let W_Stage = '120';
      let H_Stage = '50';
      return (

         <table className='space'>
            <tbody>
               <tr>
                  <th colSpan='4'><legend >Общие показатели за период</legend></th>
               </tr>
               <tr><td><br /></td></tr>
               <tr>
                  <td>
                     <center>
                        <Stage width={W_Stage} height={H_Stage} >
                           <Layer>
                              <Circle x={W_Stage / 2} y={H_Stage / 2}
                                 radius={24} fill='white' stroke='black'
                              />
                              <Text width={W_Stage - 2} wrap="char" align="center"
                                 text="12" x={0} y={H_Stage / 3} fontSize='20' fill='black'
                              />
                           </Layer>
                        </Stage>
                     </center>
                  </td>
                  <td>
                     <center>
                        <Stage width={W_Stage} height={H_Stage}>
                           <Layer>
                              <Circle x={W_Stage / 2} y={H_Stage / 2}
                                 radius={24} fill='white'
                                 stroke='black' />
                              <Text width={W_Stage} wrap="char" align="center"
                                 text="245" x={0} y={H_Stage / 3.5} fontSize='20' fill='blue' />
                           </Layer>
                        </Stage>
                     </center>
                  </td>
                  <td>
                     <center>
                        <Stage width={W_Stage} height={H_Stage}>
                           <Layer>
                              <Circle x={W_Stage / 2} y={H_Stage / 2}
                                 radius={20} fill='white'
                                 stroke='yellow' strokeWidth='15' />
                              <Text width={W_Stage} wrap="char" align="center"
                                 text="50%" x={0} y={H_Stage / 3} fontSize='20' fill='red' />
                           </Layer>
                        </Stage>
                     </center>
                  </td>
                  <td>
                     <center>
                        <Stage width={W_Stage} height={H_Stage}>
                           <Layer>
                              <Circle x={W_Stage / 2} y={H_Stage / 2}
                                 radius={24} fill='yellow' stroke='black' />

                              <Text width={W_Stage} wrap="char" align="center"
                                 text="24" x={0} y={H_Stage / 3}
                                 fontSize='20' fill='black' />
                           </Layer>
                        </Stage>
                     </center>
                  </td>
               </tr>
               <tr><td><br /></td></tr>
               <tr>
                  <td className='td_Name'><center>Логов загружено</center></td>
                  <td className='td_Name'><center>События идентифицированы</center></td>
                  <td className='td_Name'><center>Расчеты КП выполнены</center></td>
                  <td className='td_Name'><center>Системные инциденты</center></td>
               </tr>
            </tbody>
         </table>
      );
   }
}

export default TotalIndication;

