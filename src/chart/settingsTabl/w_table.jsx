import React, { Component, PropTypes } from 'react';
import ReactTable from "react-table";

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
                  </tr>

                  <tr>
                     <td>
                        <ReactTable
                           onFilteredChange={this.Filter_DataExcel}
                           data={this.state.Data}
                           columns={[
                              {
                                 Header: "",
                                 columns: [
                                    {
                                       Header: "case",
                                       accessor: "case"
                                    },
                                    {
                                       Header: "param_name",
                                       accessor: "param_name"
                                    },
                                    {
                                       Header: "period",
                                       accessor: "period"
                                    },
                                    {
                                       Header: "region",
                                       accessor: "region"
                                    },
                                    {
                                       Header: "ObjectNum",
                                       accessor: "ObjectNum"
                                    },
                                    {
                                       Header: "ObjectName",
                                       accessor: "ObjectName"
                                    },
                                    {
                                       Header: "KASS_NUM",
                                       accessor: "KASS_NUM"
                                    },
                                    {
                                       Header: "DEVICE_TYPE",
                                       accessor: "DEVICE_TYPE"
                                    },
                                    {
                                       Header: "DEVICE_NAME",
                                       accessor: "DEVICE_NAME"
                                    },
                                    {
                                       Header: "DEVICE_NAME",
                                       accessor: "DEVICE_NAME"
                                    },
                                    {
                                       Header: "CASHIER_ID",
                                       accessor: "CASHIER_ID"
                                    },
                                    {
                                       Header: "CASHIER_NAME",
                                       accessor: "CASHIER_NAME"
                                    },
                                    {
                                       Header: "NormStat",
                                       accessor: "NormStat"
                                    },
                                    {
                                       Header: "NormExp",
                                       accessor: "NormExp"
                                    },
                                    {
                                       Header: "AddDate",
                                       accessor: "AddDate"
                                    },
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
               </tbody>
            </table>
         </div>
      );
   }
}


