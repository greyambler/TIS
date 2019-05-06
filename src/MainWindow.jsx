import React, { Component, PropTypes } from 'react';

import {
   get_Date, Get_StartDate, Get_StopDate,
   GetDateNow, contains, GetDatFromColChart, dataStart, dataStop
} from './core/core_Function.jsx';

//import TotalIndication from './chart/TotalIndication.jsx'
//import RightIndication from './chart/RightIndication.jsx'
//import Histogram from './chart/Histogram.jsx'

import Header_Main from './chart/Header_Main.jsx';
import Header_Main_Chart from './chart/Header_Main_Chart.jsx';

import ColumnChart from './chart/ColumnChart.jsx';
import LinesChart from './chart/LinesChart.jsx';
import Histogram_2 from './chart/Histogram_2.jsx';
import HistogramGroup from './chart/HistogramGroup.jsx';

const _Debuge = true;


const Rss = "http://172.23.16.18:11000/msg";

//"http://172.23.16.18:11000/msg";
//"http://172.23.16.125:11000/msg?from=DateTime&to=DateTime";
//http://172.23.16.125:11000/msg?from=2019-02-17T23:01:22Z&to=2019-02-018T18:00:36Z

//"get_01.json";
//"http://172.23.16.125:8000/dpfacade-1.0-SNAPSHOT/webresources/ru.expertek.dp.dpfacade.dvc/";

class MainWindow extends React.Component {
   constructor(props) {
      super(props);
      //this.tick = this.tick.bind(this);
      this.state = {
         currentDate: GetDateNow(),
         W_Width: this.props.w_Width,
         W_Height: this.props.w_Height,

         Objest: null,
      }
   }

   async componentDidMount() {
      this.setState({ W_Width: this.props.w_Width });
      //await this.tick();
      //this.timerID = setInterval(() => this.tick(), 30000);//30 сек
   }


/*
   async tick() {
      
      var rss = Rss;
      var myRequest = new Request(rss);

      try {
         var response = await fetch(
            myRequest
            ,
            {
               method: 'GET',
               //mode: 'no-cors',
               headers:
               {
                  'Accept': 'application/json',
               },
            }
         );
         if (response.ok) {
            const Jsons = await response.json();

            this.setState({ Objest: Jsons });
         }
         else {
            throw Error(response.statusText);
         }
      }
      catch (error) {
         console.log(error);
      }
   }
   */
   componentDidUpdate(prevProps) {
      if (this.props.w_Width != prevProps.w_Width) {
         this.setState({ W_Width: this.props.w_Width });
      }
   }

   render() {
      let dataCol_Char1 = GetDatFromColChart(get_Date());

      let _Objects = this.state.Objest;
/*
      let numfiles = 0;
      let numincidents = 0;
      if (_Objects != null) {
         numfiles = _Objects.numfiles;
         numincidents = _Objects.numincidents;
      }
*/
      //<Header_Main numfiles={numfiles} numincidents={numincidents} />
      //<Header_Main_Chart numfiles={numfiles} numincidents={numincidents} />
      return (
         <div>


            <table>
               <tbody>
                  <tr>
                     <td colSpan='2' >
                        {!_Debuge ? (
                           <Header_Main numObjects={_Objects} Rss={Rss}/>
                        ) : (
                              <Header_Main_Chart numObjects={_Objects} Rss={Rss}/>
                           )}
                     </td>
                  </tr>
                  <tr><td colSpan='2'><hr /><br /><br /><br /></td></tr>
                  <tr>
                     <td className='td_C_Chart' width={(this.state.W_Width - 5) / 2} ><ColumnChart Data={dataCol_Char1}
                        dataStart={dataStart} dataStop={dataStop}
                        w_Width={this.state.W_Width} />
                     </td>
                     <td className='td_C_Chart' width={(this.state.W_Width - 5) / 2} ><LinesChart Data={dataCol_Char1}
                        w_Width={this.state.W_Width} />
                     </td>
                  </tr>
                  <tr><td colSpan='2'><br /><br /><br /></td></tr>
                  <tr>
                     <td className='td_C_Chart' width={(this.state.W_Width - 5) / 2} ><HistogramGroup Data={dataCol_Char1}
                        w_Width={this.state.W_Width} />
                     </td>
                     <td className='td_C_Chart' width={(this.state.W_Width - 5) / 2} ><Histogram_2 Data={dataCol_Char1}
                        w_Width={this.state.W_Width} />
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      );
   }
}

export default MainWindow;
