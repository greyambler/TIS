import React, { Component, PropTypes } from 'react';


import {
   get_Date, Get_StartDate, Get_StopDate,
   GetDateNow, contains, GetDatFromColChart, dataStart, dataStop
} from './core/core_Function.jsx';




import { render } from "react-dom";
import { makeData, Logo, Tips } from "./core/core_Function.jsx";

// Import React Table
import ReactTable from "react-table";
import "react-table/react-table.css";



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
                           Header: "№",
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
               defaultPageSize={10}
               className="-striped -highlight"
            />

         </div>
      );
   }
}
export default MainTable;