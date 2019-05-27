import React, { Component, PropTypes } from 'react';
import W_head from '../controls/w_head.jsx';
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
      let dataCol_Char1 = null;

      if (this.state.Object != null) {
         _dataTable = this.state.Object.incidents
         //dataCol_Char1 = GetDatFromColChart(_dataTable);
      }
      /*
      else
      {
         _dataTable = get_Date_Filter(get_Date(), this.props.startDate, this.props.endDate);
         dataCol_Char1 = GetDatFromColChart(_dataTable);
      }
      */

      let err = null;
      if (this.state.isExistError) {
         err = 'Ошибка! Сервер не ответил!';
      }
      return (
         <table>
            <tbody>
               <tr>
                  <th rowSpan='3'>
                     <Link to="/ChFirst">
                        <img src={'../images/JDownloader.ico'} className='ICO_Link' />
                     </Link>
                  </th>
               </tr>
               <tr>
                  {this.state.isExistError ? (
                     <W_head header={err} color='red' />
                  ) : (
                        <W_head header={this.props.header} />
                     )
                  }
               </tr>
               <tr>
                  <W_headDate updateData={this.updateData}
                     startDate={this.props.startDate} endDate={this.props.endDate} isDisable={false} />
               </tr>

               {_dataTable != null &&
                  <W_charts Data={_dataTable} w_Width={this.props.w_Width} isLegend={false} />
               }
            </tbody>
         </table>
      );
   }
}