import React, { Component, PropTypes } from 'react';
import W_head from '../controls/w_head.jsx';
import W_headDate from '../controls/w_headDate.jsx';


import W_charts from './w_charts.jsx';
import W_table from './w_table.jsx';
import W_table_Norms from '../settingsTabl/w_table.jsx';
import W_table_incid_All from './w_table_incid_All.jsx';

import { Link } from "react-router-dom";
import moment from 'moment';

import { Dropdown, Header, Icon } from 'semantic-ui-react'

import {
   Delete_Item_Filter,
   get_Date_Filter, get_Date, GetDatFromColChart,
   GetFilterData_Cashir, GetFilterData_Kassa, GetFilterData_AZS, GetFilterData_Equip,
   GetFilterData_CODE, GetFilterData_Month, IsExist_Filter, GetMassivComboBox_Normals
} from '../../core/core_Function.jsx';

export default class w_main_table extends Component {
   constructor(props) {
      super(props);
      this.tick = this.tick.bind(this);
      this.SetNormal = this.SetNormal.bind(this);
      this.SetRegion = this.SetRegion.bind(this);
      
      this.state = {
         Object: null,
         Object_Two: null,
         Rss: this.props.RssDate,
         Rss_Two: this.props.RssDate_Two,
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
         mass: this.props.regions,
         /*
         mass: [
            { key: 1, text: '77', value: 77, content: 'Москва' },
            { key: 2, text: '23', value: 23, content: 'Краснодарский край' },
            { key: 3, text: '01', value: 1, content: 'Республика Адыгея' },
            { key: 4, text: '02', value: 2, content: 'Республика Башкортостан' },
         ],
         */

         SelectValueNormals: 0,
      }
   }
   componentDidMount() {
      this.tick();
      this.tick_Two();
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
      if (this.props.regions != prevProps.regions) {
         this.setState({ mass: this.props.regions });
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
   async tick_Two() {
      if (this.state.Rss_Two != undefined) {
         let rss = this.state.Rss_Two;
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
               this.setState({ Object_Two: Jsons });
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

   updateEquip = (N_Equip) => {
      if (this.state.Object != null) {
         this.setState({ Is_LocalData: true, typeChart: "cashir" });
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
   SetNormal(ev) {
      try {
         if (ev != null && ev.data != null) {
            this.setState({ SelectValueNormals: ev.data.value });
         }
      } catch (error) {
      }
   }
   SetRegion(ev) {
      try {
         if (ev != null && ev.data != null) {
            let NEW_REGION = ev.data.value;
            this.props.updateStartRegion({ NEW_REGION });
         }
      } catch (error) {
      }
   }

   render() {
      let _dataTable = null;
      let _dataTable_Normales = null;
      let _dataTable_33_211 = null;
      let Mass = null;

      if (this.state.Object_Two != null) {
         _dataTable_33_211 = this.state.Object_Two.incidents;
      }

      if (this.state.Object != null) {
         _dataTable = this.state.Object.incidents

         _dataTable_Normales = this.state.Object.normales;



         if (this.state.Is_LocalData) {
            if (this.state.n_Equip != null) {
               _dataTable = GetFilterData_Equip(_dataTable, this.state.n_Equip);
            }
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
      if (this.props.NeedCode == '191') {
         Mass = GetMassivComboBox_Normals(_dataTable_Normales);
      }


      let err = null;
      if (this.state.isExistError) {
         err = 'Ошибка! Сервер не ответил!';
      }
      let Dropdown_Def = 0;
      if (this.state.mass != null) {
         Dropdown_Def = Number(this.state.mass[0].text);
         if (this.props.start_region != null) {
            Dropdown_Def = Number(this.props.start_region);
         }

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
                     <>
                        <table>
                           <tbody>
                              <tr>
                                 <td className='td_Region'>
                                    <div className='div_Region'>Регион {' '}
                                       <Dropdown
                                          inline
                                          defaultValue={Dropdown_Def}
                                          placeholder={Dropdown_Def}
                                          options={this.state.mass}
                                          onChange={(ev, data) => { this.SetRegion({ ev, data }) }}
                                       />
                                    </div>
                                 </td>
                                 {this.props.NeedCode == '191' && Mass != null && this.state.typeChart == "month" &&
                                    <td className='td_Norm'>
                                       <div className='div_Norm'>Нормали {' '}
                                          <Dropdown
                                             inline
                                             options={Mass}
                                             placeholder={Mass[0].text}
                                             defaultValue={Mass[0].text}
                                             onChange={(ev, data) => { this.SetNormal({ ev, data }) }}
                                          />
                                       </div>
                                    </td>
                                 }

                                 {/*
                                 <td className='td_Region'>Регион</td>


                                 <td className='td_Region'>
                                    <Dropdown
                                       placeholder={this.state.mass[0].text}
                                       search selection
                                       options={this.state.mass} compact />
                                 </td>
 /*}
                                 <td className='td_Region'>
                                    <Header>
                                       <Icon />
                                       <Header.Content>
                                          Регион{' '}
                                          <Dropdown id="Dropdown_Norm"
                                             inline
                                             defaultValue={this.state.mass[0].text}
                                             placeholder={this.state.mass[0].text}
                                             options={this.state.mass} />
                                       </Header.Content>
                                    </Header>
                                 </td>
                                 {this.props.NeedCode == '191' && Mass != null && this.state.typeChart == "month" &&
                                    <td className='td_Norm'>
                                       <Header>
                                          <Icon />
                                          <Header.Content>
                                             Нормали{' '}
                                             <Dropdown id="Dropdown_Norm"
                                                inline
                                                header='Нормали'
                                                options={Mass}
                                                defaultValue={Mass[0].text}
                                                onChange={(ev, data) => { this.SetNormal({ ev, data }) }}
                                             />
                                          </Header.Content>
                                       </Header>
                                    </td>
                                 }

                                 {/*this.props.NeedCode == '191' && Mass != null && this.state.typeChart == "month" &&
                                    <td className='td_Region'>
                                       <Dropdown
                                          placeholder={Mass[0].text}
                                          search selection
                                          options={Mass}
                                          onChange={(ev, data) => { this.SetNormal({ ev, data }) }}
                                       />
                                    </td>
                                 */}

                                 <W_headDate updateData={this.updateData}
                                    startDate={this.props.startDate} endDate={this.props.endDate}
                                    isDisable={false} />

                              </tr>
                           </tbody>
                        </table>
                     </>

                  </tr>
               </tbody>
            </table>

            <hr /><hr />

            <table>
               <tbody>
                  {_dataTable != null &&
                     <W_charts
                        Data={_dataTable}
                        Data_Norm={_dataTable_Normales}
                        Data_Two={_dataTable_33_211}

                        startDate={this.props.startDate}
                        endDate={this.props.endDate}


                        w_Width={this.props.w_Width}

                        isLegend={true}

                        updateCashir={this.updateCashir}
                        updateKass={this.updateKass}
                        updateAZS={this.updateAZS}
                        updateCode={this.updateCode}
                        updateMonth={this.updateMonth}

                        updateEquip={this.updateEquip}

                        filterCurent={this.state.filterCurent}

                        deleteFilet={this.deleteFilet}

                        updateType={this.updateType}

                        NeedCode={this.props.NeedCode}
                        typeChart={this.state.typeChart}

                        SelectValueNormals={this.state.SelectValueNormals}
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
                           <W_table Data={_dataTable} w_Width={this.props.w_Width} NeedCode={this.props.NeedCode} />
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
                        {_dataTable != null &&
                           <W_table_incid_All Data={_dataTable} w_Width={this.props.w_Width} />
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