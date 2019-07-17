import React, { Component, PropTypes } from 'react';
import W_head from '../controls/w_head_link.jsx';
import W_headDate from '../controls/w_headDate.jsx';
import W_chart from './w_chart.jsx';


import { Link } from "react-router-dom";
import moment from 'moment';
import { get_Date_Filter, get_Date, GetDatFromColChart, GetDatFromColChart_month } from '../../core/core_Function.jsx';

export default class w_main_Icon extends Component {
   constructor(props) {
      super(props);

      this.state = {
         Object: null,
         Rss: this.props.RssDate,
      }
   }
   render() {
      let _AhrefBack = '/ChTest';
      let ChooSeChart = 'azs'
      let err = null;
      if (this.state.isExistError) {
         err = 'Ошибка! Сервер не ответил!';
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
               <tr>
                  <td  className='tr_Chart'>
                     <W_chart
                        w_Width={this.props.w_Width}
                        isLegend={false}
                        NeedCode={this.props.NeedCode}
                        typeChart={ChooSeChart}
                     />
                  </td>
               </tr>
            </tbody>
         </table>
      );
   }
}
