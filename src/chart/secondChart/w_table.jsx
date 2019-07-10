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
      this.Filter_DataExcel = this.Filter_DataExcel.bind(this);
      this.get_DatFilters = this.get_DatFilters.bind(this);

      this.state = {
         Data: this.props.Data,
         Excel_Data: this.props.Data,
      }
   }
   componentDidUpdate(prevProps) {
      if (this.props.Data != prevProps.Data) {
         this.setState({ Data: this.props.Data });
         this.setState({ Excel_Data: this.props.Data });
      }
   }
   Filter_DataExcel(e) {
      let _excel_Data = this.props.Data;
      for (const itemF of e) {
         _excel_Data = this.get_DatFilters(_excel_Data, itemF);
      }
      this.setState({ Excel_Data: _excel_Data });
   }

   get_DatFilters(_E_Data, itemF) {
      let _return_Data = new Array();
      if (itemF != null) {
         let index = 0;
         for (const iterator of _E_Data) {
            switch (itemF.id) {
               case 'Datetime':
                  {
                     if (iterator.Datetime.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'EVENT_TYPE':
                  {
                     if (iterator.EVENT_TYPE.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'SHOP_NUM':
                  {
                     if (iterator.SHOP_NUM.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'KASS_NUM':
                  {
                     if (iterator.KASS_NUM.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }

               case 'SHIFT_NUM':
                  {
                     if (iterator.SHIFT_NUM.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }

               case 'CASHIER_ID':
                  {
                     if (iterator.CASHIER_ID.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'EVENT_NAME':
                  {
                     if (iterator.EVENT_NAME.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'Duration':
                  {
                     if (iterator.Duration.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'Key':
                  {
                     if (iterator.Key.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'DateKey':
                  {
                     if (iterator.DateKey.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'TimeKey':
                  {
                     if (iterator.TimeKey.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'SHOP_NUM':
                  {
                     if (iterator.SHOP_NUM.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'KASS_NUM':
                  {
                     if (iterator.KASS_NUM.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'CASHIER_ID':
                  {
                     if (iterator.CASHIER_ID.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'Duration':
                  {
                     if (iterator.Duration.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'ratedFreq':
                  {
                     if (iterator.ratedFreq.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'F':
                  {
                     if (iterator.F.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'M':
                  {
                     if (iterator.M.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'Rang':
                  {
                     if (iterator.Rang.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'М2':
                  {
                     if (iterator.М2.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               case 'Rang2_bus':
                  {
                     if (iterator.Rang2_bus.toString().toLowerCase().startsWith(itemF.value.toLowerCase())) {
                        _return_Data[index] = iterator;
                        index++;
                     }
                     break;
                  }
               default:
                  break;
            }
         }
      }
      return _return_Data;
   }

   render() {
      return (
         <div>
            <table>
               <tbody>
                  <tr>
                     <td width="100%" align="right">
                        <ExcelFile element={<button><img src={'../images/Office Excel.ico'} width='25' /></button>}>
                           <ExcelSheet data={this.state.Excel_Data} name="Employees">
                              <ExcelColumn label="Дата" value="month" />
                              <ExcelColumn label="Код устройства" value="DEVICE_TYPE" />
                              <ExcelColumn label="Название устройства" value="equip" />
                              <ExcelColumn label="Код cобытия" value="EVENT_TYPE" />
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
                                       id: "month",
                                       Header: "Дата",
                                       accessor: "month"
                                    },
                                    {
                                       Header: "Код устройства",
                                       accessor: "DEVICE_TYPE"
                                    },
                                    {
                                       Header: "Название устройства",
                                       accessor: "equip"
                                    },
                                    {
                                       Header: "Код cобытия",
                                       accessor: "EVENT_TYPE"
                                    }
                                 ]
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
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      );
   }
}