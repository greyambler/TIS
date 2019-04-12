import React, { Component, PropTypes } from 'react';

import { Stage, Layer, Rect, Text, Circle } from 'react-konva';

class TotalIndication extends Component {
   constructor(props, context) {
      super(props, context);
   }
   render() {
      let W_Stage = '100';
      let H_Stage = '110';
      return (
         <div>
            <fieldset className='space' >
               <legend >Общие показатели на сегодня</legend>
               <table height='100%' className='T_1'>
                  <tbody>
                     <tr>
                        <td border='1'>
                           <center>
                              <Stage width={W_Stage} height={H_Stage} >
                                 <Layer>
                                    <Circle x={W_Stage / 2} y={H_Stage / 2} radius={40} fill='white' stroke='black'
                                    />
                                    <Text width={W_Stage} wrap="char" align="center"
                                       text="12" x={0} y={H_Stage / 3} fontSize='40' fill='blue'
                                    />
                                 </Layer>
                              </Stage>
                           </center>
                        </td>
                        <td>
                           <center>
                              <Stage width={W_Stage} height={H_Stage}>
                                 <Layer>
                                    <Circle x={W_Stage / 2} y={H_Stage / 2} radius={40} fill='white'
                                       stroke='black' />
                                    <Text width={W_Stage} wrap="char" align="center"
                                       text="245" x={0} y={H_Stage / 3} fontSize='40' fill='blue' />
                                 </Layer>
                              </Stage>
                           </center>
                        </td>
                        <td>
                           <center>
                              <Stage width={W_Stage} height={H_Stage}>
                                 <Layer>
                                    <Circle x={W_Stage / 2} y={H_Stage / 2} radius={40} fill='white'
                                       stroke='yellow' strokeWidth='15' />
                                    <Text width={W_Stage} wrap="char" align="center"
                                       text="50%" x={0} y={H_Stage / 2.5} fontSize='30' fill='red' />
                                 </Layer>
                              </Stage>
                           </center>
                        </td>
                        <td>
                           <center>
                              <Stage width={W_Stage} height={H_Stage}>
                                 <Layer>
                                    <Circle x={W_Stage / 2} y={H_Stage / 2} radius={40} fill='white' stroke='black' />
                                    <Text width={W_Stage} wrap="char" align="center"
                                       text="24" x={0} y={H_Stage / 3}
                                       fontSize='40' fill='blue' />
                                 </Layer>
                              </Stage>
                           </center>
                        </td>
                     </tr>
                     <tr>
                        <td className='td_Name'><center>Загружено файлов</center></td>
                        <td className='td_Name'><center>Событий найдено</center></td>
                        <td className='td_Name'><center>Контрольные процедуры выполнены</center></td>
                        <td className='td_Name'><center>Системных инцидентов</center></td>
                     </tr>
                  </tbody>
               </table>

            </fieldset>
         </div>
      );
   }
}

export default TotalIndication;

