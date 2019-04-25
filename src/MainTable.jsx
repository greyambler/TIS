import React, { Component, PropTypes } from 'react';
import { render } from "react-dom";
import ReactTable from "react-table";

import "react-table/react-table.css"; // Импорт стилей путем включения

import {
   get_Date, Get_StartDate, Get_StopDate,
   GetDateNow, contains, GetDatFromColChart, dataStart, dataStop
} from './core/core_Function.jsx';

import ReactExport from "react-data-export";
const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;




class MainTable extends React.Component {
   constructor() {
      super();
      this.state = {
         data: get_Date(),
         currentDate: GetDateNow(),
      };
   }

   inputChangedHandler = (event) => {
      this.setState({ currentDate: event.target.value })
   }


   render() {
      const { data } = this.state;
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
                        <ExcelSheet data={data} name="Employees">

                           <ExcelColumn label="CASHIER_ID" value="CASHIER_ID" />
                           <ExcelColumn label="DateKey" value="DateKey" />
                           <ExcelColumn label="Datetime" value="Datetime" />
                           <ExcelColumn label="Duration" value="Duration" />
                           <ExcelColumn label="EVENT_NAME" value="EVENT_NAME" />

                           <ExcelColumn label="EVENT_TYPE" value="EVENT_TYPE" />
                           <ExcelColumn label="F" value="F" />
                           <ExcelColumn label="KASS_NUM" value="KASS_NUM" />
                           <ExcelColumn label="Key" value="Key" />
                           <ExcelColumn label="M" value="M" />

                           <ExcelColumn label="Rang" value="Rang" />
                           <ExcelColumn label="Rang2_bus" value="Rang2_bus" />
                           <ExcelColumn label="ratedFreq" value="ratedFreq" />
                           <ExcelColumn label="SHIFT_NUM" value="SHIFT_NUM" />
                           <ExcelColumn label="SHOP_NUM" value="SHOP_NUM" />
                           <ExcelColumn label="TimeKey" value="TimeKey" />
                           <ExcelColumn label="M2" value="M2" />

                        </ExcelSheet>

                     </ExcelFile>
                  </td>
               </tr>
               <tr>
                  <td colspan="4">
                     <ReactTable
                        data={data}
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
                                    Header: "Длительность",
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
      <ExcelSheet data={data} name="Employees">
         <ExcelColumn label="CASHIER_ID" value="CASHIER_ID" />
         <ExcelColumn label="DateKey" value="DateKey" />
         <ExcelColumn label="Datetime" value="Datetime" />
         <ExcelColumn label="Duration" value="Duration" />
         <ExcelColumn label="EVENT_NAME" value="EVENT_NAME" />

         <ExcelColumn label="EVENT_TYPE" value="EVENT_TYPE" />
         <ExcelColumn label="F" value="F" />
         <ExcelColumn label="KASS_NUM" value="KASS_NUM" />
         <ExcelColumn label="Key" value="Key" />
         <ExcelColumn label="M" value="M" />

         <ExcelColumn label="Rang" value="Rang" />
         <ExcelColumn label="Rang2_bus" value="Rang2_bus" />
         <ExcelColumn label="ratedFreq" value="ratedFreq" />
         <ExcelColumn label="SHIFT_NUM" value="SHIFT_NUM" />
         <ExcelColumn label="SHOP_NUM" value="SHOP_NUM" />
         <ExcelColumn label="TimeKey" value="TimeKey" />
         <ExcelColumn label="M2" value="M2" />


      </ExcelSheet>

   </ExcelFile>
</td>

*/









