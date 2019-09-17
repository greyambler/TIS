import React, { Component, PropTypes } from 'react';
import W_head from '../controls/w_head_link.jsx';
import W_headDate from '../controls/w_headDate.jsx';
import W_charts from './w_charts.jsx';
import { Link } from "react-router-dom";
import moment from 'moment';

import { Dropdown, Header, Icon } from 'semantic-ui-react'

import { get_Date_Filter, get_Date, GetDatFromColChart, GetMassivComboBox_Normals } from '../../core/core_Function.jsx';

export default class w_main_Icon extends Component {
   constructor(props) {
      super(props);
      this.tick = this.tick.bind(this);
      this.tick_Two = this.tick_Two.bind(this);
      this.SetNormal = this.SetNormal.bind(this);

      this.state = {
         Object: null,
         Object_Two: null,
         Rss: this.props.RssDate,
         Rss_Two: this.props.RssDate_Two,
         isExistError: false,

         mass: this.props.regions,

         /*
         mass: [
            { key: 1, text: '77', value: 77, content: 'Москва' },
            { key: 2, text: '23', value: 23, content: 'Краснодарский край' },
            { key: 3, text: '01', value: 1, content: 'Республика Адыгея' },
            { key: 4, text: '02', value: 2, content: 'Республика Башкортостан' },
         ],*/

         SelectValueNormals: 0,
      }
   }
   componentDidMount() {
      this.tick();
      this.tick_Two();
      //this.timerID = setInterval(() => this.tick(), 30000);
   }
   componentDidUpdate(prevProps) {
      if (this.props.RssDate != prevProps.RssDate) {
         this.setState({ Rss: this.props.RssDate }, this.tick);
      }
      if (this.props.RssDate_Two != prevProps.RssDate_Two) {
         this.setState({ Rss_Two: this.props.RssDate_Two }, this.tick_Two);
      }
      if (this.props.regions != prevProps.regions) {
         this.setState({ mass: this.props.regions });
      }
   }
   updateData = ({ startDate, endDate }) => {
      this.props.updateData({ startDate, endDate });
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
            this.props.updateStartRegion({NEW_REGION});
         }
      } catch (error) {
      }
   }
   render() {
      let _dataTable = null;
      let _dataTable_Norm = null;
      let _dataTable_33_211 = null;

      if (this.state.Object_Two != null) {
         _dataTable_33_211 = this.state.Object_Two.incidents;
      }

      if (this.state.Object != null) {
         _dataTable = this.state.Object.incidents;
         _dataTable_Norm = this.state.Object.normales;
      }



      let err = null;
      if (this.state.isExistError) {
         err = 'Ошибка! Сервер не ответил!';
      }

      let _AhrefBack = '/ChFirst';
      let ChooSeChart = 'azs'
      let Mass = null;
      switch (this.props.NeedCode) {
         case '191': {
            _AhrefBack = '/ChFirst_191';
            //ChooSeChart = 'date'
            ChooSeChart = 'month'
            Mass = GetMassivComboBox_Normals(_dataTable_Norm);
         } break;
         case '122': {
            _AhrefBack = '/ChFirst_122';
            ChooSeChart = 'azs'
         } break;
         case '33': {
            _AhrefBack = '/ChFirst_33';
            ChooSeChart = 'month'//'kass'
         } break;
         case '211': {
            _AhrefBack = '/ChFirst_211';
            //ChooSeChart = 'date'
            ChooSeChart = 'month'
         } break;
         default:
            {
               _AhrefBack = '/ChFirst';
               ChooSeChart = 'azs'
            } break;
      }
      let Dropdown_Def = 0;
      if (this.state.mass != null) {
         Dropdown_Def = Number(this.state.mass[0].text);
         if (this.props.start_region != null) {
            Dropdown_Def = Number(this.props.start_region);
         }

      }
      return (
         <table>
            <tbody>
               <tr>
                  {this.state.isExistError
                     ?
                     (<W_head header={err} color='red' AhrefBack={_AhrefBack} />)
                     :
                     (
                        <W_head header={this.props.header} tooltip_text={this.props.tooltip_text} AhrefBack={_AhrefBack}
                        start_region={this.props.start_region} />
                     )
                  }
               </tr>
               <tr>
                  <>
                     <table>
                        <tbody>
                           <tr>
                              {this.state.mass != null &&
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
                              }
                              {this.props.NeedCode == '191' &&
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

                              {/*this.props.NeedCode == '191' &&
                                 <td className='td_Region'>
                                    <Dropdown
                                       placeholder={Mass[0].text}
                                       search selection
                                       options={Mass} onChange
                                       onChange={(ev, data) => { this.SetNormal({ ev, data }) }}
                                    />
                                 </td>
                              
                              this.props.NeedCode == '191' &&
                                 <td className='td_Norm'>
                                    <Header>
                                       <Icon/>
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
                              */}
                              <W_headDate updateData={this.updateData}
                                 startDate={this.props.startDate}
                                 endDate={this.props.endDate}
                                 isDisable={false}
                              />

                           </tr>
                        </tbody>
                     </table>
                  </>

               </tr>
               {_dataTable != null &&
                  <W_charts
                     Data={_dataTable}
                     Data_Norm={_dataTable_Norm}
                     Data_Two={_dataTable_33_211}

                     startDate={this.props.startDate}
                     endDate={this.props.endDate}

                     w_Width={this.props.w_Width}
                     isLegend={false}

                     NeedCode={this.props.NeedCode}
                     typeChart={ChooSeChart}

                     SelectValueNormals={this.state.SelectValueNormals}
                  />
               }
            </tbody>
         </table>
      );
   }
}
