import React, { Component, PropTypes } from 'react';
import { DateRangePicker } from 'react-dates';
import { isSameDay, presets } from '../../core/core_Function.jsx';
//import moment from 'moment';
//import 'moment/locale/ru'

export default class w_headDate extends Component {
   constructor(props) {
      super(props);
      this.on_DatesChange = this.on_DatesChange.bind(this);
      this.renderDatePresets = this.renderDatePresets.bind(this);

      this.state = {
         startDate: this.props.startDate,
         endDate: this.props.endDate,
      };
   }

   on_DatesChange({ startDate, endDate }) {
      this.setState({ startDate, endDate }, this.props.updateData({ startDate, endDate }));
      //this.props.updateData({ startDate, endDate });
   }
   /*
      componentDidUpdate(prevProps) {
         if (this.props.startDate != prevProps.startDate) {
            this.setState({ startDate: this.props.startDate });
         }
         if (this.props.endDate != prevProps.endDate) {
            this.setState({ endDate: this.props.endDate });
         }
      }
      */

   renderDatePresets() {
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
                     onClick={() => this.on_DatesChange({ startDate: start, endDate: end })}>
                     {text}
                  </button>
               );
            })}
         </div>
      );
   }

   render() {
      return (

         <td>
            <center>
               <DateRangePicker
                  startDate={this.state.startDate}
                  startDateId="S_DRP_id"
                  endDate={this.state.endDate}
                  endDateId="E_DRP_id"

                  onDatesChange={({ startDate, endDate }) => this.on_DatesChange({ startDate, endDate })}

                  focusedInput={this.state.focusedInput}
                  onFocusChange={focusedInput => this.setState({ focusedInput })}
                  renderCalendarInfo={this.renderDatePresets}

                  small={true}
                  displayFormat={'DD/MM/YYYY'}
                  noBorder={true}
                  isOutsideRange={() => false}
                  minimumNights={0}
                  disabled={this.props.isDisable}

               />
            </center>
         </td>

      );
   }
}
/*
            <td className="td_Date">
               {this.state.startDate.format("DD/MM/YYYY")}  -  {this.state.endDate.format("DD/MM/YYYY")}
            </td>

            <td className="td_Date">
               {this.props.StartDate}  -  {this.props.StopDate}
            </td>


*/