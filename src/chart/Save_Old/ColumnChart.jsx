import React, { Component, PropTypes } from 'react';

import ReactDOM from 'react-dom';

import { Chart, Geom, Axis, Tooltip, Legend, Coord, Label, Guide } from 'bizcharts';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";


class ColumnChart extends Component {
   constructor(props) {
      super(props);
      this.state = {
         W_Width: this.props.w_Width / 2 - 25,
         Data: this.props.Data,
      }
   }

   componentDidMount() {
      this.setState({ W_Width: this.props.w_Width / 2 - 25 });
   }

   componentDidUpdate(prevProps) {
      if (this.props.w_Width != prevProps.w_Width) {
         this.setState({ W_Width: this.props.w_Width / 2 - 25 });
      }
      if (this.props.Data != prevProps.Data) {
         this.setState({ Data: this.props.Data });
      }
   }

   render() {

      const cols1 = {
         N: { alias: 'Событий' },
         CASHIER_ID: { alias: 'Кассир' }
      };

      return (
         <div>
            <table>
               <tbody>
                  <tr>

                     <th rowSpan='2'>
                        <Link to="/ChTDRP">
                           <img src={'../images/JDownloader.ico'} width='30' />
                        </Link>
                     </th>

                     <th>
                        <center>Недоступность касс за период на АЗК</center>
                     </th>

                  </tr>
                  <tr>
                     <td className="td_Date">
                        <center>{this.props.dateStart}  -  {this.props.dateStop}</center>
                     </td>
                  </tr>

                  <tr >
                     <td colSpan='3'>
                        <center>
                           <Chart
                              forceFit
                              width={this.state.W_Width}
                              height={200}
                              data={this.state.Data}
                              scale={cols1}>
                              <Axis name="N" />
                              <Axis name="CASHIER_ID" />
                              <Tooltip />
                              <Geom type="interval" position="CASHIER_ID*N" color="N" />
                           </Chart>
                        </center>
                     </td>
                  </tr>

               </tbody>
            </table>
         </div>
      );
   }
}


export default ColumnChart;
