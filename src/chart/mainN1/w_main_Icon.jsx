import React, { Component, PropTypes } from 'react';
import W_head from '../controls/w_head_link.jsx';
import W_headDate from '../controls/w_headDate.jsx';
import W_chartDolay from './w_chartDolay.jsx';
import W_chartDolayProc from './w_chartDolayProc.jsx';
import W_chartYear from './w_chartYear.jsx';
import W_chartYear_Sing from './w_chartYear_Sing.jsx';
import { Rss_TOP5, RssIncidentRegions, Get_RSS, RssIncident, createGuid } from '../../core/core_Function.jsx';
import { Dropdown, Header, Icon } from 'semantic-ui-react'


import moment from 'moment';
function IsNot(n, _date) {
   for (const iterator of n) {
      if (iterator.ent_time_grp == _date) {
         return false;
      }
   }
   return true;
}

export default class w_main_Icon extends Component {
   constructor(props) {
      super(props);
      this.SetRegion = this.SetRegion.bind(this);
      this.state = {
         isExistError: false,
         Regions_Inc: null,
         Regions_IncPer: null,
         Year_Incidents: null,
         mass: this.props.regions,
         start_region: 0,
      }
   }
   componentDidMount() {
      this.tick_R_Inc();
      this.tick_Top();
      this.tick_Year();
   }
   /*  */
   componentDidUpdate(prevProps) {

      if (this.props.regions != prevProps.regions) {
         this.setState({ mass: this.props.regions });
      }
   }


   async tick_R_Inc() {
      let end = moment();
      let start = moment().subtract(364, 'day');
      let rss_datу = Get_RSS(RssIncidentRegions, start, end);
      let rss = rss_datу;
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
            this.setState({ Regions_Inc: Jsons.regions_inc });
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
   async tick_Top() {
      let end = moment();
      let start = moment().subtract(364, 'day');
      let rss_datу = Get_RSS(Rss_TOP5, start, end);
      let rss = rss_datу;

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
            this.setState({ Regions_IncPer: Jsons.regions_inc_per });
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

   async tick_Year(regionNeed) {
      let end = moment();
      let start = moment().subtract(364, 'day');
      let rss_datу = Get_RSS(RssIncidentRegions, start, end, null, regionNeed, "day");
      let rss = rss_datу;

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
            this.setState({ Year_Incidents: Jsons.regions_inc });
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
   /* */
   SetRegion(ev) {
      try {
         if (ev != null && ev.data != null) {
            let NEW_REGION = ev.data.value;
            this.setState({ start_region: NEW_REGION });
            this.tick_Year(NEW_REGION);
         }
      } catch (error) {
      }
   }

   render() {
      let err = null;
      if (this.state.isExistError) {
         err = 'Ошибка! Сервер не ответил!';
      }
      let _header1 = 'Доля инцидентов по регионам';
      let _header2 = 'Распределение инцидентов месяцам';
      let _AhrefBack = '/Main_N';

      let Dropdown_Def = 0;
      if (this.state.mass != null) {
         Dropdown_Def = Number(this.state.mass[0].text);
         if (this.props.start_region != null) {
            Dropdown_Def = Number(this.props.start_region);
         }
      }

/*
      let N = this.state.Year_Incidents;
  if (N != null) {
         let n = new Array();
         for (const iterator of this.state.Year_Incidents) {
            if (IsNot(n, iterator.ent_time_grp)){
               n.push(iterator);
            }
         }
         N = n;
      }
*/

      return (
         <table>
            <tbody>
               <tr>
                  <td colSpan="2" width={this.props.w_Width} height="20">
                     <>
                        {/*  <table>
                           <tbody>
                              <tr>
                                 <W_headDate updateData={this.updateData}
                                    startDate={this.props.startDate}
                                    endDate={this.props.endDate}
                                    isDisable={false}
                                 />
                              </tr>
                           </tbody>
                        </table>*/}
                     </>
                  </td>
               </tr>
               <tr>
                  <td className='td_Top'>
                     <>
                        <table>
                           <tbody>
                              <tr>
                                 {this.state.isExistError
                                    ?
                                    (<W_head header={err} color='red' />)
                                    :
                                    (
                                       <W_head header={_header1} tooltip_text={this.props.tooltip_text} AhrefBack={_AhrefBack} />
                                    )
                                 }
                              </tr>
                              <tr>
                                 <td width={this.props.w_Width / 2}>
                                    <W_chartDolay
                                       startDate={this.props.startDate}
                                       endDate={this.props.endDate}
                                       w_Width={this.props.w_Width / 2}
                                       Regions_Inc={this.state.Regions_Inc}
                                       updateData={this.props.updateData}
                                       history={this.props.history}
                                    />
                                 </td>
                              </tr>


                              <tr>
                                 <td width={this.props.w_Width / 2}>
                                    <W_chartDolayProc
                                       startDate={this.props.startDate}
                                       endDate={this.props.endDate}
                                       w_Width={this.props.w_Width / 2}
                                       Regions_IncPer={this.state.Regions_IncPer}
                                       updateData={this.props.updateData}
                                       history={this.props.history}
                                    />
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </>
                  </td>


                  <td className='td_Top'>
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
                                 {this.state.isExistError
                                    ?
                                    (<W_head header={err} color='red' />)
                                    :
                                    (
                                       <W_head header={_header2} tooltip_text={this.props.tooltip_text} AhrefBack={_AhrefBack} />
                                    )
                                 }
                              </tr>

                              {/* <tr> className='div_Region'
                                 <td width={this.props.w_Width / 2}>
                                    <W_chartYear_Sing
                                       startDate={this.props.startDate}
                                       endDate={this.props.endDate}
                                       w_Width={this.props.w_Width / 2}
                                    />
                                 </td>
                              </tr>*/}
                              <tr>
                                 <td width={this.props.w_Width / 2} colSpan='2'>
                                    <W_chartYear
                                       startDate={this.props.startDate}
                                       endDate={this.props.endDate}
                                       w_Width={this.props.w_Width / 2}
                                       Year_Incidents={this.state.Year_Incidents}

                                       start_region={this.state.start_region}
                                       updateData={this.props.updateData}
                                       history={this.props.history}
                                    />
                                 </td>
                              </tr>
                           </tbody>
                        </table>
                     </>
                  </td>
               </tr>
            </tbody>
         </table>
      );
   }
}
