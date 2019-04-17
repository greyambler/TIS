import React, { Component, PropTypes } from 'react';

import { GetDateNow } from '../core/core_Function.jsx';

class RightIndication extends Component {
   constructor(props) {
      super(props);

      this.state = {
         currentDate: GetDateNow(),
      }
   }
   render() {
      return (
         <table>
            <tr>
               <td className='td_Left'><center>Период выборки</center></td>
            </tr>
            <tr>
               <td className='td_Left'>
                  <input type='date' className='date_h' value={this.state.currentDate}
                     onChange={(event) => this.inputChangedHandler(event)} />
               </td>
            </tr>

            <tr>
               <td className='td_Left'>
                  <input type='checkBox' checked='true' value='sda' /><a>1 Сбой кассы</a>
               </td>
            </tr>
            <tr>
               <td className='td_Left'>
                  <input type='checkBox' checked='true' value='sda' /><a>2 Сбой ТРК</a>
               </td>
            </tr>
            <tr>
               <td className='td_Left'>
                  <input type='checkBox' checked='true' value='sda' /><a>3 Сбой периферия</a>
               </td>
            </tr>
            <tr>
               <td className='td_Left'>
                  <input type='checkBox' checked='true' value='sda' /><a>4 Сбой СВН</a>
               </td>
            </tr>
         </table>
      );
   }
}

export default RightIndication;

