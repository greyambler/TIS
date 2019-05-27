import React, { Component, PropTypes } from 'react';
import { render } from "react-dom";
import ReactTable from "react-table";

import "react-table/react-table.css"; // Импорт стилей путем включения

import {
   get_Date, Get_StartDate, Get_StopDate,
   GetDateNow, contains, GetDatFromColChart, dateStart, dateStop
} from '../core/core_Function.jsx';

import ReactExport from "react-data-export";
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;




class MainTable extends React.Component {
   constructor(props) {
      super(props);
      this.Filter_DataExcel = this.Filter_DataExcel.bind(this);
      this.get_DatFilters = this.get_DatFilters.bind(this);
      this.state = {
         Full_Data: get_Date(),
         currentDate: GetDateNow(),
         Excel_Data: get_Date(),
      };
   }

   inputChangedHandler = (event) => {
      this.setState({ currentDate: event.target.value })
   }

   Filter_DataExcel(e) {
      //this.setState({ Excel_Data: get_Date() });
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


   render() {

      //<a>https://reactjsexample.com/a-lightweight-and-extendable-datagrid-for-react/</a>
      return (
         <div>

            <table className='tbl'>
               <tr>
                  <th colspan="4">
                     <center><strong>Недоступность касс за период на АЗК</strong></center>
                  </th>
               </tr>
               <tr>
                  <td></td>
                  <td>
                     <select>
                        <option>АЗК № 100</option>
                        <option>АЗК № 101</option>
                     </select>
                  </td>
                  <td className='td_Left'>
                     <input type='date' className='date_h' value={this.state.currentDate}
                        onChange={(event) => this.inputChangedHandler(event)} />
                  </td>
                  <td>
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
               <tr>
                  <td colspan="4">
                     <ReactTable
                        onFilteredChange={this.Filter_DataExcel}
                        data={this.state.Full_Data}
                        columns={[
                           {
                              Header: "Дата",
                              accessor: "Datetime"
                           },
                           {
                              Header: "Магазин",
                              columns: [
                                 {
                                    Header: "№ магазина",
                                    accessor: "SHOP_NUM"
                                 },
                                 {
                                    Header: "№ кассы",
                                    accessor: "KASS_NUM"
                                 },
                                 {
                                    Header: "Смена",
                                    accessor: "SHIFT_NUM"
                                 },
                                 {
                                    Header: "Кассир",
                                    accessor: "CASHIER_ID"
                                 }
                              ]
                           },
                           {
                              Header: "События",
                              columns: [
                                 {
                                    Header: "Тип",
                                    accessor: "EVENT_NAME"
                                 },
                                 {
                                    Header: "Продолжительность",
                                    accessor: "Duration"
                                 },
                                 {
                                    Header: "Дата",
                                    accessor: "DateKey"
                                 },
                                 {
                                    Header: "Время",
                                    accessor: "TimeKey"
                                 }
                              ]
                           }
                        ]}
                        defaultPageSize={20}

                        filterable={true}
                        show={false}
                        nextText={'>'}
                        previousText={'<'}
                        rowsText={'строк'}
                        width={150}
                        pageText={'стр.'}
                        ofText={'из'}
                        className="-striped -highlight"
                     >
                     </ReactTable>
                  </td>
               </tr>
            </table>

         </div>
      );
   }
}
export default MainTable;

/*

<td>
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






                           <ExcelColumn label="EVENT_TYPE" value="EVENT_TYPE" />
                           <ExcelColumn label="F" value="F" />

                           <ExcelColumn label="Key" value="Key" />
                           <ExcelColumn label="M" value="M" />

                           <ExcelColumn label="Rang" value="Rang" />
                           <ExcelColumn label="Rang2_bus" value="Rang2_bus" />
                           <ExcelColumn label="ratedFreq" value="ratedFreq" />



                           <ExcelColumn label="M2" value="M2" />

                        </ExcelSheet>

                     </ExcelFile>

</td>

*/









