import React, { Component, PropTypes } from 'react';

import RDR_Calendar from './chart/RDR_Calendar.jsx'
import Header_Main from './chart/Header_Main.jsx'


import moment from 'moment';

import { GetDateNowDMY, GetDateNow, GetDate_moment, DayPicker } from './core/core_Function.jsx';

//import { ru } from 'date-fns/esm/locale';

import 'moment/locale/ru'  // without this line it didn't work

import 'react-dates/initialize';

import {
   DateRangePicker, SingleDatePicker, DayPickerRangeController,
   PresetDateRangePicker
} from 'react-dates';
import 'react-dates/lib/css/_datepicker.css';



export const pureComponentAvailable = true;

class MainTable_Save6 extends React.Component {
   constructor() {
      super();
      this.testDate = this.testDate.bind(this);
      this.state = {
         _date: new Date(),
         currentDate: GetDateNow(),
         Start_Date: moment(),
         startDate: moment(),//("2019-04-05"),
         date: moment(),
         endDate: moment(),
         focused: false,
         IsOneDay: false,
      }
   }
   testDate(e) {
      try {
         alert(this.state.start_Date);

         let r = 9;
      }
      catch (error) {
         console.log(error);
      }
   }
   /*
   inputChangedHandler = (event) => {
      let _St_date = event.toLocaleDateString();
      this.setState({ currentDate: event.toLocaleDateString() })
      this.setState({ _date: event })
   }
*/

   toggleChange = (event) => {
      switch (event.target.id) {
         case 'Ch_IsOneDay': this.setState({ IsOneDay: !this.state.IsOneDay }); break;
         default: break;
      }
   }
   
   render() {

      

      return (
         <div>

            <table>
               <tr>
                  <td>
                     <center><input type='text' value={this.state.currentDate} /></center>
                     <center><input type='text' value={this.state.currentDate} /></center>

                     <center><input type='text' value={GetDate_moment(this.state.Start_Date)} /></center>
                     <center><input type="button" onClick={this.testDate} value="Test" width="500px" /></center>
                  </td>
               </tr>
               <tr>
                  <td className='td_Left'>
                     <input type='checkBox' value='sda' id="Ch_IsOneDay"
                        checked={this.state.IsOneDay}
                        onChange={this.toggleChange} />
                     <a>Один день</a>
                  </td>
               </tr>
            </table>
            <br />
            <hr />

            {this.state.IsOneDay ?
               (
                  <SingleDatePicker
                     date={this.state.startDate}
                     onDateChange={startDate => this.setState({ startDate })}
                     focused={this.state.focused}
                     onFocusChange={({ focused }) => this.setState({ focused })}
                     small={true}
                     id="your_unique_id"
                  />
               ) : (
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
                     noBorder={true}
                     isOutsideRange={() => false}
                     minimumNights={0}
                  />
               )}

            <br />
            <hr />
         </div>
      );
   }
}
export default MainTable_Save6;



/*
<PresetDateRangePicker
               startDate={this.state.startDate}
               startDateId="your_unique_start_date_id"
               endDate={this.state.endDate}
               endDateId="your_unique_end_date_id"
               onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
               focusedInput={this.state.focusedInput}
               onFocusChange={focusedInput => this.setState({ focusedInput })}
               small={true}
               displayFormat={'DD/MM/YYYY'}



               autoFocus={false}
               autoFocusEndDate={false}

               disabled={false}
               required={false}

               showClearDates={false}
               showDefaultInputIcon={false}
               horizontalMargin={0}
               withPortal={false}
               withFullScreenPortal={false}

               numberOfMonths={2}
               keepOpenOnDateSelect={false}
               reopenPickerOnClearDates={false}
               isRTL={false}
               minimumNights={0}
               enableOutsideDays={false}
            />


<SingleDatePicker
               date={this.state.Start_Date}
               onDateChange={Start_Date => this.setState({ Start_Date })}
               focused={this.state.focused}
               onFocusChange={({ focused }) => this.setState({ focused })}
               id="your_unique_id"
            />





<DateRangePicker
               startDate={this.state.startDate}
               startDateId="your_unique_start_date_id"
               endDate={this.state.endDate}
               endDateId="your_unique_end_date_id"
               onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
               focusedInput={this.state.focusedInput}
               onFocusChange={focusedInput => this.setState({ focusedInput })}
               small={true}


            />



<DateRangePicker
               startDate={this.state.start_Date} // momentPropTypes.momentObj or null,
               startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
               endDate={this.state.endDate} // momentPropTypes.momentObj or null,
               endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
               onDatesChange={({ start_Date, endDate }) => this.setState({ start_Date, endDate })} // PropTypes.func.isRequired,
               focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
               onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            />





            <DateRangePicker
               startDate={this.state.startDate} // momentPropTypes.momentObj or null,
               startDateId="your_unique_start_date_id" // PropTypes.string.isRequired,
               endDate={this.state.endDate} // momentPropTypes.momentObj or null,
               endDateId="your_unique_end_date_id" // PropTypes.string.isRequired,
               onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
               focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
               onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,
            />


            <br />
            <hr />



            <DayPickerRangeController
               startDate={this.state.startDate} // momentPropTypes.momentObj or null,
               endDate={this.state.endDate} // momentPropTypes.momentObj or null,
               onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })} // PropTypes.func.isRequired,
               focusedInput={this.state.focusedInput} // PropTypes.oneOf([START_DATE, END_DATE]) or null,
               onFocusChange={focusedInput => this.setState({ focusedInput })} // PropTypes.func.isRequired,


            />

presets={[
                  {
                     text: 'Today', start: {
                        _isAMomentObject: true,
                        _isUTC: false,
                        _pf: {
                           empty: false,
                           unusedTokens: [],
                           unusedInput: [],
                        },
                     }, end: {
                        _isAMomentObject: true,
                        _isUTC: false,
                        _pf: {
                           empty: false,
                           unusedTokens: [],
                           unusedInput: [],
                        },
                     }
                  },
                  {
                     text: 'Tomorrow', start: {
                        _isAMomentObject: true,
                        _isUTC: false,
                        _pf: {
                           empty: false,
                           unusedTokens: [],
                           unusedInput: [],
                        },
                     }, end: {
                        _isAMomentObject: true,
                        _isUTC: false,
                        _pf: {
                           empty: false,
                           unusedTokens: [],
                           unusedInput: [],
                        },
                     }
                  },
                  {
                     text: 'Next Week', start: {
                        _isAMomentObject: true,
                        _isUTC: false,
                        _pf: {
                           empty: false,
                           unusedTokens: [],
                           unusedInput: [],
                        },
                     }, end: {
                        _isAMomentObject: true,
                        _isUTC: false,
                        _pf: {
                           empty: false,
                           unusedTokens: [],
                           unusedInput: [],
                        },
                     }
                  },
               ]}

*/