import React, { Component, PropTypes } from 'react';
import { DateRangePicker } from 'react-dates';
import { isSameDay, presets } from '../../core/core_Function.jsx';

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
   }

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
      let _className = 'Head_Center';
      switch (this.props.equal) {
         case 'left': _className = 'Head_Left'; break;
         case 'right': _className = 'Head_Right'; break;
         default: _className = 'Head_Center'; break;
      }
      return (
         <td className={_className}>
            <DateRangePicker
               startDate={this.props.startDate}
               startDateId="S_DRP_id"
               endDate={this.props.endDate}
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
         </td>
      );
   }
}