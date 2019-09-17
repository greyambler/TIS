import React, { Component, PropTypes } from 'react';

import W_headDate from '../controls/w_headDate.jsx';

import W_chartDolay from './w_chartDolay.jsx';
import W_chartDolayProc from './w_chartDolayProc.jsx';


import moment from 'moment';

export default class w_main_IconSave extends Component {
   constructor(props) {
      super(props);
   }

   render() {
      return (
         <table>
            <tbody>
               <tr>
                  <td colspan="2" width={this.props.w_Width}>
                     <>
                        <table>
                           <tbody>
                              <tr>
                                 <W_headDate updateData={this.updateData}
                                    startDate={this.props.startDate}
                                    endDate={this.props.endDate}
                                    isDisable={false}
                                 />
                              </tr>
                           </tbody>
                        </table>
                     </>
                  </td>
               </tr>
               <tr>
                  <td width={this.props.w_Width}>
                     <W_chartDolayProc
                        startDate={this.props.w_Width / 2}
                        endDate={this.props.endDate}
                        w_Width={this.props.w_Width/ 5}
                     />
                  </td>
               </tr>
               <tr>
                  <td width={this.props.w_Width}>
                     <W_chartDolay
                        startDate={this.props.startDate}
                        endDate={this.props.endDate}
                        w_Width={this.props.w_Width / 4}
                     />
                  </td>
               </tr>
{/*
               <tr>
                  <td width={this.props.w_Width / 2} height="20px">

                     <W_chartDolayProc
                        startDate={this.props.w_Width / 2}
                        endDate={this.props.endDate}
                        w_Width={this.props.w_Width}
                     />
                  </td>
               </tr>
*/}
            </tbody>
         </table>
      );
   }
}
