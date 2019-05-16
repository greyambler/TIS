import React, { Component, PropTypes } from 'react';

import RDR_Calendar from '../chart/RDR_Calendar.jsx'
import Header_Main from '../chart/Save_Old/Header_Main.jsx'


import { GetDateNowDMY } from '../core/core_Function.jsx';
import { ru } from 'date-fns/esm/locale';
import { DateRangePicker, DefinedRange, DateRange } from 'react-date-range';

import 'moment/locale/ru'  // without this line it didn't work

import omit from 'lodash/omit';



class DateSave5 extends React.Component {
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
      let selectionRange = {
         startDate: new Date(),
         endDate: new Date(),
         key: 'selection',
         locale: ru
      }

      const props = omit(this.props, [
         'autoFocus',
         'autoFocusEndDate',
         'initialStartDate',
         'initialEndDate',
         'presets',
      ]);


      return (
         <div>
            <table>
               <tr>
                  <td>
                     <center><input type='text' value={this.state.currentDate} /></center>
                     <center><input type='text' value={this.state.currentDate} /></center>
                  </td>
               </tr>

            </table>
            <br />
            <hr />
            <DateRangePicker
               ranges={[selectionRange]}
               onChange={this.handleSelect}
               locale={ru}

            />
            <br />
            <hr />

         </div>
      );
   }
}
export default DateSave5;

/*

<DateRangePicker

                     startDate={this.state.startDate}
                     startDateId="your_unique_start_date_id"
                     endDate={this.state.endDate}
                     endDateId="your_unique_end_date_id"
                     onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
                     focusedInput={this.state.focusedInput}
                     onFocusChange={focusedInput => this.setState({ focusedInput })}

                     small={true}
                     displayFormat={'DD/MM/YYYY'}
                     noBorder={false}
                     isOutsideRange={() => false}
                     minimumNights={0}
                  />

*/