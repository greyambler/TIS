import React, { Component, PropTypes } from 'react';
import { render } from "react-dom";
import ReactTable from "react-table";

import "react-table/react-table.css"; // Импорт стилей путем включения

import {
   get_Date, Get_StartDate, Get_StopDate,
   GetDateNow, contains, GetDatFromColChart, dateStart, dateStop,
   makeData, Logo, Tips

} from '../core/core_Function.jsx';


import matchSorter from 'match-sorter'


class MainTable_Save4 extends Component {
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
            <ReactTable
               data={data}
               filterable
               defaultFilterMethod={(filter, row) =>
                  String(row[filter.id]) === filter.value}
               columns={[
                  {
                     Header: "Name",
                     columns: [
                        {
                           Header: "First Name",
                           accessor: "firstName",
                           filterMethod: (filter, row) =>
                              row[filter.id].startsWith(filter.value) &&
                              row[filter.id].endsWith(filter.value)
                        },
                        {
                           Header: "Last Name",
                           id: "lastName",
                           accessor: d => d.lastName,
                           filterMethod: (filter, rows) =>
                              matchSorter(rows, filter.value, { keys: ["lastName"] }),
                           filterAll: true
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
                           Header: "Over 21",
                           accessor: "age",
                           id: "over",
                           Cell: ({ value }) => (value >= 21 ? "Yes" : "No"),

                           filterMethod: (filter, row) => {
                              if (filter.value === "all") {
                                 return true;
                              }
                              if (filter.value === "true") {
                                 return row[filter.id] >= 21;
                              }
                              return row[filter.id] < 21;
                           },

                           Filter: ({ filter, onChange }) =>
                              <select
                                 onChange=
                                 {
                                    event => onChange(event.target.value)
                                 }
                                 style={{ width: "100%" }}
                                 value={filter ? filter.value : "all"}
                              >
                                 <option value="all">Show All</option>
                                 <option value="true">Can Drink</option>
                                 <option value="false">Can't Drink</option>
                              </select>
                        }
                     ]
                  }
               ]}
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

export default MainTable_Save4;