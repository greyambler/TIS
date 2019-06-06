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
      this.state = {
         Object: null,
         Rss: this.props.RssDate,
      }
   }
   componentDidMount() {
      this.tick();
      //this.timerID = setInterval(() => this.tick(), 30000);
   }
   updateData = ({ startDate, endDate }) => {
      this.props.updateData({ startDate, endDate });
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
   render() {
      let _dataTable = null;
      if (this.state.Object != null) {
         _dataTable = this.state.Object.incidents
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
            ChooSeChart = 'date'
         } break;
         case '122': {
            _AhrefBack = '/ChFirst_122';
            ChooSeChart = 'azs'
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
                  <W_charts Data={_dataTable} w_Width={this.props.w_Width} isLegend={false}
                     NeedCode={this.props.NeedCode}
                     typeChart={ChooSeChart}
                  />
               }
            </tbody>
         </table>
      );
   }
}
