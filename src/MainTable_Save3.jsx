import React, { Component, PropTypes } from 'react';
import { render } from "react-dom";
import ReactTable from "react-table";

import "react-table/react-table.css"; // Импорт стилей путем включения

import {
   get_Date, Get_StartDate, Get_StopDate,
   GetDateNow, contains, GetDatFromColChart, dataStart, dataStop
} from './core/core_Function.jsx';




class MainTable_Save3 extends Component {
   constructor() {
      super();
      this.onChange = this.onChange.bind(this);
   }

   defaultFilterMethod = (filter, row, column) => {
     debugger; // This line never reached
     const id = filter.pivotId || filter.id;
     return row[id] !== undefined ? row[id].department === filter.value : true;
   };

   data = [{name: 'Tanner Linsley', department: 1}, {name: 'Jason Maurer', department: 2}];
   columns = [{Header: 'Name', accessor: 'name'}, {Header: 'Department', id: 'department', accessor: 'department'}];
   
   defaultFilterMethod = (filter, row, column) => {
     const id = filter.pivotId || filter.id;
     return row[id] !== undefined ? row[id] === filter.value : true;
   };


   onChange = e => this.refs.reactTable.filterColumn(this.columns[1], e.target.value);

  
   render() {
     const data = [{
       name: 'Tanner Linsley',
       department: 1,
     },{
       name: 'Jason Maurer',
       department: 2,
     }];
 
     const columns = [{
       Header: 'Name',
       accessor: 'name'
     }, {
       Header: 'Department',
       accessor: 'department'
     }];
 
     return (
       <div>
         <select onChange={this.onChange}>
          <option value="">All</option>
          <option value="1">Department One</option>
          <option value="2">Department Two</option>
        </select>
 
         <ReactTable
           ref="reactTable"
           columns={columns}
           defaultFilterMethod={this.defaultFilterMethod}
           data={data}
           filterable={false}
         />
       </div>
     );
   }
 }

 export default MainTable_Save3;