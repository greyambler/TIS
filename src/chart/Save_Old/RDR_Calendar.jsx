import React, { Component, PropTypes } from 'react';

// Calendar   DateRangePicker
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; //файл темы css
import { Calendar, DateRangePicker } from 'react-date-range';

import { ru } from 'date-fns/esm/locale';
// Calendar   DateRangePicker
import {
   get_Date, Get_StartDate, Get_StopDate, GetDateNowDMY,
   GetDateNow, contains, GetDatFromColChart, dataStart, dataStop
} from '../../core/core_Function.jsx';



class RDR_Calendar extends React.Component {
   constructor() {
      super();
      this.state = {
         _date: new Date(),
         currentDate: GetDateNowDMY(),
      }
   }
   inputChangedHandler = (event) => {
      let _St_date = event.toLocaleDateString();
      this.setState({ currentDate: event.toLocaleDateString() })
      this.setState({ _date: event })
   }

   render() {
      return (
         <table>
            <tr>
               <th><center><input type='text' value={this.state.currentDate} /></center></th>
            </tr>
            <tr>
               <center>
                  <Calendar
                     date={this.state._date}
                     dragSelectionEnabled={true}
                     showSelectionPreview={true}
                     locale={ru}
                     onChange={(event) => this.inputChangedHandler(event)}
                  />
               </center>
            </tr>
         </table>
      );
   }
}
export default RDR_Calendar;
