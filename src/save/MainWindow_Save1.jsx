import React, { Component, PropTypes } from 'react';

import {
   get_Date, Get_StartDate, Get_StopDate,
   GetDateNow, contains
} from '../core/core_Function.jsx';

import TotalIndication from '../chart/TotalIndication.jsx'

import ColumnChart from '../chart/Save_Old/ColumnChart_Save.jsx'
import LinesChart from '../chart/Save_Old/LinesChart_Save.jsx'
import Histogram from '../chart/Save_Old/Histogram.jsx'
import HistogramGroup from '../chart/Save_Old/HistogramGroup_Save.jsx'

const _Debuge = true;

class MainWindow_Save1 extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         currentDate: GetDateNow(),
         W_Width: this.props.w_Width,
         W_Height: this.props.w_Height,
      }
   }

   componentDidUpdate(prevProps) {
      if (this.props.w_Width != prevProps.w_Width) {
         this.setState({ W_Width: this.props.w_Width });
      }
   }

   inputChangedHandler = (event) => {
      this.setState({ currentDate: event.target.value })
   }
   render() {
      return (
         <div>
            {_Debuge ?
               (
                  <div>
                     <table>
                        <tbody>
                           <tr>
                              <td className='td_t1'>
                                 <TotalIndication />
                              </td>
                              <td className='td_t2'>
                                 <div>
                                    <tr>
                                       <td>
                                          <input type='date' className='date_h' value={this.state.currentDate}
                                             onChange={(event) => this.inputChangedHandler(event)}
                                          />
                                       </td>
                                    </tr>
                                    <tr>
                                       <td>
                                          <select className='comboBox' >

                                             <option selected="selected" className='select_1'>Пункт 1</option>
                                             <option className='select_2'>Пункт 2</option>
                                             <option className='select_3'>Пункт 3</option>
                                          </select>
                                       </td>
                                    </tr>
                                 </div>
                              </td>
                           </tr>
                        </tbody>
                     </table>
                     <br />
                     <br />
                     <hr />
                     <br />
                     <br />
                     <table>
                        <tbody>
                           <tr>
                              <td className='td_C_Chart'><ColumnChart w_Width={this.state.W_Width} /></td>
                              <td className='td_C_Chart'><LinesChart w_Width={this.state.W_Width} /></td>
                           </tr>
                           <tr>
                              <td className='td_C_Chart'><HistogramGroup w_Width={this.state.W_Width} /></td>
                              <td className='td_C_Chart'><Histogram w_Width={this.state.W_Width} /></td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               ) : (
                  <div>
                     <ColumnChart />
                  </div>
               )
            }
         </div>
      );
   }
}

export default MainWindow_Save1;
