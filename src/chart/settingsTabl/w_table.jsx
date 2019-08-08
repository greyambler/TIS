import React, { Component, PropTypes } from 'react';
import ReactTable from "react-table";
import { Get_ColumnsForTable } from '../../core/core_Function.jsx';
import ReactExport from "react-data-export";
import Moment from 'moment';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;




export default class w_table extends Component {
   constructor(props) {
      super(props);
      this.state = {
         Data: this.props.Data,
         Excel_Data: this.props.Data,
      }
   }
   componentDidMount() {
      this.setState({ Data: this.props.Data });
   }
   componentDidUpdate(prevProps) {
      if (this.props.Data != prevProps.Data) {
         this.setState({ Data: this.props.Data });
         this.setState({ Excel_Data: this.props.Data });
      }
   }

   render() {
      let index = 0;
      let ArCol = new Array();

      if (this.state.Data != null) {
         ArCol = Get_ColumnsForTable(this.state.Data[0])
      }

      return (
         <div>
            <table>
               <tbody>
                  <tr>
                     <td width="100%" align="right">
                        <ExcelFile element={<button><img src={'../images/Office Excel.ico'} width='25' /></button>}>
                           <ExcelSheet data={this.state.Excel_Data} name="Employees">
                              <ExcelColumn label="case" value="case" />
                              <ExcelColumn label="param_name" value="param_name" />
                              <ExcelColumn label="period" value="period" />
                              <ExcelColumn label="region" value="region" />
                              <ExcelColumn label="ObjectNum" value="ObjectNum" />
                              <ExcelColumn label="ObjectName" value="ObjectName" />
                              <ExcelColumn label="KASS_NUM" value="KASS_NUM" />
                              <ExcelColumn label="DEVICE_TYPE" value="DEVICE_TYPE" />
                              <ExcelColumn label="DEVICE_NAME" value="DEVICE_NAME" />
                              <ExcelColumn label="CASHIER_ID" value="CASHIER_ID" />
                              <ExcelColumn label="CASHIER_NAME" value="CASHIER_NAME" />
                              <ExcelColumn label="NormStat" value="NormStat" />
                              <ExcelColumn label="NormExp" value="NormExp" />
                              <ExcelColumn label="AddDate" value="AddDate" />
                           </ExcelSheet>
                        </ExcelFile>
                     </td>
                  </tr><tr>
                     <td colSpan='2'>
                        <ReactTable
                           onFilteredChange={this.Filter_DataExcel}
                           data={this.state.Data}
                           columns={[
                              {
                                 Header: "normales",
                                 columns: ArCol
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
               </tbody>
            </table>
         </div>
      );
   }
}


