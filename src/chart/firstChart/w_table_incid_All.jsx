import React, { Component, PropTypes } from 'react';
import ReactTable from "react-table";
import { Get_ColumnsForTable } from '../../core/core_Function.jsx';
import ReactExport from "react-data-export";
import Moment from 'moment';

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;




export default class w_table_incid_All extends Component {
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
      let ArCol = new Array();
      let ExCol = "";
      if (this.state.Data != null) {
         ArCol = Get_ColumnsForTable(this.state.Data[0])
         /*
                  ExCol ='<ExcelFile element={<button><img src={"../images/Office Excel.ico"} width="25" /><br/></button>}><br/>' +
                  '<ExcelSheet data={this.state.Excel_Data} name="Employees"><br/>';
                  for (var key in this.state.Data[0]) {
                     ExCol = ExCol + "<ExcelColumn label='" + key + "' value='" + key + "' /><br/>";
                  }
                  ExCol = ExCol + '</ExcelSheet><br/>'+
                                 '</ExcelFile>';
                                 */
      }


      return (
         <div>
            <table>
               <tbody>
                  <tr>
                     <td width="100%" align="right">

                        <ExcelFile element={<button><img src={'../images/Office Excel.ico'} width='25' /></button>}>
                           <ExcelSheet data={this.state.Excel_Data} name="Employees">
                              <ExcelColumn label="Datetime" value="Datetime" />
                              <ExcelColumn label="EVENT_TYPE" value="EVENT_TYPE" />
                              <ExcelColumn label="SHOP_NUM" value="SHOP_NUM" />
                              <ExcelColumn label="KASS_NUM" value="KASS_NUM" />
                              <ExcelColumn label="SHIFT_NUM" value="SHIFT_NUM" />
                              <ExcelColumn label="CASHIER_ID" value="CASHIER_ID" />
                              <ExcelColumn label="EVENT_NAME" value="EVENT_NAME" />
                              <ExcelColumn label="DEVICE_TYPE" value="DEVICE_TYPE" />
                              <ExcelColumn label="DEVICE_NUM" value="DEVICE_NUM" />
                              <ExcelColumn label="RESULT" value="RESULT" />
                              <ExcelColumn label="COMMENT" value="COMMENT" />
                              <ExcelColumn label="Duration" value="Duration" />
                              <ExcelColumn label="Key" value="Key" />
                              <ExcelColumn label="DateKey" value="DateKey" />
                              <ExcelColumn label="TimeKey" value="TimeKey" />
                              <ExcelColumn label="ratedFreq" value="ratedFreq" />
                              <ExcelColumn label="F" value="F" />
                              <ExcelColumn label="M" value="M" />
                              <ExcelColumn label="Rang" value="Rang" />
                              <ExcelColumn label="М2" value="М2" />
                              <ExcelColumn label="Rang2_bus" value="Rang2_bus" />
                              <ExcelColumn label="AddDate" value="AddDate" />
                           </ExcelSheet>
                        </ExcelFile>
                     </td>
                  </tr>

                  <tr>
                     <td colSpan='2'>
                        <ReactTable
                           onFilteredChange={this.Filter_DataExcel}
                           data={this.state.Data}
                           columns={[
                              {
                                 Header: "incidents",
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


/*
                              <ExcelColumn label="Datetime" value="Datetime" />
                              <ExcelColumn label="EVENT_TYPE" value="EVENT_TYPE" />
                              <ExcelColumn label="SHOP_NUM" value="SHOP_NUM" />
                              <ExcelColumn label="KASS_NUM" value="KASS_NUM" />
                              <ExcelColumn label="SHIFT_NUM" value="SHIFT_NUM" />
                              <ExcelColumn label="CASHIER_ID" value="CASHIER_ID" />
                              <ExcelColumn label="EVENT_NAME" value="EVENT_NAME" />
                              <ExcelColumn label="DEVICE_TYPE" value="DEVICE_TYPE" />
                              <ExcelColumn label="DEVICE_NUM" value="DEVICE_NUM" />
                              <ExcelColumn label="RESULT" value="RESULT" />
                              <ExcelColumn label="COMMENT" value="COMMENT" />
                              <ExcelColumn label="Duration" value="Duration" />
                              <ExcelColumn label="Key" value="Key" />
                              <ExcelColumn label="DateKey" value="DateKey" />
                              <ExcelColumn label="TimeKey" value="TimeKey" />
                              <ExcelColumn label="ratedFreq" value="ratedFreq" />
                              <ExcelColumn label="F" value="F" />
                              <ExcelColumn label="M" value="M" />
                              <ExcelColumn label="Rang" value="Rang" />
                              <ExcelColumn label="М2" value="М2" />
                              <ExcelColumn label="Rang2_bus" value="Rang2_bus" />
                              <ExcelColumn label="AddDate" value="AddDate" />


*/