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
      let StyleHead = {
         textAlign: "center",
      }
      if (this.props.color == 'red') {
         StyleHead = {
            textAlign: "center",
            color: "red",
         }
      }
      if (this.props.color != 'red') {
         switch (this.props.equal) {
            case 'left':
               {
                  StyleHead = {
                     textAlign: "left",
                     paddingLeft: "10px",
                  }
                  if (this.props.color == 'red') {
                     StyleHead = {
                        textAlign: "left",
                        paddingLeft: "10px",
                        color: "red",
                     }
                  }

                  break;
               }
            case 'right':
               {
                  StyleHead = {
                     textAlign: "right",
                     paddingLeft: "10px",
                  }
                  if (this.props.color == 'red') {
                     StyleHead = {
                        textAlign: "right",
                        paddingLeft: "10px",
                        color: "red",
                     }
                  }
                  break;
               }
            default: break;
         }
      }
      return (
         <td style={StyleHead}>
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