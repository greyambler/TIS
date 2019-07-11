import React, { Component, PropTypes } from 'react';
import W_head from '../controls/w_head.jsx';
import W_headDate from '../controls/w_headDate.jsx';

//import W_headFilter from './w_headFilter.jsx';
//import moment from 'moment';

import W_chart from './w_chart.jsx';
import W_charts from './w_charts.jsx';
import W_table from './w_table.jsx';
import W_table_Norms from '../settingsTabl/w_table.jsx';

import { Link } from "react-router-dom";
import {
   Delete_Item_Filter,
   get_Date_Filter, get_Date, GetDatFromColChart,GetFilterData_Equip,
   GetDatFromErrorEqv, GetFilterData_Month, IsExist_Filter
} from '../../core/core_Function.jsx';

export default class w_main_table extends Component {
   constructor(props) {
      super(props);
      this.tick = this.tick.bind(this);
      this.state = {
         Object: null,
         Rss: this.props.RssDate,
         isExistError: false,

         Is_LocalData: false,
         n_Equip: null,
         filterCurent: Array(),
         typeChart: "month",
      }
   }
   componentDidMount() {
      this.tick();
      //this.timerID = setInterval(() => this.tick(), 30000);
   }
   updateData = ({ startDate, endDate }) => {
      this.props.updateData({ startDate, endDate });
      this.setState({ Is_LocalData: false });
      this.setState({ filterCurent: Array() });
   }

   componentDidUpdate(prevProps) {
      if (this.props.RssDate != prevProps.RssDate) {
         this.setState({ Rss: this.props.RssDate }, this.tick);
      }
   }

   async tick() {
      let rss = this.state.Rss;
      var myRequest = new Request(rss);

      try {
         var response = await fetch(myRequest,
            {
               method: 'GET',
               headers:
               {
                  'Accept': 'application/json',
               },
            }
         );
         if (response.ok) {
            const Jsons = await response.json();
            this.setState({ Object: Jsons });
         }
         else {
            throw Error(response.statusText);
         }
         this.setState({ isExistError: false })
      }
      catch (error) {
         this.setState({ isExistError: true })
         console.log(error);
      }
   }
   updateType = (TypeChart) => {
      this.setState({ typeChart: TypeChart });
   }

   updateEquip = (N_Equip) => {
      if (this.state.Object != null) {
         this.setState({ Is_LocalData: true });
         if (!IsExist_Filter(this.state.filterCurent, 'по устройству')) {
            this.setState({ n_Equip: N_Equip });
            this.state.filterCurent[this.state.filterCurent.length] = 'по устройству';
            this.setState({ filterCurent: this.state.filterCurent });
         }
      }
   }
   deleteFilet = (N_Text) => {
      let newfilterCurent = Delete_Item_Filter(this.state.filterCurent, N_Text);
      switch (N_Text) {
         case 'по устройству':
            this.setState({ n_Equip: null, filterCurent: newfilterCurent });
            break;
         case 'по кассе':
            this.setState({ n_Kassa: null, filterCurent: newfilterCurent });
            break;
         case 'по АЗК':
            this.setState({ n_AZS: null, filterCurent: newfilterCurent });
            break;
         case 'по коду ошибки':
            this.setState({ n_Code: null, filterCurent: newfilterCurent });
            break;
         case 'по месяцу':
            this.setState({ n_Month: null, filterCurent: newfilterCurent });
            break;
         default:
            break;
      }
   }

   render() {
      let _dataTable = null;
      let _dataTable_Normales = null;

      if (this.state.Object != null) {
         //_dataTable = GetDatFromErrorEqv(this.state.Object.incidents);
         _dataTable = this.state.Object.incidents;
         _dataTable_Normales = this.state.Object.normales;


         if (this.state.Is_LocalData) {
            if (this.state.n_Equip != null) {
               _dataTable = GetFilterData_Equip(_dataTable, this.state.n_Equip);
            }


         }
      }
      let err = null;
      if (this.state.isExistError) {
         err = 'Ошибка! Сервер не ответил!';
      }
      return (
         <div>
            <table id='table_main' name='table_main'>
               <tbody>
                  <tr>
                     {this.state.isExistError ? (
                        <W_head header={err} color='red' />
                     ) : (
                           <W_head header={this.props.header} />
                        )
                     }
                     <th rowSpan='3' width='65px'>
                        <Link to="/">
                           <img src={'../images/Library.ico'} className='ICO_Link' />
                        </Link>
                     </th>
                  </tr>
                  <tr>
                     <W_headDate updateData={this.updateData}
                        startDate={this.props.startDate} endDate={this.props.endDate}
                        isDisable={false} />
                  </tr>
               </tbody>
            </table>

            <hr /><hr />

            <table>
               <tbody>
                  {_dataTable != null &&
                     <W_charts Data={_dataTable}
                        w_Width={this.props.w_Width}
                        isLegend={true}

                        updateEquip={this.updateEquip}
                        filterCurent={this.state.filterCurent}

                        deleteFilet={this.deleteFilet}

                        updateType={this.updateType}
                        typeChart={this.state.typeChart}

                        NeedCode='211'
                     />
                  }
               </tbody>
            </table>
            <hr /><hr />
            <table>
               <tbody>
                  <tr>
                     <td>
                        {_dataTable != null &&
                           <W_table Data={_dataTable} w_Width={this.props.w_Width} typeChart={this.state.typeChart} />
                        }
                     </td>
                  </tr>
               </tbody>
            </table>

            <hr /><hr />
            <table>
               <tbody>
                  <tr>
                     <td>
                        {_dataTable_Normales != null &&
                           <W_table_Norms Data={_dataTable_Normales} w_Width={this.props.w_Width} />
                        }
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      );
   }
}
