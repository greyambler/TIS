import React, { Component, PropTypes } from 'react';

import TotalIndication from './chart/TotalIndication.jsx';



import { LineChart, PieChart, ColumnChart } from 'react-chartkick'
//import Chart from 'chart.js'


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
         W_Width: this.props.w_Width/ 2 - 25,
         W_Height: this.props.w_Height,
      }
   }

   componentDidUpdate(prevProps) {
      if (this.props.w_Width != prevProps.w_Width) {
         this.setState({ W_Width: this.props.w_Width / 2 - 25});
      }
   }

   inputChangedHandler = (event) => {
      this.setState({ currentDate: event.target.value })
   }

   /*<h1>Width = {this.state.W_Width}   Height = {this.state.W_Height}</h1>*/
   render() {
      let dataCol_Char = {
         "2017-05-13": 2, "2017-05-14": 5,
         "2017-05-15": 3, "2017-05-16": 2, "2017-05-17": 2,
         "2017-05-18": 1, "2017-05-19": 2, "2017-05-20": 3
      };
      let dataCol_Char_2 = {
         "2017-05-13": 5, "2017-05-14": 7,
         "2017-05-15": 7, "2017-05-16": 5, "2017-05-17": 3,
         "2017-05-18": 6, "2017-05-19": 5, "2017-05-20": 2
      };

      let data_Line = [
         { "name": "Workout", "data":dataCol_Char },
         { "name": "Call parents", "data": dataCol_Char_2 }
      ];

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
                           <tr >
                              <td> <ColumnChart data={dataCol_Char} width={this.state.W_Width}/> </td>
                              <td> <LineChart data={data_Line} width={this.state.W_Width}/> </td>
                           </tr>
                           <tr>
                              <td> <ColumnChart data={data_Line} width={this.state.W_Width}/> </td>
                              <td> <ColumnChart data={dataCol_Char_2} width={this.state.W_Width}/> </td>
                           </tr>
                        </tbody>
                     </table>
                  </div>
               ) : (
                  <div>
                     <LineChart data={data_Line} />
                  </div>
               )
            }
         </div>
      );
   }
}

export default MainWindow_N2;
