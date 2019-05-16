import React, { Component, PropTypes } from 'react';
import { DateRangePicker } from 'react-dates';
import ReactExport from "react-data-export";
import moment from 'moment';
import {
   isSameDay, presets,
   get_Date, Get_StartDate, Get_StopDate,
   GetDateNow, contains, GetDatFromColChart, dateStart, dateStop
} from '../../core/core_Function.jsx';


const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;


export default class w_headFilter extends Component {
   constructor() {
      super();
      this.onDatesChange = this.onDatesChange.bind(this);
      this.renderDatePresets = this.renderDatePresets.bind(this);
      this.Filter_DataExcel = this.Filter_DataExcel.bind(this);
      this.get_DatFilters = this.get_DatFilters.bind(this);

      this.state = {
         Full_Data: get_Date(),
         currentDate: GetDateNow(),
         Excel_Data: get_Date(),
         startDate: moment(),
         endDate: moment(),
         W_Width: window.innerWidth / 2 - 25,
      };
   }

   inputChangedHandler = (event) => {
      this.setState({ currentDate: event.target.value })
   }

   Filter_DataExcel(e) {
      let _excel_Data = get_Date();
      for (const itemF of e) {
         _excel_Data = this.get_DatFilters(_excel_Data, itemF);
      }
      this.setState({ Excel_Data: _excel_Data });
   }
   get_DatFilters(_E_Data, itemF) {

      let _return_Data = new Array();
      if (itemF != null) {
         let index = 0;
         for (const iterator of _E_Data) {
            switch (itemF.id) {
               case 'Datetime':
                  {
                     if (iterator.Datetime.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'EVENT_TYPE':
                  {
                     if (iterator.EVENT_TYPE.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'SHOP_NUM':
                  {
                     if (iterator.SHOP_NUM.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'KASS_NUM':
                  {
                     if (iterator.KASS_NUM.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }

               case 'SHIFT_NUM':
                  {
                     if (iterator.SHIFT_NUM.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }

               case 'CASHIER_ID':
                  {
                     if (iterator.CASHIER_ID.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'EVENT_NAME':
                  {
                     if (iterator.EVENT_NAME.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'Duration':
                  {
                     if (iterator.Duration.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'Key':
                  {
                     if (iterator.Key.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'DateKey':
                  {
                     if (iterator.DateKey.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'TimeKey':
                  {
                     if (iterator.TimeKey.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'SHOP_NUM':
                  {
                     if (iterator.SHOP_NUM.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'KASS_NUM':
                  {
                     if (iterator.KASS_NUM.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'CASHIER_ID':
                  {
                     if (iterator.CASHIER_ID.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'Duration':
                  {
                     if (iterator.Duration.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'ratedFreq':
                  {
                     if (iterator.ratedFreq.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'F':
                  {
                     if (iterator.F.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'M':
                  {
                     if (iterator.M.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'Rang':
                  {
                     if (iterator.Rang.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'М2':
                  {
                     if (iterator.М2.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'Rang2_bus':
                  {
                     if (iterator.Rang2_bus.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               default:
                  break;
            }
         }
      }
      return _return_Data;
   }

   componentDidMount() {
      this.setState({ W_Width: this.props.w_Width / 2 - 25 });
   }

   componentDidUpdate(prevProps) {
      if (this.props.w_Width != prevProps.w_Width) {
         this.setState({ W_Width: this.props.w_Width });
      }
   }

   onDatesChange({ startDate, endDate }) {
      this.setState({ startDate, endDate });
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
                     onClick={() => this.onDatesChange({ startDate: start, endDate: end })}>
                     {text}
                  </button>
               );
            })}
         </div>
      );
   }

   render() {
      return (
         <tr>
            <td width="25%"></td>
            <td width="25%">
               <select>
                  <option>АЗК № 100</option>
                  <option>АЗК № 101</option>
               </select>
            </td>
            <td width="25%">
               <center>
                  <DateRangePicker
                     startDate={this.state.startDate}
                     startDateId="your_unique_start_date_id"
                     endDate={this.state.endDate}
                     endDateId="your_unique_end_date_id"
                     onDatesChange={({ startDate, endDate }) => this.setState({ startDate, endDate })}


                     focusedInput={this.state.focusedInput}
                     onFocusChange={focusedInput => this.setState({ focusedInput })}

                     renderCalendarInfo={this.renderDatePresets}

                     small={true}
                     displayFormat={'DD/MM/YYYY'}
                     noBorder={true}
                     isOutsideRange={() => false}
                     minimumNights={0}
                  />

               </center>
            </td>



            <td width="25%">
               <ExcelFile element={<button>Выгрузка в EXCEL</button>}>
                  <ExcelSheet data={this.state.Excel_Data} name="Employees">
                     <ExcelColumn label="Дата" value="Datetime" />
                     <ExcelColumn label="№ магазина" value="SHOP_NUM" />
                     <ExcelColumn label="№ кассы" value="KASS_NUM" />
                     <ExcelColumn label="Смена" value="SHIFT_NUM" />
                     <ExcelColumn label="Кассир" value="CASHIER_ID" />
                     <ExcelColumn label="Тип" value="EVENT_NAME" />
                     <ExcelColumn label="Продолжительность" value="Duration" />
                     <ExcelColumn label="Дата" value="DateKey" />
                     <ExcelColumn label="Время" value="TimeKey" />
                  </ExcelSheet>
               </ExcelFile>
            </td>
         </tr>
      );
   }
}