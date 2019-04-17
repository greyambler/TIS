import React, { Component, PropTypes } from 'react';
import { render } from "react-dom";
import ReactTable from "react-table";

import "react-table/react-table.css"; // Импорт стилей путем включения

import {
   get_Date, Get_StartDate, Get_StopDate,
   GetDateNow, contains, GetDatFromColChart, dataStart, dataStop
} from './core/core_Function.jsx';





class MainTable extends React.Component {
   constructor() {
      super();
      this.state = {
         data: get_Date()
      };
   }
   render() {
      const { data } = this.state;
      //<a>https://reactjsexample.com/a-lightweight-and-extendable-datagrid-for-react/</a>
      return (
         <div>
            <center><strong>ReactTable</strong></center>
            <hr />
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
               defaultPageSize={10}

               //filterable= {true}
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
         </div>
      );
   }
}
export default MainTable;
