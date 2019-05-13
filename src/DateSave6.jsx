import React, { Component, PropTypes } from 'react';

import moment from 'moment';


import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import 'moment/locale/ru';
//import { ru } from 'date-fns/esm/locale';


import {
   DateRangePicker, PresetDateRangePicker,
   DayPickerRangeController,
   DayPicker, DayPickerSingleDateController, SingleDatePicker
} from 'react-dates';

import { isSameDay } from './core/core_Function.jsx';

class DateSave6 extends React.Component {
   constructor() {
      super();
      //moment.locale('en-AU');

      //this.onDatesChange = this.onDatesChange.bind(this);
      this.renderDatePresets = this.renderDatePresets.bind(this);
      this.state = {
         startDate: moment(),
         endDate: moment(),
      }
   }

   onDatesChange({ startDate, endDate }) {
      //event.target.value 
      //moment.locale('ru');
      this.setState({ startDate, endDate });
      /*
            var elem = document.getElementsByName('DRP');
      
            if (elem != null) {
               moment.locale('ru');
               elem.locale = { ru };
      
            }
            */
   }


   renderDatePresets(event) {
      const presets = this.props.presets;
      const { startDate, endDate } = this.state;

      return (
         <div>
            {presets.map(({ text, start, end }) => {
               let isSelected = isSameDay(start, startDate) && isSameDay(end, endDate);
               return (
                  <button
                     key={text}

                     className={!isSelected
                        ? ("btn_Date")
                        : ("btn_Date_Select")}
                     type="button"
                     onClick={() => this.onDatesChange({ startDate: start, endDate: end })}>
                     {text}
                  </button>
               );
            })}
         </div>
      );
   }

   render() {
      //moment.locale('ru');
      return (
         <div>

            <hr />
            <DateRangePicker id='DRP' className='DRP'

               startDate={this.state.startDate}
               startDateId="your_unique_start_date_id"
               endDate={this.state.endDate}
               endDateId="your_unique_end_date_id"
               onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}
               focusedInput={this.state.focusedInput}
               onFocusChange={focusedInput => this.setState({ focusedInput })}

               renderCalendarInfo={this.renderDatePresets}

               //locale={ru}
               
               noBorder="false"

               small={true}
               displayFormat={'DD/MM/YYYY'}
               noBorder={false}
               isOutsideRange={() => false}
               minimumNights={0}



               showClearDates
            />
         </div>

      );
   }
}



export default DateSave6;

