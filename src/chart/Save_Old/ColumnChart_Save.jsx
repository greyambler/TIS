import React, { Component, PropTypes } from 'react';

import ReactDOM from 'react-dom';

import { Chart, Geom, Axis, Tooltip, Legend, Coord, Label, Guide } from 'bizcharts';


class ColumnChart_Save extends Component {
   constructor(props) {
      super(props);
      this.state = {
         W_Width: this.props.w_Width / 2 - 25,
      }
   }
   componentDidUpdate(prevProps) {
      if (this.props.w_Width != prevProps.w_Width) {
         this.setState({ W_Width: this.props.w_Width / 2 - 25 });
      }
   }

   render() {
      const data = [
         { genre: 'Sports', sold: 275, income: 2300 },
         { genre: 'Strategy', sold: 115, income: 667 },
         { genre: 'Action', sold: 120, income: 982 },
         { genre: 'Shooter', sold: 350, income: 5271 },
         { genre: 'Other', sold: 150, income: 3710 }
      ];

      const cols = {
         sold: { alias: 'Первы1' },
         genre: { alias: 'Второй2' }
      };

      return (
         <div>
            <table>
               <tbody>
                  <tr>
                     <td>
                        <center>
                           <Chart
                              forceFit
                              width={this.state.W_Width}
                              height={200}
                              data={data}
                              scale={cols}>
                              <Axis name="genre" />
                              <Axis name="sold" />
                              <Legend position="bottom" dy={-10} />
                              <Tooltip />
                              <Geom type="interval" position="genre*sold" color="genre" />
                           </Chart>
                        </center>
                     </td>
                  </tr>
                  <tr>
                     <td>
                        <center>Доступность касс(по подключенным регионам, общее количество перезагрузок)</center>
                     </td>
                  </tr>
               </tbody>
            </table>
         </div>
      );
   }
}
export default ColumnChart_Save;
