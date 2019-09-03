import _ from 'lodash'
import React, { Component, PropTypes } from 'react';
import ReactTable from "react-table";

import ReactExport from "react-data-export";
import Moment from 'moment';

import { Rss_BackInc, get_Date, Get_ColumnsForTable } from '../../core/core_Function.jsx';




const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

export default class w_table_modal extends Component {
   constructor(props) {
      super(props);
      this.Filter_DataExcel = this.Filter_DataExcel.bind(this);
      this.get_DatFilters = this.get_DatFilters.bind(this);

      //this.tick = this.tick.bind(this);

      this.state = {
         Data: this.props.Data,
         ID_ROW: this.props.ID_ROW,
         Excel_Data: this.props.Data,
         Message_ID: "",
         Data_Mess: null,
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


   closeConfigShow = (closeOnEscape, closeOnDimmerClick) => () => {
      this.setState({ closeOnEscape, closeOnDimmerClick, open: true })
   }
   render() {

      if (this.state.Data != null) {
         let ArCol = new Array();
         ArCol = Get_ColumnsForTable(this.state.Data[0])
         return (
            <div>
               <table>
                  <tbody>
                     <tr>
                        <td width="100%" align="right">
                           <ExcelFile element={<button><img src={'../images/Office Excel.ico'} width='25' /></button>}>
                              <ExcelSheet data={this.state.Excel_Data} name="Employees">

                                 <ExcelColumn label="Дата" value={(col) =>
                                    Moment(col.EventTime).local('ru').format('DD.MM.YYYY hh:mm:ss')} />

                                 <ExcelColumn label="EventName" value="EventName" />
                                 <ExcelColumn label="EventType" value="EventType" />                                 
                                 <ExcelColumn label="LineOrder" value="LineOrder" />
                                 <ExcelColumn label="ObjectNum" value="ObjectNum" />
                                 <ExcelColumn label="LogFileName" value="LogFileName" />
                                 <ExcelColumn label="EventFields" value="EventFields" />

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
                                    Header: "События",
                                    columns: [
                                       {
                                          id: "EventTime",
                                          Header: "Дата и время",
                                          accessor: d => {
                                          return Moment(d.Datetime)
                                             .local('ru')
                                             .format('DD.MM.YYYY hh:mm:ss')
                                       },
                                       },
                                       {
                                          Header: "Наименование события",
                                          accessor: "EventName"
                                       },
                                       {
                                          Header: "Тип события",
                                          accessor: "EventType"
                                       },
                                       {
                                          Header: "LineOrder",
                                          accessor: "LineOrder"
                                       },
                                       {
                                          Header: "Номер АЗК",
                                          accessor: "ObjectNum"
                                       },

                                       {
                                          Header: "Источник данных",
                                          accessor: "LogFileName"
                                       },
                                       {
                                          Header: "Описание",
                                          accessor: "EventFields"
                                       },

                                    ]
                                 }
                              ]}
                              defaultPageSize={20}

                              filterable={true}
                              show={false}
                              nextText={'>    >'}
                              previousText={'<    <'}
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
      } else {
         return <div>
            <h3>Нет данных</h3>
         </div>
      }
   }
}

