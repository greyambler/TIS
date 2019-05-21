import React, { Component, PropTypes } from 'react';

import {
   get_Date, Get_StartDate, Get_StopDate,
//   GetDateNow, contains, GetDatFromColChart, dateStart, dateStop
} from './core/core_Function.jsx';

//import TotalIndication from './chart/TotalIndication.jsx'
//import RightIndication from './chart/RightIndication.jsx'


//import Header_Main from './chart/Save_Old/Header_Main.jsx';
//import Header_Main_Chart from './chart/Header_Main_Chart.jsx';

import HeaderCh_Main from './chart/HeaderCh_Main.jsx';

import First_Chart from './chart/First_Chart.jsx';
import Second_Chart from './chart/Second_Chart.jsx';
import Third_Chart from './chart/Third_Chart.jsx';
import Fourth_Chart from './chart/Fourth_Chart.jsx';


import LinesChart from './chart/Save_Old/LinesChart.jsx';
import Histogram_2 from './chart/Save_Old/Histogram_2.jsx';
import HistogramGroup from './chart/Save_Old/HistogramGroup.jsx';

import moment from 'moment';


const _Debuge = false;


class MainWindow extends React.Component {
   constructor(props) {
      super(props);
      this.state = {
         //currentDate: moment(),//GetDateNow(),
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
                  <tr>
                     <td className='td_C_Chart' width={(this.state.W_Width - 5) / 2} >
                        <First_Chart Rss={this.props.Rss} RssIncident={this.props.RssIncident}
                           dateStart={this.props.S_Date} dateStop={this.props.E_Date}
                           w_Width={this.state.W_Width} IsTable={false}
                           updateData={this.updateData}
                        />
                     </td>

                     <td className='td_C_Chart' width={(this.state.W_Width - 5) / 2} >
                        <Second_Chart
                           dateStart={this.props.S_Date} dateStop={this.props.E_Date}
                           w_Width={this.state.W_Width} IsTable={false}
                           updateData={this.updateData}
                        />
                     </td>

                  </tr>
                  <tr>
                     <td colSpan='2'><hr /><hr /><br /></td>
                  </tr>
                  <tr>

                     <td className='td_C_Chart' width={(this.state.W_Width - 5) / 2} >
                        <Third_Chart
                           dateStart={this.props.S_Date} dateStop={this.props.E_Date}
                           w_Width={this.state.W_Width} IsTable={false}
                           updateData={this.updateData}
                        />
                     </td>

                     <td className='td_C_Chart' width={(this.state.W_Width - 5) / 2} >
                        <Fourth_Chart
                           dateStart={this.props.S_Date} dateStop={this.props.E_Date}
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

export default MainWindow;

/*

                     <td className='td_C_Chart' width={(this.state.W_Width - 5) / 2} ><LinesChart Data={dataCol_Char1}
                        dateStart={S_Date} dateStop={E_Date}
                        w_Width={this.state.W_Width} />
                     </td>


                     <td className='td_C_Chart' width={(this.state.W_Width - 5) / 2} ><HistogramGroup Data={dataCol_Char1}
                        dateStart={S_Date} dateStop={E_Date}
                        w_Width={this.state.W_Width} />
                     </td>

                     <td className='td_C_Chart' width={(this.state.W_Width - 5) / 2} ><Histogram_2 Data={dataCol_Char1}
                        dateStart={S_Date} dateStop={E_Date}
                        w_Width={this.state.W_Width} />
                     </td>


*/