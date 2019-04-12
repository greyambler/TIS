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
      return (
         <div>
            <center><strong>ReactTable</strong></center>
            <br />
            <a>https://reactjsexample.com/a-lightweight-and-extendable-datagrid-for-react/</a>
            <br />
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
               className="-striped -highlight"
            />

         </div>
      );
   }
}
export default MainTable;

/*
 getTdProps={(state, rowInfo, column, instance) => {
                  return {
                     onMouseEnter: e =>
                        console.log("Cell - onMouseEnter", {
                           state,
                           rowInfo,
                           column,
                           instance,
                           event: e
                        })
                  };
               }}



*/