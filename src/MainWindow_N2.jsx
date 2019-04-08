import React, { Component, PropTypes } from 'react';

import TotalIndication from './chart/TotalIndication.jsx'

import ColumnChart from './chart/ColumnChart.jsx'
import LinesChart from './chart/LinesChart.jsx'
import Histogram from './chart/Histogram.jsx'
import HistogramGroup from './chart/HistogramGroup.jsx'


const _Debuge = true;

function GetDateNow() {
   var date = new Date();
   var day = date.getDate();
   var month = date.getMonth() + 1;
   var year = date.getFullYear();
   if (month < 10) month = "0" + month;
   if (day < 10) day = "0" + day;
   var today = year + "-" + month + "-" + day;
   return today;
}



class MainWindow_N2 extends React.Component {
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

   /*<h1>Width = {this.state.W_Width}   Height = {this.state.W_Height}</h1>*/
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
                                 <tr>
                                    <td>
                                       <input type='date' className='date_h' value={this.state.currentDate}
                                          onChange={(event) => this.inputChangedHandler(event)}
                                       />
                                    </td>
                                 </tr>
                                 <tr>
                                    <td>
                                       <select className='comboBox'>
                                          <option>Пункт 1</option>
                                          <option>Пункт 2</option>
                                       </select>
                                    </td>
                                 </tr>
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
                              <td className='td_C_Chart'> </td>
                              <td className='td_C_Chart'> </td>
                           </tr>
                           <tr>
                              <td className='td_C_Chart'> </td>
                              <td className='td_C_Chart'> </td>
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

export default MainWindow_N2;
