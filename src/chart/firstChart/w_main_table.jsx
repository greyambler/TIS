import React, { Component, PropTypes } from 'react';
import W_head from '../controls/w_head.jsx';
import W_headDate from '../controls/w_headDate.jsx';


import W_charts from './w_charts.jsx';
import W_table from './w_table.jsx';
import W_table_Norms from '../settingsTabl/w_table.jsx';

import { Link } from "react-router-dom";
import moment from 'moment';

import {
   Delete_Item_Filter,
   get_Date_Filter, get_Date, GetDatFromColChart,
   GetFilterData_Cashir, GetFilterData_Kassa, GetFilterData_AZS,
   GetFilterData_CODE, GetFilterData_Month, IsExist_Filter
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
         n_Cashir: null,
         n_Kassa: null,
         n_AZS: null,
         n_Code: null,
         n_Month: null,
         LocalData: null,
         filterCurent: Array(),
         typeChart: "cashir",
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
   updateCashir = (N_Cashir) => {
      if (this.state.Object != null) {
         this.setState({ Is_LocalData: true });
         if (!IsExist_Filter(this.state.filterCurent, 'по кассиру')) {
            this.setState({ n_Cashir: N_Cashir });
            this.state.filterCurent[this.state.filterCurent.length] = 'по кассиру';
            this.setState({ filterCurent: this.state.filterCurent });
         }
      }
   }
   updateKass = (N_Kassa) => {
      if (this.state.Object != null) {
         this.setState({ Is_LocalData: true, typeChart: "cashir" });
         if (!IsExist_Filter(this.state.filterCurent, 'по кассе')) {
            this.setState({ n_Kassa: N_Kassa });
            this.state.filterCurent[this.state.filterCurent.length] = 'по кассе';
            this.setState({ filterCurent: this.state.filterCurent });
         }
      }
   }
   updateAZS = (N_AZS) => {
      if (this.state.Object != null) {
         this.setState({ Is_LocalData: true, typeChart: "cashir" });
         if (!IsExist_Filter(this.state.filterCurent, 'по АЗК')) {
            this.setState({ n_AZS: N_AZS });
            this.state.filterCurent[this.state.filterCurent.length] = 'по АЗК';
            this.setState({ filterCurent: this.state.filterCurent });
         }
      }
   }
   updateCode = (N_Code) => {
      if (this.state.Object != null) {
         this.setState({ Is_LocalData: true, typeChart: "cashir" });
         if (!IsExist_Filter(this.state.filterCurent, 'по коду ошибки')) {
            this.setState({ n_Code: N_Code });
            this.state.filterCurent[this.state.filterCurent.length] = 'по коду ошибки';
            this.setState({ filterCurent: this.state.filterCurent });
         }
      }
   }
   updateMonth = (N_Month) => {
      if (this.state.Object != null) {
         this.setState({ Is_LocalData: true, typeChart: "cashir" });
         if (!IsExist_Filter(this.state.filterCurent, 'по месяцу')) {
            this.setState({ n_Month: N_Month });
            this.state.filterCurent[this.state.filterCurent.length] = 'по месяцу';
            this.setState({ filterCurent: this.state.filterCurent });
         }
      }
   }
   deleteFilet = (N_Text) => {
      let newfilterCurent = Delete_Item_Filter(this.state.filterCurent, N_Text);
      switch (N_Text) {
         case 'по кассиру':
            this.setState({ n_Cashir: null, filterCurent: newfilterCurent });
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
         _dataTable = this.state.Object.incidents

         _dataTable_Normales = this.state.Object.normales;



         if (this.state.Is_LocalData) {
            if (this.state.n_Cashir != null) {
               _dataTable = GetFilterData_Cashir(_dataTable, this.state.n_Cashir);
            }
            if (this.state.n_Kassa != null) {
               _dataTable = GetFilterData_Kassa(_dataTable, this.state.n_Kassa);
            }
            if (this.state.n_AZS != null) {
               _dataTable = GetFilterData_AZS(_dataTable, this.state.n_AZS);
            }
            if (this.state.n_Code != null) {
               _dataTable = GetFilterData_CODE(_dataTable, this.state.n_Code);
            }
            if (this.state.n_Month != null) {
               _dataTable = GetFilterData_Month(_dataTable, this.state.n_Month);
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
                     <W_charts Data={_dataTable} w_Width={this.props.w_Width}

                        isLegend={true}

                        updateCashir={this.updateCashir}
                        updateKass={this.updateKass}
                        updateAZS={this.updateAZS}
                        updateCode={this.updateCode}
                        updateMonth={this.updateMonth}
                        filterCurent={this.state.filterCurent}

                        deleteFilet={this.deleteFilet}

                        updateType={this.updateType}
                        typeChart={this.state.typeChart}

                        NeedCode={this.props.NeedCode}
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
                           <W_table Data={_dataTable} w_Width={this.props.w_Width} NeedCode={this.props.NeedCode}/>
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