import React, { Component, PropTypes } from 'react';
import { render } from "react-dom";
import ReactTable from "react-table";

import "react-table/react-table.css"; // Импорт стилей путем включения

import {
   get_Date, Get_StartDate, Get_StopDate,
   GetDateNow, contains, GetDatFromColChart, dataStart, dataStop
} from './core/core_Function.jsx';





class MainTable_Save2 extends React.Component {
   constructor() {
      super();
      this.ON_Click = this.ON_Click.bind(this);
      this.onChange = this.onChange.bind(this);
      this.state = {
         data: get_Date(),
         ID_Table: ''
      };
   }

   defaultFilterMethod = (filter, row, column) => {
      const id = filter.pivotId || filter.id;
      return row[id] !== undefined ? row[id].department === filter.value : true;
   };

   onChange = e => this.refs.reactTable.filterColumn(this.columns[10], 4);
   
   ON_Click(e) {
      const tems = document.getElementById('Col_F');
      const R_tems = this.refs.Col_F;

      const rTable = this.refs.reactTable;

      const innerText = e.currentTarget.innerText;
      const Id = e.currentTarget.id;

      rTable.filterColumn(rTable.columns[10], innerText);


      this.setState({ 'ID_Table': Id });
      alert("ID = " + Id);
   }
   render() {
      const { data } = this.state;
      //<a>https://reactjsexample.com/a-lightweight-and-extendable-datagrid-for-react/</a>




      return (
         <div>
            <center><strong>ReactTable</strong></center>
            <hr />
            <br />
            <center>
               <table className='Ves_table' rules="rows" >
                  <tbody>
                     <tr>
                        <td>4</td>
                        <td onClick={this.ON_Click} id='41' className='td_yw'>4</td>
                        <td onClick={this.ON_Click} id='42' className='td_y'>3</td>
                        <td onClick={this.ON_Click} id='43' className='td_y'>2</td>
                        <td onClick={this.ON_Click} id='44' className='td_rw'>4</td>
                     </tr>
                     <tr>
                        <td>3</td>
                        <td onClick={this.ON_Click} id='31' className='td_yw'>1</td>
                        <td onClick={this.ON_Click} id='32' className='td_yw'>3</td>
                        <td onClick={this.ON_Click} id='33' className='td_yw'>1</td>
                        <td onClick={this.ON_Click} id='34' className='td_y'>3</td>
                     </tr>
                     <tr>
                        <td>2</td>
                        <td onClick={this.ON_Click} id='21' className='td_gw'>2</td>
                        <td onClick={this.ON_Click} id='22' className='td_gw'></td>
                        <td onClick={this.ON_Click} id='23' className='td_yw'>4</td>
                        <td onClick={this.ON_Click} id='24' className='td_y'></td>
                     </tr>
                     <tr>
                        <td>1</td>
                        <td onClick={this.ON_Click} id='11' className='td_g'>1</td>
                        <td onClick={this.ON_Click} id='12' className='td_gw'>2</td>
                        <td onClick={this.ON_Click} id='13' className='td_yw'>1</td>
                        <td onClick={this.ON_Click} id='14' className='td_yw'>1</td>
                     </tr>
                     <tr>
                        <th></th>
                        <th>1</th>
                        <th>2</th>
                        <th>3</th>
                        <th>4</th>
                     </tr>
                  </tbody>
               </table>
            </center>
            <br />
            <hr />
            <ReactTable id="ReactTable"
               ref="reactTable"
               
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
                  },
                  {
                     Header: "Частотность",
                     accessor: "F",
                     id:"Col_F",
                     ref:"Col_F"
                  },
                  {
                     Header: "Важность",
                     accessor: "M",
                  }
               ]}
               
               defaultPageSize={10}

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
         </div>
      );
   }
}
export default MainTable_Save2;
