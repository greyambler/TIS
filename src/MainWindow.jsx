import React, { Component, PropTypes } from 'react';

import HeaderCh_Main from './chart/HeaderCh_Main.jsx';
import First_Chart from './chart/First_Chart.jsx';
import Second_Chart from './chart/Second_Chart.jsx';
import Third_Chart from './chart/Third_Chart.jsx';
import Fourth_Chart from './chart/Fourth_Chart.jsx';

import Test_Chart from './chart/Test_Chart.jsx';

import moment from 'moment';

const _Debuge = true;

export default class MainWindow extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         W_Width: this.props.w_Width,
         W_Height: this.props.w_Height,
         Object: null,
      }
   }

   updateData = ({ startDate, endDate, NumberChart }) => {
      this.props.updateData({ startDate, endDate, NumberChart });
   }

   async componentDidMount() {
      this.setState({ W_Width: this.props.w_Width });
   }

   componentDidUpdate(prevProps) {
      if (this.props.w_Width != prevProps.w_Width) {
         this.setState({ W_Width: this.props.w_Width });
      }
   }

   render() {
      return (
         <div>
            <HeaderCh_Main numObjects={this.state.Object} Rss={this.props.Rss}
               S_Date_Head={this.props.S_Date_Head} E_Date_Head={this.props.E_Date_Head}
               updateData={this.updateData}
            />

            <hr /><hr /><br />

            <table>
               <tbody>
                  <tr className="tr_Chart">
                     <td className='td_C_Chart' width={(this.state.W_Width - 5) / 2} >
                        <First_Chart Rss={this.props.Rss} RssIncident={this.props.RssIncident}

                           dateStart={this.props.S_Date} dateStop={this.props.E_Date}

                           w_Width={this.state.W_Width} IsTable={false}
                           updateData={this.updateData}
                        />
                     </td>
                     <td className='td_C_Chart' width={(this.state.W_Width - 5) / 2} >
                        <Second_Chart
                           dateStart={this.props.S_Date_2} dateStop={this.props.E_Date_2}
                           w_Width={this.state.W_Width} IsTable={false}
                           updateData={this.updateData}
                        />
                     </td>
                  </tr>
                  <tr>
                     <td colSpan='2'><hr /><hr /><br /></td>
                  </tr>
                  <tr className="tr_Chart">
                     <td className='td_C_Chart' width={(this.state.W_Width - 5) / 2} >
                        <Third_Chart
                           dateStart={this.props.S_Date_3} dateStop={this.props.E_Date_3}
                           w_Width={this.state.W_Width} IsTable={false}
                           updateData={this.updateData}
                        />
                     </td>

                     <td className='td_C_Chart' width={(this.state.W_Width - 5) / 2} >
                        <Fourth_Chart
                           dateStart={this.props.S_Date_4} dateStop={this.props.E_Date_4}
                           w_Width={this.state.W_Width} IsTable={false}
                           updateData={this.updateData}
                        />
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      );
   }
}
