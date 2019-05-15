import React, { Component, PropTypes } from 'react';
import W_head from './w_head.jsx';
import W_headDate from './w_headDate.jsx';
import W_chart from './w_chart.jsx';
import { Link } from "react-router-dom";

export default class w_main_Icon extends Component {
   constructor(props) {
      super(props);
   }
   render() {
      return (
         <table>
            <tbody>
               <th rowSpan='3'>
                  <Link to="/ChTDRP">
                     <img src={'../images/JDownloader.ico'} width='30' />
                  </Link>
               </th>
               <tr>
                  <W_head header={this.props.header} />
               </tr>
               <tr>
                  <W_headDate 
                     startDate={this.props.startDate} endDate={this.props.endDate}
                     isDisable={true}
                  />
               </tr>
               <tr>
                  <W_chart Data={this.props.DataChart} w_Width={this.props.w_Width}/>
               </tr>
            </tbody>
         </table>
      );
   }
}
//StartDate={this.props.StartDate} StopDate={this.props.StopDate} 