import React, { Component, PropTypes } from 'react';
import W_head from '../controls/w_head_link.jsx';
import W_headDate from '../controls/w_headDate.jsx';
import W_charts from './w_charts.jsx';
import { Link } from "react-router-dom";
import moment from 'moment';

import { get_Date_Filter, get_Date, GetDatFromColChart } from '../../core/core_Function.jsx';

export default class w_main_Icon extends Component {
   constructor(props) {
      super(props);
      this.tick = this.tick.bind(this);
      this.tick_Two = this.tick_Two.bind(this);
      this.state = {
         Object: null,
         Object_Two: null,
         Rss: this.props.RssDate,
         Rss_Two: this.props.RssDate_Two,
         isExistError: false,
      }
   }
   componentDidMount() {
      this.tick();
      this.tick_Two();
      //this.timerID = setInterval(() => this.tick(), 30000);
   }
   updateData = ({ startDate, endDate }) => {
      this.props.updateData({ startDate, endDate });
   }
   componentDidUpdate(prevProps) {
      if (this.props.RssDate != prevProps.RssDate) {
         this.setState({ Rss: this.props.RssDate }, this.tick);
      }
      if (this.props.RssDate_Two != prevProps.RssDate_Two) {
         this.setState({ Rss_Two: this.props.RssDate_Two }, this.tick_Two);
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

   render() {
      let _dataTable = null;
      let _dataTable_Norm = null;
      let _dataTable_33_211 = null;

      if (this.state.Object != null) {
         _dataTable = this.state.Object.incidents;
         _dataTable_Norm = this.state.Object.normales;
      }

      if (this.state.Object_Two != null) {
         _dataTable_33_211 = this.state.Object_Two.incidents;
      }


      let err = null;
      if (this.state.isExistError) {
         err = 'Ошибка! Сервер не ответил!';
      }

      let _AhrefBack = '/ChFirst';
      let ChooSeChart = 'azs'
      switch (this.props.NeedCode) {
         case '191': {
            _AhrefBack = '/ChFirst_191';
            //ChooSeChart = 'date'
            ChooSeChart = 'month'
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

      return (
         <table>
            <tbody>
               <tr>
                  {this.state.isExistError
                     ?
                     (<W_head header={err} color='red' AhrefBack={_AhrefBack} />)
                     :
                     (
                        <W_head header={this.props.header} AhrefBack={_AhrefBack} />
                     )
                  }
               </tr>
               <tr>
                  <W_headDate updateData={this.updateData}
                     startDate={this.props.startDate}
                     endDate={this.props.endDate}
                     isDisable={false} />
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
                  />
               }
            </tbody>
         </table>
      );
   }
}
