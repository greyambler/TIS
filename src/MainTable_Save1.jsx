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



class MainTable_Save1 extends React.Component {
   constructor() {
      super();
      this.state = {
         data: makeData()
      };
   }
   render() {
      const { data } = this.state;
      return (
         <div>
            <br />
            <strong>Open your console and hover over some cells!</strong>
            <br />
            <br />
            <ReactTable
               data={data}
               columns={[
                  {
                     Header: "Name",
                     columns: [
                        {
                           Header: "First Name",
                           accessor: "firstName"
                        },
                        {
                           Header: "Last Name",
                           id: "lastName",
                           accessor: d => d.lastName
                        }
                     ]
                  },
                  {
                     Header: "Info",
                     columns: [
                        {
                           Header: "Age",
                           accessor: "age"
                        },
                        {
                           Header: "Status",
                           accessor: "status"
                        }
                     ]
                  },
                  {
                     Header: "Stats",
                     columns: [
                        {
                           Header: "Visits",
                           accessor: "visits"
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
            <br />
            <Tips />
            <Logo />
         </div>
      );
   }
}
export default MainTable_Save1;